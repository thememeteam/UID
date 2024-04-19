import Article from "@/components/Article";

const Models: React.FC = () => {
	return (
		<div className="w-full h-full grid grid-rows-[repeat(3,30rem)]">
			<div className="bg-red-500">
				<h1>Vitesse</h1>
			</div>
			<div className="bg-green-500 flex flex-col justify-center pl-6" >
				<img src="porsche-normal.jpg"></img>
				<Article title="R6" className="ml-32">
				<p>track performance, road practicality</p>
				</Article>
			</div>
			<div className="bg-blue-500" >
				<h1>Nuclide</h1>
			</div>
		</div>
	);
};

export default Models;
