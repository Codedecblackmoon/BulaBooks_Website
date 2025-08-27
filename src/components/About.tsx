import React from 'react';
import im from '../images/img1.png'
import './About.css';

const About: React.FC = () => {
  const teamMembers = [
    { name: 'Busisiwe', role: 'Founder & CEO', color: 'orange' },
    { name: 'Thandiwe', role: 'Head of Education', color: 'orange' },
    { name: 'Lerato', role: 'Lead Developer', color: 'orange' },
    { name: 'Sibusiso', role: 'UX Designer', color: 'orange' },
    { name: 'Grace', role: 'Marketing Director', color: 'orange' },
    { name: 'Mandla', role: 'Head of Partnerships', color: 'orange' }
  ];

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

        <div className="text-center team-header">
          <h3>Meet Our Team</h3>
          <p>Passionate educators and technologists working together</p>
        </div>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member">
              <div className={`team-avatar ${member.color}`}></div>
              <h4>{member.name}</h4>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
