import React, { useState, useEffect } from 'react';
import '../styles/NavBar.css';

function NavBar() {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY;
			if (scrollPosition > 100) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};

		window.addEventListener('scroll', handleScroll);
		
		// Clean up the event listener when component unmounts
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
			<div className="navbar-logo">LexvuIP</div>
			<ul className="navbar-links">
				<li>Home</li>
				<li>Services</li>
				<li>About</li>
				<li>FAQ</li>
			</ul>
			<div className="navbar-contact">
				<button className="contact-btn">Get In Touch <span className="faq-arrow">→</span></button>
			</div>
		</nav>
	);
}

export default NavBar;
