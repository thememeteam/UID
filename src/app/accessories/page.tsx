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
				parts.map(record =>{
					return(
						<div className="box" key = {record.partnumber }>
							<h1></h1>
						</div>
					)
				}
					
				)
			</div>
		</>
	);
};

export default Accessories;
