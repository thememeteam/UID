import Article from "@/components/Article";
import Hero from "@/components/Hero";
import Link from "next/link";

const Home: React.FC = () => {
	return (
		<>
			<Hero type="video" src="/stockvid.mp4" alt="Homepage Video">
				<div className="p-8 relative font-display">
					<div className="absolute -top-8 -left-12 w-64 h-28 border-t-2 border-l-2 border-divider-stroke" />
					<span className="block mix-blend-difference nomargin text-8xl text-accent">
						Feynman
					</span>
					<span className="block w-fit mx-auto text-h2 opacity-75">
						Performance exemplified
					</span>
					<div className="absolute -bottom-6 -right-12 w-64 h-28 border-b-2 border-r-2 border-divider-stroke" />
				</div>
			</Hero>
			<div className="flex flex-col gap-16 mx-auto max-w-[100ch] mt-16">
				<div className="mt-12 text-center self-center">
					<p className="font-display text-h1 text-nowrap">
						We make high-performance vehicles.
					</p>
					<p className="font-body font-normal mx-auto max-w-[50ch]">
						Every one of our vehicles is precision-engineered and
						painstakingly manufactured, delivering performance in a
						league of its own.
					</p>
				</div>
				<hr className="border-divider-stroke my-8 w-1/5 self-center" />
				<div className="grid grid-cols-2 gap-8">
					<Article title="Our work">
						<p>Every model we release is our next magnum opus.</p>
						<p>
							We spend years refining every release. Our master
							engineers work tirelessly towards increasing
							horsepower, reducing weight, and enhancing comfort.
							Then we do it again, ad infinitum.
						</p>
						<Link
							className="bg-accent text-black p-2 -skew-x-[20deg]"
							href={"/models"}
						>
							Explore our models
						</Link>
					</Article>
					<img src="p1_group_photo.webp" alt=""/>
				</div>
				<div className="grid grid-cols-2 gap-8">
					<img src="p1_group_photo.webp" alt="" />
					<Article className="max-w-[50ch]" title="Get your own">
						<p>
							Every vehicle that rolls out of the Feynman workshop
							in Kadugodi is expertly built by hand.
						</p>
						<p>
							We work with our demanding and individualistic
							clientele to customize every vehicle to their exact
							specifications. No two Feynmans will ever be the
							same.
						</p>
						<Link
							className="bg-accent text-black p-2 -skew-x-[20deg]"
							href={"/configurator"}
						>
							Configure your Feynman
						</Link>
					</Article>
				</div>
				<div className="grid grid-cols-2 gap-8 mb-12">
					<Article className="max-w-[50ch] mb-8" title="Our legacy">
						<p>
							We were founded in 1987 by Muthuswamy Feynman, and
							quickly rose to fame for our unrelenting passion for
							engineering and meticulous attention to detail.
						</p>
						<p>
							37 years on, we continue to preserve our founder's
							vision in everything that we do.
						</p>
						<Link
							className="bg-accent text-black p-2 -skew-x-[20deg]"
							href={"/about"}
						>
							Read about us
						</Link>
					</Article>
					<img src="p1_group_photo.webp" alt="" />
				</div>
			</div>
		</>
	);
};

export default Home;
