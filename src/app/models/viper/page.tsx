import Hero from "@/components/Hero";

const ViperPage: React.FC = () => {
	return (
		<>
			<Hero type="image" src="/assets/911gt3.png" alt="Viper hero image">
				<span className="block mix-blend-difference nomargin text-8xl text-accent">
					Viper
				</span>
			</Hero>
		</>
	);
};

export default ViperPage;
