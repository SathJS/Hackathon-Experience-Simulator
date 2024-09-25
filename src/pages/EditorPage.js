import React, { useState, useRef, useEffect } from 'react';
import toast from 'react-hot-toast';
import ACTIONS from '../Actions';
import Client from '../components/Client';
import Editor from '../components/Editor';
import "./editor.css";
import { initSocket } from '../socket';
import logo from "./hhlogo.png";
import {
    useLocation,
    useNavigate,
    Navigate,
    useParams,
} from 'react-router-dom';

const EditorPage = () => {
    const socketRef = useRef(null);
    const codeRef = useRef(null);
    const location = useLocation();
    const { roomId } = useParams();
    const reactNavigator = useNavigate();
    const [clients, setClients] = useState([]);
    const listenersAttached = useRef(false);

    useEffect(() => {
        const init = async () => {
            if (!listenersAttached.current) {
                socketRef.current = await initSocket();

                socketRef.current.on('connect_error', handleErrors);
                socketRef.current.on('connect_failed', handleErrors);

                function handleErrors(e) {
                    console.log('socket error', e);
                    toast.error('Socket connection failed, try again later.');
                    reactNavigator('/');
                }

                // Join room
                socketRef.current.emit(ACTIONS.JOIN, {
                    roomId,
                    username: location.state?.username,
                });

                // Handle a user joining
                socketRef.current.on(ACTIONS.JOINED, ({ clients: newClients, username, socketId }) => {
                    setClients(newClients);
                    if (username !== location.state?.username) {
                        toast.success(`${username} joined the room.`);
                    }
                    socketRef.current.emit(ACTIONS.SYNC_CODE, {
                        code: codeRef.current,
                        socketId,
                    });
                });

                // Handle a user leaving/disconnecting
                socketRef.current.on(ACTIONS.DISCONNECTED, ({ socketId, username }) => {
                    toast.success(`${username} left the room.`);
                    setClients((prev) => prev.filter(client => client.socketId !== socketId));
                });

                socketRef.current.on(ACTIONS.CODE_CHANGE, ({ code }) => {
                    if (code !== codeRef.current) {
                        codeRef.current = code;
                    }
                });

                listenersAttached.current = true;
            }
        };

        init();

        // Cleanup listeners on component unmount
        return () => {
            if (socketRef.current) {
                socketRef.current.off(ACTIONS.JOINED);
                socketRef.current.off(ACTIONS.DISCONNECTED);
                socketRef.current.off(ACTIONS.CODE_CHANGE);
                socketRef.current.disconnect();
            }
        };
    }, [reactNavigator, roomId, location.state]);

    // Copy Room ID functionality
    const copyRoomId = async () => {
        try {
            await navigator.clipboard.writeText(roomId);
            toast.success('Room ID copied to clipboard');
        } catch (err) {
            toast.error('Could not copy Room ID');
        }
    };

    // Leave room function
    const leaveRoom = () => {
        socketRef.current.emit(ACTIONS.LEAVE, { socketId: socketRef.current.id, username: location.state?.username });
        reactNavigator('/');
    };

    if (!location.state) {
        return <Navigate to="/" />;
    }

    return (
        <div className="editorMainWrap">
            <div className="editorAside">
                <div className="editorAsideInner">
                    <div className="editorLogo">
                        <img className="editorLogoImage" src={logo} alt="logo" />
                    </div>
                    <h3>Connected</h3>
                    <div className="editorClientsList">
                        {clients.map(client => (
                            <Client key={client.socketId} username={client.username} />
                        ))}
                    </div>
                </div>
                <button className="editorBtn editorCopyBtn" onClick={copyRoomId}>
                    Copy ROOM ID
                </button>
                <button className="editorBtn editorLeaveBtn" onClick={leaveRoom}>
                    Leave
                </button>
            </div>
            <div className="editorWrap">
                <Editor
                    socketRef={socketRef}
                    roomId={roomId}
                    onCodeChange={code => {
                        codeRef.current = code;
                    }}
                />
            </div>
        </div>
    );
};

export default EditorPage;
