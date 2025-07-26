import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/ContactUs.css';
import contactHeaderBg from '../assets/stockimages/lawer.jpg';
import FooterSection from '../components/FotterSection';

function ContactUs() {
	const [formData, setFormData] = useState({
		fullName: '',
		email: '',
		phone: '',
		subject: '',
		message: ''
	});
	const [message, setMessage] = useState('');

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		emailjs.send('gmail', 'template_YOUR_TEMPLATE_ID', formData, 'YOUR_PUBLIC_KEY')
			.then((result) => {
				console.log(result.text);
				setMessage('Thank you for your message! We will get back to you shortly.');
				setFormData({
					fullName: '',
					email: '',
					phone: '',
					subject: '',
					message: ''
				});
			}, (error) => {
				console.log(error.text);
				setMessage('Failed to send message. Please try again later.');
			});
	};
	return (
		<section className="contact-section">
			<div className="contact-header-bg" style={{ backgroundImage: `url(${contactHeaderBg})` }}>
				<div className="contact-header-content">
					<h1 className="contact-title">Let's Talk About <span className="contact-title-emphasis">Your Case</span></h1>
				</div>
			</div>
			<div className="contact-container">
				<div className="contact-form-container">
					<h2 className="contact-form-title">Send Us a Message</h2>
					<p className="contact-form-description">
						Tell us a little about your legal matter, and one of our attorneys will reach out to you shortly.
					</p>
					<form className="contact-form" onSubmit={handleSubmit}>
						<div className="form-group">
							<input type="text" id="fullName" name="fullName" placeholder="Full Name" required value={formData.fullName} onChange={handleChange} />
						</div>
						<div className="form-group">
							<input type="email" id="email" name="email" placeholder="Email Address" required value={formData.email} onChange={handleChange} />
						</div>
						<div className="form-group">
							<input type="tel" id="phone" name="phone" placeholder="Phone Number" required value={formData.phone} onChange={handleChange} />
						</div>
						<div className="form-group">
							<input type="text" id="subject" name="subject" placeholder="Title of your project" required value={formData.subject} onChange={handleChange} />
						</div>
						<div className="form-group">
							<textarea id="message" name="message" placeholder="Tell us more about your project" rows="5" required value={formData.message} onChange={handleChange}></textarea>
						</div>
						<button type="submit" className="submit-btn">Submit</button>
					</form>
					{message && <p className="form-message">{message}</p>}
				</div>
				{/* <div className="contact-info">
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
				</div> */}
			</div>
			<FooterSection />
		</section>
	);
}

export default ContactUs;