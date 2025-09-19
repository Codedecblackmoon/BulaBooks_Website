import React from "react";
import { Download, Play } from "lucide-react";
import la from '../images/ds1.png'
import "./Landingpage.css";

const Landingpage: React.FC = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-grid">
          {/* Left Side - Text */}
          <div className="hero-text">
            <h1>
              Unlock Every Child's{" "}
              Reading Journey
              {/* Unlock Every Child's{" "}
              <span className="highlight">Reading Journey</span> */}
            </h1>
            <p>
              AI-powered multilingual storybooks that help children in South Africa learn to read in English and home languages, even offline.
            </p>
            <div className="hero-buttons">
              {/* <button className="btn btn-dark">
                <Download size={20} />
                Download
              </button> */}
              <button className="btn btn-dark"><a href="#ccontact">Contact Us</a></button>
              <button className="btn btn-orange">
                <Play size={20} />
                <a href="https://bulabooks-mockup-2-bocv.vercel.app/" target="#">Free Demo</a>
              </button>
            </div>
          </div>

          {/* Right Side - Hero Image Placeholder */}
          <div className="hero-image">
            <div className="la">
              <img src={la} alt="" />
            </div>
            {/* Decorative circles */}
            <div className="decor-circle decor-1"></div>
            <div className="decor-circle decor-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landingpage;
