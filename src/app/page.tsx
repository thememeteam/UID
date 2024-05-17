import Article from "@/components/Article";
import Hero from "@/components/Hero";
import { InfoGrid, InfoGridItem } from "@/components/InfoGrid";
import Link from "next/link";

const Home: React.FC = () => {
	return (
		<>
			<Hero type="video" src="/assets/stockvid.mp4" alt="Homepage Video">
				<span className="block mix-blend-difference text-5xl md:text-8xl text-accent">
					Feynman
				</span>
				<span className="block w-fit mx-auto md:text-h2 opacity-75">
					Performance exemplified
				</span>
			</Hero>
			<div className="flex flex-col gap-8 md:gap-16 md:mx-auto mt-16">
				<div className="mt-12 text-center self-center">
					<p className="font-display text-3xl md:text-h1 md:text-nowrap">
						We make high-performance vehicles.
					</p>
					<p className="font-body font-normal mx-auto max-w-[50ch]">
						Every one of our vehicles is precision-engineered and
						painstakingly manufactured, delivering performance in a
						league of its own.
					</p>
				</div>
				<hr className="border-divider-stroke my-6 w-1/5 self-center" />
				<InfoGrid>
					<InfoGridItem
						title="Our work"
						image="/assets/person.jpg"
						alt=""
					>
						<p>Every model we release is our next magnum opus.</p>
						<p>
							We spend years refining every release. Our master
							engineers work tirelessly towards increasing
							horsepower, reducing weight, and enhancing comfort.
							Then we do it again, ad infinitum.
						</p>
						<Link className="accentbutton" href={"/models"}>
							Explore our models
						</Link>
					</InfoGridItem>

					<InfoGridItem
						title="Get your own"
						image="/assets/viper/gt3filler.webp"
						alt=""
					>
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
						<Link className="accentbutton" href={"/configurator"}>
							Configure your Feynman
						</Link>
					</InfoGridItem>

					<InfoGridItem
						title="Our legacy"
						image="/assets/pagani.jpg"
						alt=""
					>
						<p>
							We were founded in 1987 by Muthuswamy Feynman, and
							quickly rose to fame for our unrelenting passion for
							engineering and meticulous attention to detail.
						</p>
						<p>
							37 years on, we continue to preserve our founder's
							vision in everything that we do.
						</p>
						<Link className="accentbutton" href={"/about"}>
							Read about us
						</Link>
					</InfoGridItem>
				</InfoGrid>
			</div>
		</>
	);
};

export default Home;
