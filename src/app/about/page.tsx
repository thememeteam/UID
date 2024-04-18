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
				></video>
			</div>
			<div className="mx-auto max-w-[70ch]">
				<div className="flex flex-col gap-16 mx-auto max-w-[90ch] mt-16">
					<Article className="max-w-[50ch]" title="About us">
						<p>
							Feynman Motors is a premier sports car dealership
							located in the heart of the city. Established in
							2015, the dealership has built a reputation for
							offering an exceptional selection of the latest and
							greatest high-performance vehicles. The showroom is
							a sleek and modern space, with floor-to-ceiling
							windows that allow natural light to flood in and
							highlight the stunning sports cars on display. The
							inventory is carefully curated, featuring top models
							from brands like Porsche, Ferrari, Lamborghini,
							McLaren, and more. Each vehicle is meticulously
							maintained and inspected to ensure it meets the
							highest standards of quality and performance. Beyond
							the showroom, Feynman Motors also houses a
							state-of-the-art service center staffed by highly
							trained technicians. Customers can bring in their
							sports cars for routine maintenance, diagnostics,
							and repairs, confident that their vehicles are in
							good hands. The dealership also offers a range of
							customization and upgrade options, allowing
							customers to personalize their rides to their exact
							specifications. What sets Feynman Motors apart is
							the exceptional level of customer service. The sales
							team is knowledgeable, attentive, and dedicated to
							helping each customer find the perfect sports car to
							suit their needs and driving style. The dealership
							also offers a range of financing and leasing options
							to make the purchasing process as seamless as
							possible. Whether you're in the market for your
							dream sports car or simply want to browse the latest
							offerings, Feynman Motors is the destination of
							choice for enthusiasts in the area. With its
							commitment to excellence, the dealership continues
							to be a driving force in the local automotive
							community.
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
