import React from 'react';
import '../styles/AboutPage.css';
import lawyerImage from '../assets/stockimages/lawer.jpg';
import TestimonialSection from './TestimonialSection';
import FAQSection from './FAQSection';
import FotterSection from './FotterSection';

function AboutPage() {
    return (
        <div>
        <section className="about-page-section">
            <div className="about-page-content">
                <h1 className="about-page-title">Innovation. Secured by <span className="about-page-emphasis">Expertise.</span></h1>
                <p className="about-page-description">
                    For over 25 years, LexVuIP has empowered intellectual property attorneys with expert patent illustration and IP documentation services—enabling seamless filings, confident prosecution, and bulletproof compliance with global patent offices. From complex utility patents to intricate design and trademark filings, we help legal professionals worldwide present innovation with unmatched accuracy and clarity.
                </p>
                <button className="about-page-btn">Talk to a Lawyer →</button>
            </div>
            <div className="about-page-image-container">
                <img src={lawyerImage} alt="Lawyer" className="about-page-image" />
            </div>
        </section>
        <section className="our-journey-section">
            <div className="our-journey-left-column">
                <div className="our-journey-header">
                    <div className="our-journey-arrow-container">
                        <span className="our-journey-arrow"></span>
                        <span className="our-journey-arrow"></span>
                        <span className="our-journey-arrow"></span>
                    </div>
                    <h2 className="our-journey-title-small">OUR JOURNEY</h2>
                </div>
            </div>
            <div className="our-journey-right-column">
                <h1 className="our-journey-title-large">
                    Two Decades of Justice, One <span className="our-journey-emphasis">Client</span> at a Time
                    <br />
                    Fighting for Fairness in Every <span className="our-journey-emphasis">Courtroom</span>
                </h1>
                <p className="our-journey-description">
                    We started with one goal: make high-caliber legal counsel available to those who need it most. Today, our
                    multidisciplinary team continues to fight for fairness, resolution, and lasting impact. What began as a small,
                    focused practice in 2002 has grown into a leading law firm—trusted by individuals and companies alike to deliver
                    outcomes that matter.
                </p>
                <button className="our-journey-btn">Talk to a Lawyer →</button>
            </div>
        </section>
        <TestimonialSection />
        <FAQSection />
        <FotterSection />
        </div>
    );
}

export default AboutPage;