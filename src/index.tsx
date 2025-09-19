import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/Navbar';
import Landingpage from './components/Landingpage'
import HowItWorks from './components/HowItWorks'
import Features from './components/Features'
import Impact from './components/Impact'
import Download from './components/Download'
import About from './components/About'
import Contact from './components/Contact';
import Footer from './components/Footer';
import reportWebVitals from './reportWebVitals';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Navbar />
    <Landingpage />
    <About />
    <HowItWorks />
    <Features />
    {/* <Impact /> */}
    {/* <Download /> */}
    <Contact />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
