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
					<p className="text-5xl font-display mix-blend-difference text-orange-400">
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
				>
				</video>
			</div>
			<div className="mx-auto max-w-[70ch]">
				<h1 className="text-h1 font-display accentline mt-4">
					About us
				</h1>
				<p></p>
				<p className="mt-8">
				Here is a description of Feynman Motors, your sports car dealership:

Feynman Motors is a premier sports car dealership located in the heart of the city. Established in 2015, the dealership has built a reputation for offering an exceptional selection of the latest and greatest high-performance vehicles.

The showroom is a sleek and modern space, with floor-to-ceiling windows that allow natural light to flood in and highlight the stunning sports cars on display. The inventory is carefully curated, featuring top models from brands like Porsche, Ferrari, Lamborghini, McLaren, and more. Each vehicle is meticulously maintained and inspected to ensure it meets the highest standards of quality and performance.

Beyond the showroom, Feynman Motors also houses a state-of-the-art service center staffed by highly trained technicians. Customers can bring in their sports cars for routine maintenance, diagnostics, and repairs, confident that their vehicles are in good hands. The dealership also offers a range of customization and upgrade options, allowing customers to personalize their rides to their exact specifications.

What sets Feynman Motors apart is the exceptional level of customer service. The sales team is knowledgeable, attentive, and dedicated to helping each customer find the perfect sports car to suit their needs and driving style. The dealership also offers a range of financing and leasing options to make the purchasing process as seamless as possible.

Whether you're in the market for your dream sports car or simply want to browse the latest offerings, Feynman Motors is the destination of choice for enthusiasts in the area. With its commitment to excellence, the dealership continues to be a driving force in the local automotive community.
				</p>
			</div>
		</>
	);
};

export default About;
