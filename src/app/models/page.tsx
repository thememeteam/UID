import Article from "@/components/Article";
import Link from "next/link";

const Models: React.FC = () => {
	return (
		<div className="w-full h-full grid grid-rows-[32rem_7rem_32rem_7rem_32rem]">
			<div className="col-start-1 row-start-1 row-span-2 
				bg-[url('/assets/m5/sl63two2.jpg')] bg-cover bg-top-left 
				flex flex-col justify-center"
			>
				<div
					className="absolute w-full h-full opacity-90"
				/>
				<Article title="SLS" className="self-end mr-32 z-10 bg-card backdrop-blur-md p-8 border border-card-stroke wedge">
					<p>Luxury for the week,<br /> Sheer Drop-Top Thrill for the weekend.</p>
					<Link
						href="/models/m5"
						className="bg-accent text-black p-2"
					>
						Learn more
					</Link>
				</Article>
			</div>
			<div className="col-start-1 row-start-2 row-span-3
				bg-[url('/assets/viper/porsche-normal.jpg')] bg-right bg-cover 
				relative flex flex-col justify-center opacity"
			style={{mask: 'linear-gradient(to bottom, transparent 0%, black 7rem)'}}>
				<div
					className="absolute w-full h-full opacity-90"
				/>
				<Article title="Viper" className="w-fit ml-32 z-10 bg-card backdrop-blur-md p-8 border border-card-stroke wedge">
					<p>Track performance, road practicality.</p>
					<Link
						href="/models/viper"
						className="block w-fit mt-6 bg-accent text-black p-2"
					>
						Learn more
					</Link>
				</Article>
			</div>
			<div className="col-start-1 row-start-4 row-span-2
				bg-[url('/assets/nuclide/p1.jpg')] bg-cover bg-left
				relative flex flex-col justify-center"
			style={{mask: 'linear-gradient(to bottom, transparent 0%, black 7rem'}}>
				<div
					className="absolute w-full h-full opacity-90"
				/>
				<Article title="Nuclide" className="self-end mr-32 z-10 bg-card backdrop-blur-md p-8 border border-card-stroke wedge">
					<p>
						The ultimate track weapon.
						<br />
						Will spontaneously release energy.
					</p>
					<Link
						href="/models/nuclide"
						className="bg-accent text-black p-2"
					>
						Learn more
					</Link>
				</Article>
			</div>
		</div>
	);
};

export default Models;
