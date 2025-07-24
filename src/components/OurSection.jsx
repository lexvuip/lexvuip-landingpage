import React from 'react';
import '../styles/OurSection.css';

const services = [
	{
		number: 1,
		title: (
			<>
				Precision <em>P Solutions, Built for Attorneys</em> Who Protect Innovation
			</>
		),
		description:
			'At LexVuIP, we understand that accuracy isn’t a luxury it’s a necessity. That’s why we deliver specialized intellectual property support services designed to meet the high standards of patent attorneys, IP law firms, and legal teams worldwide.',
		image:
			'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80',
		alt: 'Utility Patent Drawings',
	},
	{
		number: 2,
		title: (
			<>
				Utility  <em>Patent Drawings</em>
			</>
		),
		description:
			'Expertly detailed technical patent illustrations for mechanical, electrical, chemical, and software inventions. Our drawings are fully compliant with USPTO, EPO, and other global patent office standards, ensuring smooth prosecution and clear examiner communication.',
		image:
			'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80',
		alt: 'Design Patent Illustrations',
	},
	{
		number: 3,
		title: (
			<>
				Design <em>Patent Drawings</em>
			</>
		),
		description:
			'We create clean, high-resolution design patent illustrations that align with the exacting visual format requirements of design patent offices worldwide from the USPTO to the EUIPO and WIPO.',
		image:
			'https://unsplash.com/photos/chair-parts-chart-hanging-on-wall-Mpq0LddqiTk',
		alt: 'Provisional Patent Sketches',
	},
	{
		number: 4,
		title: (
			<>
				Trademark <em>Support</em>
			</>
		),
		description:
			'Professional trademark drawings and renderings, including wordmarks, logos, and stylized marks, formatted to meet global trademark office requirements for seamless registration.',
		image:
			'https://unsplash.com/photos/chair-parts-chart-hanging-on-wall-Mpq0LddqiTk',
		alt: 'Provisional Patent Sketches',
	},
	{
		number: 5,
		title: (
			<>
				Custom <em>IP Solutions</em>
			</>
		),
		description:
			'Have a unique workflow or firm-specific requirement? We seamlessly integrate into your team’s processes, delivering accurate, on-time IP support that meets your client’s expectations and yours.',
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
