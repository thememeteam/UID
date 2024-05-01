import Hero from "@/components/Hero";
import parts from './parts.json';
const Accessories: React.FC = () => {
	return (
		<>
			<Hero type="image" src="/assets/nuclide/p1gtr4.jpg" alt="Accesories header">
				<span className="block mix-blend-difference nomargin text-8xl  text-accent">
					Accessories
				</span>
			</Hero>
			<div className="grid grid-cols-4 gap-2">
				{
					parts.map((e) => (
						<div key={e.partNumber}>{e.name}</div>
					))
				}
			</div>
		</>
	);
};

export default Accessories;
