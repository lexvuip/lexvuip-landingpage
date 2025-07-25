import React, { useState, useEffect } from 'react';
import '../styles/TestimonialSection.css';

const testimonials = [
	{
		name: 'Jane Doe',
		text: 'LexvuIP provided exceptional service and made the legal process seamless. Highly recommend their expertise!',
	},
	{
		name: 'John Smith',
		text: 'Professional, knowledgeable, and always available to answer my questions. I felt truly supported throughout.',
	},
	{
		name: 'Emily Chen',
		text: 'Their attention to detail and dedication to my case was outstanding. I am grateful for their help!',
	},
	{
		name: 'Carlos Rivera',
		text: 'A trustworthy team that goes above and beyond. I would not hesitate to work with them again.',
	},
	{
		name: 'Priya Patel',
		text: 'Clear communication and excellent results. LexvuIP exceeded my expectations in every way.',
	},
];

function TestimonialSection() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [animating, setAnimating] = useState(false);
	const [direction, setDirection] = useState(''); // 'left' or 'right'
	const [visibleCards, setVisibleCards] = useState([]);
	const cardsToShow = 1; // Show only one card at a time
	const total = testimonials.length;

	// Initialize visible cards
	useEffect(() => {
		updateVisibleCards(currentIndex);
	}, [currentIndex]);

	// Function to get the correct index with wrapping
	const getWrappedIndex = (index) => {
		return (index + total) % total;
	};

	// Update which cards are visible
	const updateVisibleCards = (startIndex) => {
		// For single card display, we'll include the current card
		// and also track the previous and next cards for animation purposes
		const currentCard = {
			...testimonials[startIndex],
			originalIndex: startIndex,
			position: 'current'
		};
		
		setVisibleCards([currentCard]);
	};

	const handlePrev = () => {
		if (animating) return;
		setDirection('left');
		setAnimating(true);
		setTimeout(() => {
			setCurrentIndex(prev => getWrappedIndex(prev - 1));
			setAnimating(false);
		}, 500);
	};

	const handleNext = () => {
		if (animating) return;
		setDirection('right');
		setAnimating(true);
		setTimeout(() => {
			setCurrentIndex(prev => getWrappedIndex(prev + 1));
			setAnimating(false);
		}, 500);
	};

	return (
		<section className="testimonial-section">
			<div className="testimonial-container">
				<h2 className="testimonial-heading">WHAT OUR CLIENTS SAY</h2>
				<div className="testimonial-carousel-container">
					<div
						className={`testimonial-cards-row testimonial-slide-${
							animating ? direction : 'none'
						}`}
					>
						{visibleCards.map((testimonial, idx) => (
							<div 
								className="testimonial-card card-center"
								key={`${testimonial.originalIndex}-${idx}`}
							>
								<div className="testimonial-text">{testimonial.text}</div>
								<div className="testimonial-name">- {testimonial.name}</div>
							</div>
						))}
					</div>
				</div>
				<div className="testimonial-nav-row">
					<button
						className="testimonial-nav-btn"
						onClick={handlePrev}
						aria-label="Previous testimonials"
						disabled={animating}
					>
						&#8592;
					</button>

					<button
						className="testimonial-nav-btn"
						onClick={handleNext}
						aria-label="Next testimonials"
						disabled={animating}
					>
						&#8594;
					</button>
				</div>
			</div>
		</section>
	);
}

export default TestimonialSection;