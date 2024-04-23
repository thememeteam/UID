import Hero from "@/components/Hero";

const Accessories: React.FC = () => {
	return (
		<>
			<Hero type="image" src="/p1gtr4.jpg" alt="Accesories header">
				<span className="block mix-blend-difference nomargin text-8xl  text-accent">
					Accessories
				</span>
			</Hero>
			<div className="grid grid-cols-2 gap-2">
				<div></div>
				<div></div>
			</div>
		</>
	);
};

export default Accessories;
