import React, { useState } from 'react';
import '../styles/FAQSection.css';

const faqs = [
	{
		question: 'What should I expect during my first consultation?',
		answer:
			'During your first consultation, we will discuss your legal needs, review your case, and outline possible next steps. Our goal is to provide clarity and guidance.',
	},
	{
		question: 'How are legal fees structured?',
		answer:
			'Legal fees may be hourly, flat-rate, or contingency-based, depending on your case. We will explain all costs up front so there are no surprises.',
	},
	{
		question: 'Do I need an attorney for small legal issues?',
		answer:
			'Even small legal issues can have big consequences. Consulting an attorney ensures your rights are protected and you make informed decisions.',
	},
	{
		question: 'What types of business entities can you help with?',
		answer:
			'We assist with LLCs, corporations, partnerships, and more. Our team can guide you in choosing and forming the right entity for your needs.',
	},
	{
		question: 'Can you help in a contract dispute?',
		answer:
			'Yes, we have extensive experience resolving contract disputes through negotiation, mediation, or litigation as needed.',
	},
];

const avatars = [
	'https://randomuser.me/api/portraits/women/44.jpg',
	'https://randomuser.me/api/portraits/men/32.jpg',
	'https://randomuser.me/api/portraits/women/68.jpg',
];

function FAQSection() {
	const [openIdx, setOpenIdx] = useState(null);

	return (
		<section className="faq-section">
			<div className="faq-container">
				<div className="faq-left">
					<h2 className="faq-heading">
						<span className="faq-heading-italic">Frequently</span> Asked
						<br />
						Questions
					</h2>
					<div className="faq-desc">
						Anything else you’d like to know? Get in touch with our sales team
						and we’d be happy to discuss your questions.
					</div>
					<button className="faq-contact-btn">
						Talk to a Lawyer <span className="faq-arrow">→</span>
					</button>
					<div className="faq-avatars">
						{avatars.map((src, idx) => (
							<img className="faq-avatar" src={src} alt="avatar" key={idx} />
						))}
					</div>
				</div>
				<div className="faq-right">
					{faqs.map((faq, idx) => (
						<div
							className={`faq-accordion${openIdx === idx ? ' open' : ''}`}
							key={idx}
							onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
						>
							<div className="faq-question-row">
								<span className="faq-question">{faq.question}</span>
								<span className="faq-dropdown-icon">
									{openIdx === idx ? '▲' : '▼'}
								</span>
							</div>
							{openIdx === idx && (
								<div className="faq-answer">{faq.answer}</div>
							)}
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default FAQSection;
