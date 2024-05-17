import Article from "@/components/Article";
import Datum from "@/components/Datum";
import Hero from "@/components/Hero";
import Link from "next/link";
const M5Page: React.FC = () => {
	return (
		<>
			<Hero
				type="video"
				src="/assets/m5/SLSfinal.mp4"
				alt="showcase of a BMW M5"
			>
				<span className=" mix-blend-difference text-8xl font-display text-accent">
					SLS
				</span>
			</Hero>
			<div className="mx-auto max-w-[90ch]">
				<div className="flex flex-col gap-16 mx-auto max-w-[90ch]">
					<Article className="max-w-[50ch]" title="">
						<p>
							The Feynman SLS is a masterpiece of engineering and
							design that redefines the boundaries of automotive
							excellence. This iconic roadster is a symphony of
							raw power and sophisticated elegance, meticulously
							crafted to ignite your senses and awaken your
							passion for the open road.
						</p>
					</Article>
					<Article className="max-w-[50ch] self-end" title="">
						<p>
							The SLS racing legacy includes records for endurance
							that have themselves endured for decades. As a
							sports car for the open road, it's won hearts and
							fulfilled dreams. It's pioneered innovations in
							performance, safety and luxury. Like no other car,
							it's truly timeless, and a true icon.
						</p>
					</Article>
					<Article className="max-w-[50ch] mb-8" title="">
						<p>
							Under the sleek hood lies a formidable 4.0-liter V8
							biturbo engine, delivering a staggering 577
							horsepower and 590 lb-ft of torque. This unrelenting
							force propels you from 0 to 60 mph in a mere 3.5
							seconds, ensuring an exhilarating driving experience
							that will leave you breathless. The SPEEDSHIFT MCT
							9-speed transmission seamlessly harnesses this
							power, providing lightning-fast shifts and
							unparalleled responsiveness.
						</p>
						<Link
							className="accentbutton"
							href={"/configurator/?model=SLS"}
						>
							Configure your SLS
						</Link>
					</Article>
					{/* <div className="grid grid-flow-col gap-10 mb-12">
						<Datum value="3.7 S" caption="0-60 kmph" />
						<Datum value="3.7 s" caption="0-60 kmph" />
						<Datum value="3.7 s" caption="0-60 kmph" />
						<Datum value="3.7 s" caption="0-60 kmph" />
					</div> */}
				</div>
			</div>
		</>
	);
};

export default M5Page;
