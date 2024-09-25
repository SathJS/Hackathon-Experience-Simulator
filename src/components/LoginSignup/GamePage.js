import React from 'react';
import './GamePage.css';
import { Link } from 'react-router-dom';




function GamePage() {
    const pageStyle = {
      
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh', 
        padding: '20px', 
    };

    return (
        <div style={pageStyle}> 
            <div className="main-container">
                <div className="game-page">
                    <h1>Take a Break</h1>
                    <p>Here you can play interactive games that teach coding concepts in an engaging way.</p>
                    
                    <div className="game-categories">
                        <div className="category">
                            <Link to="/Hangman">
                                <h3>Hangman</h3>
                            </Link>
                            <div className="category-content">
                                <p>Step into the shoes of a word detective! Guess the secret word letter by letter, but be careful—each wrong guess brings you one step closer to a stick-figure doom. Can you save the day and uncover the mystery before it's too late?</p>
                             
                            </div>
                        </div>
                        <div className="category">
                            <Link to="/Scramble"> 
                                <h3>Scramble</h3>
                            </Link>
                            <div className="category-content">
                                <p>Get ready to twist your brain into knots! Unscramble the jumbled letters to reveal the hidden word. It's a race against the clock, so sharpen your mind and let the wordplay begin!"</p>
                                
                            </div>
                        </div>
                        <div className="category">
                            <Link to="/Snake">
                                <h3>Snake</h3>
                            </Link>
                            <div className="category-content">
                                <p>Slither your way to victory! Guide your snake through the maze, munching on tasty treats to grow longer. But watch out—don’t bite your own tail! It’s a classic game of skill, strategy, and a little bit of luck. How long can you go?</p>
                               
                            </div>
                        </div>
                        <div className="category">
                            <Link to="/Crossword"> 
                                <h3>Crossword</h3>
                            </Link>
                            <div className="category-content">
                                <p>Dive into the world of word puzzles! Use clever clues to fill in the blanks and uncover the hidden words in this grid of mystery. Whether you're going across or down, every word brings you closer to a satisfying 'Aha!' moment.</p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GamePage;
