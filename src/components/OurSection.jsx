import React from 'react';
import '../styles/OurSection.css';

const services = [
	{
		number: 1,
		title: (
			<>
				Utility <em>Patent Drawings</em>
			</>
		),
		description:
			'Our attorneys bring decades of criminal defense experience to defend your rights, challenge evidence, and build a strategic case',
		image:
			'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80',
		alt: 'Utility Patent Drawings',
	},
	{
		number: 2,
		title: (
			<>
				Design <em>Patent Illustrations</em>
			</>
		),
		description:
			'We help you secure, protect, and enforce your intellectual property rights, from patents to trademarks and copyrights.',
		image:
			'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80',
		alt: 'Design Patent Illustrations',
	},
	{
		number: 3,
		title: (
			<>
				Provisional <em>Patent Sketches</em>
			</>
		),
		description:
			'From contracts to compliance, our business law team provides guidance and representation for companies of all sizes.',
		image:
			'https://unsplash.com/photos/chair-parts-chart-hanging-on-wall-Mpq0LddqiTk',
		alt: 'Provisional Patent Sketches',
	},
];

function OurSection() {
	return (
		<section id="services" className="our-section">
			<div className="our-container">
				<div className="our-label">Our Services</div>
				<h2 className="our-title">
					Trusted Expertise across the all spectrum - tailored to your unique
					needs.
				</h2>
				<div className="our-services-list">
					{services.map((service, idx) => (
						<div className="our-service-card" key={idx}>
							<div className="our-service-number">{service.number}.</div>
							<div className="our-service-content">
								<div className="our-service-title">{service.title}</div>
								<div className="our-service-description">
									{service.description}
								</div>
							</div>
							<div className="our-service-image-wrapper">
								<img
									className="our-service-image"
									src={service.image}
									alt={service.alt}
								/>
							</div>
						</div>
					))}
				</div>
				<div className="our-learnmore-row">
					<button className="our-learnmore-btn">Learn More</button>
				</div>
			</div>
		</section>
	);
}

export default OurSection;
