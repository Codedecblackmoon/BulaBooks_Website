import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import logo from '../images/logo2.png'
import './Footer.css';

const Footer: React.FC = () => {
  const footerSections = [
    {
      title: 'Company',
      links: ['About Us', 'Our Story', 'Careers', 'Press', 'Blog']
    },
    {
      title: 'Help',
      links: ['Customer Support', 'Delivery Details', 'Terms & Conditions', 'Privacy Policy', 'Sitemap']
    },
    {
      title: 'Resources',
      links: ['Free eBooks', 'Development Tutorial', 'How to - Blog', 'Youtube Playlist']
    },
    {
      title: 'Social Media',
      links: ['Facebook', 'Twitter', 'YouTube', 'Instagram', 'LinkedIn']
    }
  ];

  const socialIcons = [
    { icon: Facebook, label: 'Facebook' },
    { icon: Twitter, label: 'Twitter' },
    { icon: Instagram, label: 'Instagram' },
    { icon: Linkedin, label: 'LinkedIn' }
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Logo and Description */}
          <div className="footer-brand">
            <div className="footer-logo">
              <img src={logo} alt="" />
              {/* <div className="logo-icon">📚</div>
              <span className="logo-text">BulaBooks</span> */}
            </div>
            <p className="footer-desc">
              Empowering children across South Africa with engaging reading experiences and AI-powered learning tools.
            </p>
            <div className="social-icons">
              {socialIcons.map((social, index) => (
                <button
                  key={index}
                  className="social-btn"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </button>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index} className="footer-section">
              <h3 className="footer-title">{section.title}</h3>
              <ul className="footer-links">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="footer-link">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            Copyright © 2025 BulaBooks. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
