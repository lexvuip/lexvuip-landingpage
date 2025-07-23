import React from 'react';
import '../styles/AboutSection.css';

function AboutSection() {
	return (
		<section id="about" className="about-section">
			<div className="about-container">
				<div className="about-content">
					<div className="about-label">About Us</div>
					<h2 className="about-title">
						Protecting What Matters Most, For Over 20 Years
					</h2>
					<p className="about-description">
						At LexvuIP, we specialize in delivering high-quality patent drawings and design services tailored for inventors, law firms, and enterprises around the world. Our mission is simple — to turn your ideas into professionally crafted, USPTO-compliant illustrations that protect your innovation and showcase your vision with clarity.
					</p>
					<p className='about-description'>
						With a deep understanding of Intellectual Property standards and regulations, we go beyond just creating drawings — we offer strategic visual communication that speaks the language of patent examiners.
					</p>
					<div className="about-actions">
						<button className="about-contact-btn" onClick={() => window.location.href = '/contact'}>Get In Touch</button>
					</div>
				</div>
			</div>
			<div className="about-divider" />
			<div className="about-image-row">
				<img
					className="about-image"
					src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80"
					alt="Drawing on tablet"
				/>
			</div>
			<div className="about-divider" />
			<div className="about-stats-row">
				<div className="about-stat">
					<div className="about-stat-value">1200+</div>
					<div className="about-stat-label">Projects Successfully Handled</div>
				</div>
				<div className="about-stat">
					<div className="about-stat-value">98%</div>
					<div className="about-stat-label">Client Satisfaction Rate</div>
				</div>
				<div className="about-stat">
					<div className="about-stat-value">20+ Yr</div>
					<div className="about-stat-label">
						Serving Individuals & Businesses
					</div>
				</div>
				<div className="about-stat">
					<div className="about-stat-value">40+</div>
					<div className="about-stat-label">Industries Represented</div>
				</div>
			</div>
			<div className="about-divider" />
		</section>
	);
}

export default AboutSection;
