import Article from "@/components/Article";
import Link from "next/link";

const Home: React.FC = () => {
	return (
		<>
			<div className="relative w-full h-screen">
				<div
					className="absolute w-full h-full flex flex-col items-center justify-center gap-4"
					style={{
						background:
							"linear-gradient(to bottom, var(--background-fill) 0%, transparent 40%, var(--background-fill) 100%",
					}}
				>
					<span className="nomargin text-8xl font-display mix-blend-difference text-orange-400">
						Feynman
					</span>
					<span className="text-h2 font-display mix-blend-difference">
						Performance exemplified
					</span>
				</div>
				<video
					muted
					autoPlay
					loop
					disablePictureInPicture
					className="h-screen w-full object-cover"
				>
					<source src="/stockvid.mp4" />
				</video>
			</div>
			<div className="flex flex-col gap-16 mx-auto max-w-[90ch] mt-16">
				<div className="mt-12 max-w-[50ch] text-center text-h3 self-center">
					<p className="font-display">We make high-performance vehicles.</p>
					<p className="font-body">
						Every one of our vehicles is precision-engineered and
						painstakingly manufactured, delivering performance in a
						league of its own.
					</p>
				</div>
				<hr className="border-divider-stroke my-16 w-2/5 self-center" />
				<Article className="max-w-[50ch]" title="Our work">
					<p>Every model we release is our next magnum opus.</p>
					<p>
						We spend years refining every release. Our master
						engineers work tireless towards increasing horsepower,
						reducing weight, and enhancing comfort. Then we do it
						again, ad infinitum.
					</p>
					<Link href={'/models'}>Explore our models</Link>
				</Article>
				<Article className="max-w-[50ch] self-end" title="Get your own">
					<p>
						Every vehicle that rolls out of the Feynman workshop in
						Marathahalli is expertly built by hand.
					</p>
					<p>
						We work with our demanding and individualistic clientele
						to customize every vehicle to their exact
						specifications. No two Feynmans will ever be the same.
					</p>
					<Link href={'/configurator'}>Configure your Feynman</Link>
				</Article>
				<Article className="max-w-[50ch] mb-8" title="Our legacy">
					<p>
						We were founded in 1987 by Muthuswamy Feynman, and quickly rose to fame for our unrelenting passion for engineering and meticulous attention to detail.
					</p>
					<p>
						37 years on, we continue to preserve our founder's vision in everything that we do.
					</p>
					<Link href={'/about'}>Read our story</Link>
				</Article>
			</div>
		</>
	);
};

export default Home;
