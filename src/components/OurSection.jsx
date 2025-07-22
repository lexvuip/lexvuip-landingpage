import React from 'react';
import '../styles/OurSection.css';

const services = [
	{
		number: 1,
		title: (
			<>
				Criminal <em>Defense</em>
			</>
		),
		description:
			'Our attorneys bring decades of criminal defense experience to defend your rights, challenge evidence, and build a strategic case',
		image:
			'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80',
		alt: 'Criminal Defense',
	},
	{
		number: 2,
		title: (
			<>
				Intellectual <em>Property</em>
			</>
		),
		description:
			'We help you secure, protect, and enforce your intellectual property rights, from patents to trademarks and copyrights.',
		image:
			'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80',
		alt: 'Intellectual Property',
	},
	{
		number: 3,
		title: (
			<>
				Business <em>Law</em>
			</>
		),
		description:
			'From contracts to compliance, our business law team provides guidance and representation for companies of all sizes.',
		image:
			'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
		alt: 'Business Law',
	},
];

function OurSection() {
	return (
		<section className="our-section">
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
