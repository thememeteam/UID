const CTAButton: React.FC<{ children: React.ReactNode; className?: string }> =
	({ children, className }) => {
		return (
			<div className={`relative w-fit ${className}`}>
				<div className="peer">{children}</div>
				<div className="block absolute -top-8 -left-12 peer-hover:-top-12 peer-hover:-left-16 transition-all w-1/2 h-full border-t-2 border-l-2 border-divider-stroke" />
				<div className="block absolute -bottom-8 -right-12 peer-hover:-bottom-12 peer-hover:-right-16 transition-all w-1/2 h-full border-b-2 border-r-2 border-divider-stroke" />
			</div>
		);
	};

export default CTAButton;
