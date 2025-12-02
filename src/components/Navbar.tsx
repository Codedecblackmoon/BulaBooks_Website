import React from "react";
import { Menu, X } from "lucide-react";
import logo1 from '../images/logo1.png'
import Swal from "sweetalert2";
import "./Navbar.css";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const triggerDownload = (filePath, fileName) => {
    const link = document.createElement("a");
    link.href = filePath;
    link.download = fileName;
    link.click();
  };

  const handleDownload = () => {
    Swal.fire({
      title: "Choose your download",
      text: "Which version do you want to download?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "PC Version",
      cancelButtonText: "Phone Version",
    }).then((result) => {
      if (result.isConfirmed) {
        triggerDownload("/downloads/game-pc.zip", "game-pc.zip");
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        triggerDownload("/downloads/game-phone.apk", "game-phone.apk");
      }
    });
  };

  // const handleDownload = () => {
  //   const link = document.createElement("a");
  //   link.href = "/example.pdf"; // file location in public folder
  //   link.download = "BulaBooks"; 
  //   link.click();
  // };

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
            <button onClick={handleDownload} className="btn-signup"><a >Download </a></button>
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
              {/* <div className="auth-mobile">
                <button className="btn-signup"><a href="#contact">Contect Us</a></button>
                {/* <button className="btn-signup">Sign Up</button> 
              </div> */}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
