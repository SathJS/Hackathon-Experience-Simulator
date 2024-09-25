import { Link } from "react-router-dom";
import "./profile.css";
import img1 from "./purpleppl.png";
import abimg from "./pplinblocks.png";
import logo from "./hhlogo.png";
import { FaGlobe, FaLightbulb, FaHandsHelping, FaRocket } from 'react-icons/fa'; 
import howItWorksImg from "./hiws.jpg";

function Profile() {
  return (
    <div>
      <header>
        <nav>
          <div className="logo">
            <img src={logo} alt="Logo"/>
          </div>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#why-choose-us">Features</a></li>
            <li><a href="#how-it-works">How It Works</a></li>
            
            <li><Link to="/login">Log In</Link></li>
          </ul>
        </nav>
      </header>

   
        <section id="home" className="hero">
          <div className="hero-content">
            <h1>Unleash Your Coding Potential!</h1>
            <p>Collaborate. Create. Conquer.
              <br></br>
              <br></br>
              <br></br>

            <a href="#about" className="cta-button">Get Started</a>
            </p>
            
          </div>
          <div className="image-container">
            <img src={abimg} alt="Home Img" />
          </div>
        </section>
     

      <div className="about-container">
      <h2>About Us</h2>
        <section id="about" className="about">
          
          <div className="image-container">
            <img src={img1} alt="About Img" />
          </div>
          <div className="about-content">
          
          <p>Hackathon Hub is a platform dedicated to bringing together coders from around the world to collaborate, create, and compete. Whether you're a beginner looking to learn or an expert looking to showcase your skills, Hackathon Hub has something for everyone.</p>
          <p>Our mission is to foster a community where ideas can flourish and innovation can thrive. We believe in the power of collaboration and the potential of every coder to make a difference.</p>
          </div>
        </section>
      </div>

      <div className="why-choose-us-container">
        
        <section id="why-choose-us" className="why-choose-us">
        <h2>Why Choose Us</h2><br></br>
        <div className="reason-cardbox">
          <div className="reason-card">
            <div className="icon">
              <FaGlobe />
            </div>
            <h3>Global Community</h3>
            <p>Join a diverse and inclusive community of coders from around the world, all eager to share knowledge and learn together.</p>
          </div>
          <div className="reason-card">
            <div className="icon">
              <FaLightbulb />
            </div>
            <h3>Innovative Learning</h3>
            <p>Engage with cutting-edge tools and resources that make learning to code exciting and interactive.</p>
          </div>
          <div className="reason-card">
            <div className="icon">
              <FaHandsHelping />
            </div>
            <h3>Networking</h3>
            <p>Our platform fosters a collaborative atmosphere where teamwork is key, and every member is encouraged to contribute and grow.</p>
          </div>
          <div className="reason-card">
            <div className="icon">
              <FaRocket />
            </div>
            <h3>Continuous Growth</h3>
            <p>Participate in ongoing challenges and activities that push your boundaries and help you grow as a coder.</p>
          </div>
          </div>
        </section>
      </div>

     <div className="how-it-works-container">
        <section id="how-it-works" className="how-it-works">
          <div className="images-row">
            <div className="image-container1">
              <img src={howItWorksImg} alt="How It Works" className="how-it-works-image" />
            
              
          </div>
          </div>
        </section>
      </div>
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Hackathon Hub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Profile;
