import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
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
// import reportWebVitals from './reportWebVitals';
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar />
    <Landingpage />
    <About />
    <HowItWorks />
    <Features />
    {/* <Impact /> */}
    {/* <Download /> */}
    <Contact />
    <Footer />
  </StrictMode>,
)
