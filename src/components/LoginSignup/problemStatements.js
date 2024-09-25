import React from 'react';
import './ProblemStatementsPage.css'; // Renamed CSS file for clarity

function ProblemStatementsPage() { // Renamed component
    const pageStyle = {
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh', 
        padding: '20px', 
    };

    return (
        <div style={pageStyle}> 
            <div className="main-container">
                <div className="problem-page">  {/* Updated classname */}
                    <h1>Hackathon Problem Statements</h1>
                    <p>Here are some beginner-friendly problem statements to get you started and build your confidence for real hackathons.</p>
                    
                    <div className="problem-categories">  {/* Updated classname */}
                        <div className="category">
                            <h3>To-Do List with Collaboration Features</h3>
                            <div className="category-content">
                                <p>Build a simple to-do list application where users can add tasks, assign them to team members, and track progress. The app should allow multiple users to work on the same list simultaneously, with features like real-time updates and task comments.</p>
                            </div>
                        </div>
                        <div className="category">
                            <h3>Virtual Study Group</h3>
                            <div className="category-content">
                                <p>Develop a platform where students can form study groups, share notes, and collaborate on solving practice problems. Include a chat feature, a shared whiteboard, and a space for uploading and commenting on study materials.</p>
                            </div>
                        </div>
                        <div className="category">
                            <h3>Recipe Sharing Platform</h3>
                            <div className="category-content">
                                <p>Create a simple platform where users can share their favorite recipes and collaborate on improving them. Users should be able to add ingredients, instructions, and photos, and their friends can suggest modifications or leave comments.</p>
                            </div>
                        </div>
                        <div className="category">
                            <h3>Event Planner with Task Sharing</h3>
                            <div className="category-content">
                                <p>Design a basic event planning app where users can create events, invite friends, and assign tasks like decorations, food preparation, or logistics. The app should allow real-time updates on task completion and event details.</p>
                            </div>
                        </div>
                        <div className="category">
                            <h3>Idea Brainstorming Tool</h3>
                            <div className="category-content">
                                <p>Develop a platform where users can brainstorm ideas together. The platform should have a simple interface for adding ideas, categorizing them, and voting on the best ones. Users can work in real-time to refine ideas and develop them further.</p>
                            </div>
                        </div>
                        <div className="category">
                            <h3>Simple Budget Tracker for Groups</h3>
                            <div className="category-content">
                                <p>Create a budget tracker where a group of users can input expenses, track spending, and manage a shared budget. The app should allow real-time updates and provide a summary of where money is being spent.</p>
                            </div>
                        </div>
                        <div className="category">
                            <h3>Group Journal</h3>
                            <div className="category-content">
                                <p>Build a digital journal that can be shared among a group. Users can add entries, leave comments on others’ entries, and reflect together on shared experiences. The journal should have a simple interface that encourages regular updates.</p>
                            </div>
                        </div>
                        <div className="category">
                            <h3>Simple Quiz Maker</h3>
                            <div className="category-content">
                                <p>Design a platform where users can create quizzes on any topic and share them with their friends. The quizzes should be multiple-choice, and users can take them in real-time, seeing how their scores compare with others.</p>
                            </div>
                        </div>
                        <div className="category">
                            <h3>Basic File Sharing Hub</h3>
                            <div className="category-content">
                                <p>Develop a basic file-sharing platform where users can upload files, organize them into folders, and share them with specific friends or groups. Include simple permissions to control who can view or edit files.</p>
                            </div>
                        </div>
                        <div className="category">
                            <h3>Interactive Learning Flashcards</h3>
                            <div className="category-content">
                                <p>Create a flashcard app where users can create decks of cards on various topics and share them with friends. Users can quiz each other in real-time and track progress on learning the material.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProblemStatementsPage;  // Updated component name
