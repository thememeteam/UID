import Article from "@/components/Article";
import Link from "next/link";

const Models: React.FC = () => {
	return (	
		<div className="w-full h-full grid grid-rows-[repeat(3,32rem)] ">
			<div className="bg-[url('/gtc4lusso.png')] bg-cover bg-bottom flex flex-col justify-center p-6 ">
				<Article title="Vitesse" className="self-end mr-32">
				<p>Luxury for the week, performance for the weekend</p>
				<Link href="/models/vitesse" className="bg-accent text-black p-2">Learn more</Link>
				</Article>
			</div>
			<div className="bg-[url('/porsche-normal.jpg')] bg-cover relative flex flex-col justify-center p-6" >
				{/* <img className="absolute top-0 left-0 w-full object-cover" src="porsche-normal.jpg"/> */}
				<Article title="R6" className="ml-32">
				<p>Track performance, road practicality</p>
				<Link href="/models/r6" className="bg-accent text-black p-2">Learn more</Link>
				</Article>
			</div>
			<div className="bg-[url('/P1.webp')] bg-cover bg-center relative flex flex-col justify-center p-6" >
				<Article title="Nuclide" className="self-end mr-32">
				<p>The ultimate track weapon.<br/><del>May</del> Will spontaneously release energy.</p>
				<Link href="/models/nuclide" className="bg-accent text-black p-2">Learn more</Link>
				</Article>
			</div>
		</div>
	);
};

export default Models;
