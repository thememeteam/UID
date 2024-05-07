import Hero from "@/components/Hero";

const ViperPage: React.FC = () => {
	return (
		<>
			<Hero
				type="video"
				src="/assets/viper/viper.mp4"
				alt="Viper hero video"
			>
				<span className="block mix-blend-difference text-8xl text-accent">
					Viper
				</span>
			</Hero>
		</>
	);
};

export default ViperPage;