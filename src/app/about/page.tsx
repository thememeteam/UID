const About: React.FC = () => {
	return (
		<>
			<div className="w-full">
				<video
					muted
					autoPlay
					loop
					disablePictureInPicture
					className="max-h-[32rem] w-full object-cover"
				>
					<source src="/aboutvid.mp4" />
				</video>
			</div>
			<div className="mx-auto max-w-[70ch]">
				<h1 className="text-h1 font-display accentline mt-16">
					About us
				</h1>
				<p></p>
				<p className="mt-8">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit.
					Suscipit, repellat? Dolores distinctio libero ipsam, natus
					saepe, maiores quis ex earum assumenda veniam in dolor
					minus, magnam veritatis iusto quae maxime.
				</p>
			</div>
		</>
	);
};

export default About;
