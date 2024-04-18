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
				<div className="flex flex-col gap-16 mx-auto max-w-[90ch] mt-16">
					<Article className="max-w-[50ch]" title="About us">
						<p>
							Aap nigger ho
						</p>
					</Article>
					<Article className="max-w-[50ch] self-end" title="Our work">
						<p>Every model we release is our next magnum opus.</p>
						<p>
							We spend years refining every release. Our master
							engineers work tireless towards increasing
							horsepower, reducing weight, and enhancing comfort.
							Then we do it again, ad infinitum.
						</p>
					</Article>
					<Article className="max-w-[50ch]" title="Get your own">
						<p>
							Every vehicle that rolls out of the Feynman workshop
							in Marathahalli is expertly built by hand.
						</p>
						<p>
							We work with our demanding and individualistic
							clientele to customize every vehicle to their exact
							specifications. No two Feynmans will ever be the
							same.
						</p>
					</Article>
				</div>
			</div>
		</>
	);
};

export default About;
