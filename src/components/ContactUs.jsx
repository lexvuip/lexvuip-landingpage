import React from 'react';
import '../styles/ContactUs.css';

function ContactUs() {
	return (
		<section className="contact-section">
			<div className="contact-container">
				<div className="contact-header">
					<h1 className="contact-title">Let's Talk About <span className="contact-title-emphasis">Your Case</span></h1>
				</div>
				<div className="contact-form-container">
					<h2 className="contact-form-title">Send Us a Message</h2>
					<p className="contact-form-description">
						Tell us a little about your legal matter, and one of our attorneys will reach out to you shortly.
					</p>
					<form className="contact-form">
						<div className="form-group">
							<input type="text" id="fullName" name="fullName" placeholder="Full Name" required />
						</div>
						<div className="form-group">
							<input type="email" id="email" name="email" placeholder="Email Address" required />
						</div>
						<div className="form-group">
							<input type="tel" id="phone" name="phone" placeholder="Phone Number" required />
						</div>
						<div className="form-group">
							<input type="text" id="subject" name="subject" placeholder="Subject" required />
						</div>
						<div className="form-group">
							<textarea id="message" name="message" placeholder="Message" rows="5" required></textarea>
						</div>
						<button type="submit" className="submit-btn">Submit</button>
					</form>
				</div>
				<div className="contact-info">
					<div className="info-item">
						<h3>Address</h3>
						<p>8027 Thomas Ave.<br />Plattsburgh, NY 12901</p>
					</div>
					<div className="info-item">
						<h3>Phone</h3>
						<p>(612) 123-4456 78</p>
					</div>
					<div className="info-item">
						<h3>Email</h3>
						<p>J&Group@legal.com</p>
					</div>
					<div className="info-item">
						<h3>Office Hours</h3>
						<p>Monday–Friday: 9:00 AM – 6:00 PM+</p>
					</div>
				</div>
				<div className="contact-footer">
					<h3 className="footer-title">Your Legal Experts</h3>
					<div className="faq-dropdown">
						<p>What should I expect during my first consultation?</p>
						<span className="dropdown-arrow">▼</span>
					</div>
				</div>
			</div>
		</section>
	);
}

export default ContactUs;