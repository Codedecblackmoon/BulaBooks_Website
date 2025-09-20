import React, { useRef, useState } from 'react';
import im from '../images/img1.png'
import missionVideo from '../assets/video.mp4'
import './About.css';

const About: React.FC = () => {
  const teamMembers = [
    { name: 'Boitumelo', role: 'Marketing | Dev (Front-End)', color: 'orange' },
    { name: 'khuselo', role: 'Finance | Dev (Back-End)', color: 'orange' },
    { name: 'Lee-vandre', role: 'Finance | Dev (Back-End)', color: 'orange' },
    { name: 'Gideon', role: 'Dev (Front-End)', color: 'orange' },
    { name: 'Oratile', role: 'Marketing | Sales', color: 'orange' },
    { name: 'Montel', role: 'HDev (Back-End)', color: 'orange' }
  ];

  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };


  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="text-center section-header">
          <h2>About BulaBooks</h2>
          <p>Our mission is to transform literacy in South Africa</p>
        </div>

        <div className="about-grid">
          <div>
            <h3>Our Mission</h3>
            <p>
              We believe every child deserves access to quality literacy  education, regardless of their location or economic circumstances.  BulaBooks uses AI technology to make reading accessible, engaging, and  effective for children in underserved communities.
            </p>
            <p>
               Our platform is designed specifically for the South African  context, supporting multiple languages and working offline to reach  children in rural areas.
            </p>
          </div>
          
          <div className="impact-card">
            <img src={im} alt="" />
          </div>
        </div>

        {/* 🎥 Mission Video Section */}
        <div className="video-section">
          <div className="video-wrapper" onClick={togglePlay}>
            <video
              ref={videoRef}
              src={missionVideo}
              className="mission-video"
              controls={false}
            />
            {!isPlaying && <div className="video-overlay"></div>}
            <button className="play-button">▶</button>
          </div>
        </div>

        {/* <div className="t-team">
          <h3>Meet Our Team</h3>
          <p>Passionate educators and technologists working together</p>
        </div> */}

        {/* <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member">
              <div className={`team-avatar ${member.color}`}></div>
              <h4>{member.name}</h4>
              <p>{member.role}</p>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default About;
