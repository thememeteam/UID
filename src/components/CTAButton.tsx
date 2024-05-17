const CTAButton: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className }) => {
	return (
		<div className={`group relative w-fit ${className}`}>
			<div className="block absolute -top-8 -left-12 group-hover:-top-12 group-hover:-left-16 transition-all w-1/2 h-full border-t-2 border-l-2 border-divider-stroke" />
			{children}
			<div className="block absolute -bottom-8 -right-12 group-hover:-bottom-12 group-hover:-right-16 transition-all w-1/2 h-full border-b-2 border-r-2 border-divider-stroke" />
		</div>
	);
};

export default CTAButton;