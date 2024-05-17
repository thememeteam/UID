import Article from "@/components/Article";
import Hero from "@/components/Hero";
import Link from "next/link";
import Datum from "@/components/Datum";
import CTAButton from "@/components/CTAButton";
const NuclidePage: React.FC = () => {
	return (
		<>
			<Hero
				type="video"
				src="/assets/nuclide/nuclidevid.mp4"
				alt="Nuclide hero video"
			>
				<span className=" mix-blend-difference text-8xl font-display text-accent">
					Nuclide
				</span>
			</Hero>
			<div className="mx-auto max-w-[90ch]">
				<div className="flex flex-col gap-16 mx-auto max-w-[900px]">
					<Article className="max-w-[100ch]" title="">
						<p>
							The Feynman Nuclide isn't just a car; it's a
							symphony of engineering mastery and automotive
							artistry. With its sleek, aerodynamic silhouette and
							aggressive stance, the Nuclide commands attention from
							every angle. Its carbon fiber bodywork isn't just
							for show; it's a testament to Feynman's relentless
							pursuit of lightweight performance.
						</p>
					</Article>
					<Article className="max-w-[100ch]" title="">
						<p>
							Underneath the stunning exterior lies a hybrid
							powertrain that combines a potent twin-turbocharged
							V8 engine with an electric motor, delivering a
							jaw-dropping total output that catapults the Nuclide into
							hypercar territory. Acceleration is blistering,
							propelling occupants from 0 to 60 mph in mere
							seconds, while the top speed effortlessly breaches
							the realm of supercar legends. But it's not just
							straight-line speed that defines the Nuclide; it's
							the way it dances through corners with precision and
							finesse.
						</p>
					</Article>
					<div className="flex flex-wrap gap-10 mb-1 m-auto">
						<Datum value="2.8 S" caption="0-100 kmph" />
						<Datum value="6.8 s" caption="0-200 kmph" />
						<Datum value="9.8 s" caption="Quarter mile" />
						<Datum value="350 kmph" caption="Top speed" />
					</div>
					<Article className="max-w-[100ch] mb-8" title="">
						<p>
							Feynman's race-bred technology ensures that every
							input from the driver is met with an instantaneous
							response, creating an unparalleled connection
							between man and machine. Step inside the cockpit,
							and you're greeted by a minimalist yet purposeful
							interior, where every detail is meticulously crafted
							for performance and comfort. Carbon fiber accents,
							plush Alcantara upholstery, and cutting-edge
							instrumentation surround the driver, creating an
							atmosphere that's equal parts luxurious and
							exhilarating.
						</p>
						<CTAButton className="mx-auto my-24">
							<Link
								className="accentbutton m-auto mt-14 mb-5 pl-8 pr-8 p-2 text-xl"
								href={"/configurator/?model=Nuclide"}
							>
								Configure your Nuclide
							</Link>
						</CTAButton>
					</Article>
				</div>
			</div >
		</>
	);
};

export default NuclidePage;
