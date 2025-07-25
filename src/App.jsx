import { Routes, Route, useLocation } from 'react-router-dom';
import AboutSection from './components/AboutSection';
import OurSection from './components/OurSection';
import FotterSection from './components/FotterSection';
import TestimonialSection from './components/TestimonialSection';
import NavBar from './components/NavBar';
import FAQSection from './components/FAQSection';
import ContactUs from './components/ContactUs';
import './styles/App.css';

function AppContent() {
  const location = useLocation();
  const isContactPage = location.pathname === '/contact';

  return (
    <div className="App">
      <NavBar contactPage={isContactPage} />
      <Routes>
        <Route path="/" element={
          <>
            <header className="hero-section">
              <div className="hero-content">
                <h1 className="hero-title">
                  Precision in Every Line
                  <br />
                  Protection in Every Design.
                </h1>
                <p className="hero-description">
                  Your ideas deserve more than just documentation—they deserve
                  distinction. At LexvuIP, we transform concepts into powerful visuals
                  that speak the language of protection. With a team of sharp-eyed
                  artists, engineers, and drafting pros, we don't just meet USPTO
                  standards—we exceed expectations, every time.
                </p>
                <div className="hero-actions">
                  <button className="hero-contact-btn" onClick={() => window.location.href = '/contact'}>Get In Touch</button>
                  <a href="#services" className="hero-services-link">
                    Our Services
                  </a>
                </div>
              </div>
            </header>
            <AboutSection />
            <OurSection />
            <TestimonialSection />
            <FAQSection />
            <FotterSection />
          </>
        } />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <AppContent />
  );
}

export default App;
