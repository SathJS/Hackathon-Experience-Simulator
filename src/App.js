import './App.css';
import { BrowserRouter, Routes, Route,Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './pages/Home';
import EditorPage from './pages/EditorPage';
import Login from "./components/LoginSignup/login";
import SignUp from "./components/LoginSignup/register";
import Profile from "./components/LoginSignup/profile";
import GamePage from "./components/LoginSignup/GamePage";
import Hangman from "./components/LoginSignup/Hangman";
import Scramble from "./components/LoginSignup/Scramble";
import Snake from "./components/LoginSignup/Snake";
import Crossword from "./components/LoginSignup/Crossword";
import ProblemStatementsPage from './components/LoginSignup/problemStatements';
import { useState,useEffect } from "react";
import { auth } from "./components/LoginSignup/firebase";
import CrosswordGrid from './components/LoginSignup/Crossword';
function App() {
    const [user, setUser] = useState();
    useEffect(() => {
      auth.onAuthStateChanged((user) => {
        setUser(user);
      });
    });
    return (
        <>
            <div>
                <Toaster
                    position="top-right"
                    toastOptions={{
                        success: {
                            theme: {
                                primary: '#4aed88',
                            },
                        },
                    }}
                ></Toaster>
            </div>
            <BrowserRouter>
                <Routes>
                <Route
                path="/"
                element={user ? <Navigate to="/profile" /> : <Profile />}
              />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<SignUp />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/home" element={user ? <Home /> : <Navigate to="/login" />} />
                    <Route path="/GamePage" element={<GamePage/>}/>
                    
                    <Route path="/Hangman" element={<Hangman/>}/>
                    <Route path="/Scramble" element={<Scramble/>}/>
                    <Route path="/Snake" element={<Snake/>}/>
                    <Route path="/Crossword" element={<Crossword/>}/>
                    <Route path="/problemStatements" element={<ProblemStatementsPage/>}/>
                    <Route
                        path="/editor/:roomId"
                        element={<EditorPage />}
                    ></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
