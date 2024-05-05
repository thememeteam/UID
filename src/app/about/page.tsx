import Article from "@/components/Article";
import Hero from "@/components/Hero";

const About: React.FC = () => {
	return (
		<>
			<Hero type="video" src="/assets/aboutvid.mp4" alt="About Video">
				<div className="p-8 relative font-display">
					<span className="block mix-blend-difference text-center text-8xl text-accent">
						Striving for
						<br /> excellence
					</span>
				</div>
			</Hero>
			<div className="mx-auto max-w-[90ch]">
				<div className="flex flex-col gap-16 mt-16 mx-auto max-w-[1500ch]">
					<div className="grid grid-cols-2 gap-8">
						<Article title="About Us">
							<p>
								At Feynman Manufacturers, we don't just build
								cars; we engineer automotive masterpieces.
								Located in the heart of Bengaluru, we're
								dedicated to creating sports cars that ignite
								your passion for driving. Our meticulously
								crafted lineup combines cutting-edge technology
								with unparalleled performance, ensuring every
								journey is a thrilling adventure.
							</p>
						</Article>
						<img src="/assets/mtc.jpg" alt="" className="band" />
					</div>
					<div className="grid grid-cols-2 gap-8">
						<img
							src="/assets/history.jpg"
							alt=""
							className="band"
						/>
						<Article className="max-w-[50ch]" title="History">
							<p>
								Founded in 1987, Feynman Manufacturers emerged
								from a vision to redefine the automotive
								industry. Inspired by the pioneering spirit of
								its namesake, Muthuswamy Feynman, our company
								set out to push the boundaries of engineering
								and design. From humble beginnings in a small
								garage in Kottayam, we embarked on a journey to
								create sports cars that would captivate
								enthusiasts around the world.
							</p>
						</Article>
					</div>
					<div className="grid grid-cols-2 gap-8 mb-8">
						<Article title="Pioneering Experience">
							<p>
								Since our inception, Feynman Manufacturers has
								been synonymous with innovation and excellence.
								Our early years were marked by groundbreaking
								advancements in automotive technology, as we
								sought to marry performance with elegance in
								every vehicle we produced. With each new model,
								we continued to raise the bar, setting new
								standards for speed, precision, and style.
								Today, Feynman Manufacturers stands as a
								testament to the enduring legacy of our
								founder's vision. With a diverse lineup of
								iconic sports cars and a global presence
								spanning continents, we remain committed to
								pushing the boundaries of what's possible in the
								automotive world.
							</p>
						</Article>
						<img src="/assets/leman.jpg" alt="" className="band" />
					</div>
				</div>
			</div>
		</>
	);
};

export default About;
