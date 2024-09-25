import React, { useEffect, useState } from "react";
import { auth, db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";
import { v4 as uuidV4 } from 'uuid';
import toast from 'react-hot-toast';

import { useNavigate, Link } from 'react-router-dom';
import './home.css';
import logo from "./hhlogo.png";
import problemStatementsImage from './problem-statement.jpeg'; // Placeholder for your image
import gamesImage from './game.jpeg'; // Placeholder for your image

const Home = () => {
    const navigate = useNavigate();
    const [roomId, setRoomId] = useState('');
    const [username, setUsername] = useState('');

    const createNewRoom = (e) => {
        e.preventDefault();
        const id = uuidV4();
        setRoomId(id);
        toast.success('Created a new room');
    };

    const joinRoom = () => {
        if (!roomId || !username) {
            toast.error('ROOM ID & username are required');
            return;
        }

        navigate(`/editor/${roomId}`, {
            state: { username },
        });
    };

    const handleInputEnter = (e) => {
        if (e.code === 'Enter') {
            joinRoom();
        }
    };

    const [userDetails, setUserDetails] = useState(null);

    const fetchUserData = async () => {
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                const docRef = doc(db, "Users", user.uid);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setUserDetails(docSnap.data());
                } else {
                    console.log("No such document!");
                }
            } else {
                console.log("User is not logged in");
            }
        });
    };

    useEffect(() => {
        fetchUserData();
    }, []);

    async function handleLogout() {
        try {
            await auth.signOut();
            window.location.href = "/login";
        } catch (error) {
            console.error("Error logging out:", error.message);
        }
    }

    return (
        <div className="home-page">
            <header className="home-Header">
                <nav className="navbar">
                    <div className="navbar-content">
                        <div className="navbar-logo">
                            <img src={logo} alt="Hackathon Hub Logo"/>
                        </div>
                        <ul className="navbar-links">
                            <li><Link to="/profile" className="navbar-link">Home</Link></li>
                            <li><Link to="/problemStatements" className="navbar-link">Problem Statements</Link></li>
                            <li><Link to="/GamePage" className="navbar-link">Games</Link></li>
                            <button className="btn logout-button" onClick={handleLogout}>Logout</button>
                        </ul>
                    </div>
                </nav>
            </header>
            <div className="user-details">
                {userDetails ? (
                    <h3>Welcome, {userDetails.firstName}!</h3>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
            <div className="greeting-content">
                <p>Get ready to dive into an exciting hackathon experience! <br></br>Explore problem statements, challenge yourself with games, and collaborate with your peers in a fun and engaging environment.</p>
            </div>
            <div className="content-container">
                <Link to="/problemStatements" className="content-link">
                    <div className="content-box">
                        <img src={problemStatementsImage} alt="Problem Statements" className="content-image"/>
                        <div className="content-info">
                            <h2>Problem Statements</h2>
                            <p>Explore our curated list of challenging problem statements designed to test your skills and creativity.</p>
                        </div>
                    </div>
                </Link>
                <Link to="/GamePage" className="content-link">
                    <div className="content-box">
                        <img src={gamesImage} alt="Games" className="content-image"/>
                        <div className="content-info">
                            <h2>Games</h2>
                            <p>Take a break and sharpen your mind with our selection of engaging games for boosting your skills.</p>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="form-container">
                <h4 className="form-title">Join A Room</h4>
                <p>Ready to collaborate? Enter your Room ID and Username to join a coding session with your team. Let the creativity and innovation flow!</p>
                <div className="join-room-form">
                    <input
                        type="text"
                        className="input-field"
                        placeholder="ROOM ID"
                        onChange={(e) => setRoomId(e.target.value)}
                        value={roomId}
                        onKeyUp={handleInputEnter}
                    />
                    <input
                        type="text"
                        className="input-field"
                        placeholder="USERNAME"
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                        onKeyUp={handleInputEnter}
                    />
                    <button className="btn join-button" onClick={joinRoom}>
                        Join
                    </button>
                    <span className="create-info">
                        If you don't have an invite, you can &nbsp;
                        <a
                            onClick={createNewRoom}
                            href="#"
                             className="create-room-link"
                        >
                            create a new room
                        </a>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Home;
