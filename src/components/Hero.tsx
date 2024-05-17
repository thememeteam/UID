interface HeroProps {
	type: "image" | "video";
	src: string;
	alt: string;
	children?: React.ReactNode;
}

const Hero: React.FC<HeroProps> = ({ type, src, alt, children }) => {
	return (
		<div className="relative w-full h-screen mb-8">
			<div
				className="absolute w-full h-full flex flex-col items-center justify-center gap-4"
				style={{
					background:
						"linear-gradient(to bottom, var(--background-fill) 0%, transparent 40%, var(--background-fill) 100%",
				}}
			>
				<div className="group p-8 relative font-display mix-blend-difference z-10">
					{children}
					<div className="hidden md:block absolute -top-8 -left-12 group-hover:-top-12 group-hover:-left-16 transition-all w-64 h-28 border-t-2 border-l-2 border-divider-stroke" />
					<div className="hidden md:block absolute -bottom-8 -right-12 group-hover:-bottom-12 group-hover:-right-16 transition-all w-64 h-28 border-b-2 border-r-2 border-divider-stroke" />
				</div>
			</div>
			{type === "video" && (
				<video
					muted
					autoPlay
					loop
					disablePictureInPicture
					className="h-screen w-full object-cover"
					aria-label={alt}
				>
					<source src={src} />
				</video>
			)}
			{type === "image" && (
				<img
					className="h-screen w-full object-cover"
					src={src}
					alt={alt}
				/>
			)}
		</div>
	);
};

export default Hero;
