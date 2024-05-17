import Hero from "@/components/Hero";
import Article from "@/components/Article";
import Link from "next/link";
import Datum from "@/components/Datum";
const ViperPage: React.FC = () => {
	return (
		<>
			<Hero
				type="video"
				src="/assets/viper/viper.mp4"
				alt="Viper hero video"
			>
				<span className="block mix-blend-difference text-8xl text-accent">
					Viper
				</span>
			</Hero>
			<div className="mx-auto max-w-[90ch]">
				<div className="flex flex-col gap-16 mx-auto max-w-[900px]">
					<Article className="max-w-[100ch]" title="">
						<p>
						Experience the epitome of automotive excellence with the Feynman Viper, a masterpiece that seamlessly blends racing pedigree with daily drivability. This iconic sports car is a true embodiment of Feynman's relentless pursuit of performance, precision, and uncompromising craftsmanship.
						</p>
					</Article>
					<Article className="max-w-[100ch] " title="">
						<p>
						At the heart of this high-performance machine lies a naturally aspirated 4.0-liter flat-six engine, delivering an awe-inspiring 502 horsepower and an insatiable appetite for the racetrack. With its lightning-fast throttle response and an exhilarating redline of 9,000 rpm, the Viper offers an unparalleled driving experience that will leave you breathless. The precision-engineered chassis and aerodynamic design ensure unrivaled handling and stability, even at the highest speeds.
						</p>
					</Article>
					<div className="flex flex-wrap gap-10 mb-1">
						<Datum value="3.4 S" caption="0-100 kmph" />
						<Datum value="10.6 s" caption="0-200 kmph" />
						<Datum value="10.8 s" caption="Quarter mile" />
						<Datum value="320 kmph" caption="Top speed" />
					</div>
					<Article className="max-w-[100ch] mb-8" title="">
						<p>
						Step inside the cockpit, and you'll find yourself immersed in a world of meticulous craftsmanship and cutting-edge technology. The driver-focused interior, meticulously appointed with premium materials and race-inspired details, creates an environment that perfectly blends functionality and luxury. The advanced infotainment system, complete with a high-resolution display and intuitive controls, ensures a seamless and connected driving experience, even on the most demanding tracks.
						</p>
						<Link
							className="accentbutton m-auto mt-14 mb-5 pl-8 pr-8 p-2 text-xl"
							href={"/configurator/?model=Viper"}
						>
							Configure your Viper
						</Link>
					</Article>
				</div>
			</div>
		</>
	);
};

export default ViperPage;