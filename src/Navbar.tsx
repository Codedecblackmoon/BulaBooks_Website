import React from 'react';
import logo1 from './images/logo1.png'
import './App.css';

function Navbar() {
  return (
    <div className="navbar">
      <img id="image" src={logo1} alt="" />
      <nav>
        <ul>
          <li>Home</li>
          <li>Features</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div className="B">
        <button id='s'>Sign up</button>
        <button id='B'>Download</button>
      </div>
    </div>
  );
}

export default Navbar;
