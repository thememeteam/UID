import Article from "@/components/Article";

const About: React.FC = () => {
	return (
		<>
			<div className="relative h-screen">
				<div
					className="absolute w-full h-full flex flex-col items-center justify-center gap-2"
					style={{
						background:
							"linear-gradient(to bottom, var(--background-fill) 0%, transparent 40%, var(--background-fill) 100%",
					}}
				>
					<p className="text-6xl font-display mix-blend-difference text-orange-400">
						Striving for excellence
					</p>
				</div>
				<video
					src="aboutvid.mp4"
					muted
					autoPlay
					loop
					disablePictureInPicture
					className="max-h-[38rem] w-screen object-cover"
				/>
			</div>
			<div className="mx-auto max-w-[90ch]">
				<div className="flex flex-col gap-16 mx-auto max-w-[90ch]">
					<Article className="max-w-[50ch]" title="About us">
						<p>
							At Feynman Manufacturers, we don't just build cars;
							we engineer automotive masterpieces. Located in the
							heart of Bengaluru, we're dedicated to creating
							sports cars that ignite your passion for driving.
							Our meticulously crafted lineup combines
							cutting-edge technology with unparalleled
							performance, ensuring every journey is a thrilling
							adventure.
						</p>
					</Article>
					<Article className="max-w-[50ch] self-end" title="History">
						<p>
							Founded in 1987, Feynman Manufacturers emerged from
							a vision to redefine the automotive industry.
							Inspired by the pioneering spirit of its namesake,
							Muthuswamy Feynman, our company set
							out to push the boundaries of engineering and
							design. From humble beginnings in a small garage in
							Kottayam, we embarked on a journey to create sports
							cars that would captivate enthusiasts around the
							world.
						</p>
					</Article>
					<Article
						className="max-w-[50ch]"
						title="Pioneering Experience"
					>
						<p>
							Since our inception, Feynman Manufacturers has been
							synonymous with innovation and excellence. Our early
							years were marked by groundbreaking advancements in
							automotive technology, as we sought to marry
							performance with elegance in every vehicle we
							produced. With each new model, we continued to raise
							the bar, setting new standards for speed, precision,
							and style. Today, Feynman Manufacturers stands as a
							testament to the enduring legacy of our founder's
							vision. With a diverse lineup of iconic sports cars
							and a global presence spanning continents, we remain
							committed to pushing the boundaries of what's
							possible in the automotive world.
						</p>
					</Article>
				</div>
			</div>
		</>
	);
};

export default About;
