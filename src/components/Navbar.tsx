import React from "react";
import { Menu, X } from "lucide-react";
import logo1 from '../images/logo1.png'
import "./Navbar.css";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-inner">
          {/* Logo */}
          <div className="logo-container">
            <img id="image" src={logo1} alt="" />
          </div>

          {/* Desktop Navigation */}
          <nav className="nav-desktop">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#features">Features</a>
            <a href="#contact">Contact</a>
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="auth-desktop">
            {/* <button className="btn-signin">Sign In</button> */}
            <button className="btn-signup"><a href="#ccontact">Contect Us</a></button>
          </div>

          {/* Mobile menu button */}
          <button
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="nav-mobile">
            <nav>
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#features">Features</a>
              <a href="#contact">Contact</a>
              <div className="auth-mobile">
                <button className="btn-signup"><a href="#ccontact">Contect Us</a></button>
                {/* <button className="btn-signup">Sign Up</button> */}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
