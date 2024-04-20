import Article from "@/components/Article";
import Link from "next/link";
const NuclidePage: React.FC = () => {
    return (
        <>
            <div className="relative h-screen mb-8">
                <div
                    className="absolute w-full h-full flex flex-col items-center justify-center gap-4"
                    style={{
                        background:
                            "linear-gradient(to bottom, var(--background-fill) 0%, transparent 40%, var(--background-fill) 100%",
                    }}
                >
                    <p className="text-6xl font-display mix-blend-difference text-orange-400">
                        Feynman Nuclide
                    </p>
                </div>
                <video
                    src="../nuclidevid.mp4"
                    muted
                    autoPlay
                    loop
                    disablePictureInPicture
                    className="max-h-[41rem] w-screen object-cover"
                />
            </div>
            <div className="mx-auto max-w-[90ch]">
                <div className="flex flex-col gap-16 mx-auto max-w-[90ch]">
                    <Article className="max-w-[50ch]" title="">
                        <p>
                            The Feynman Nuclide isn't just a car; it's a symphony of engineering
                            mastery and automotive artistry. With its sleek, aerodynamic
                            silhouette and aggressive stance, the P1 commands attention from
                            every angle. Its carbon fiber bodywork isn't just for show; it's a
                            testament to Feynman's relentless pursuit of lightweight
                            performance.
                        </p>
                    </Article>
                    <Article className="max-w-[50ch] self-end" title="">
                        <p>
                            Underneath the stunning exterior lies a hybrid
                            powertrain that combines a potent twin-turbocharged V8 engine with
                            an electric motor, delivering a jaw-dropping total output that
                            catapults the P1 into hypercar territory. Acceleration is
                            blistering, propelling occupants from 0 to 60 mph in mere seconds,
                            while the top speed effortlessly breaches the realm of supercar
                            legends. But it's not just straight-line speed that defines the
                            Nuclide; it's the way it dances through corners with precision and
                            finesse.
                        </p>
                    </Article>
                    <Article
                        className="max-w-[50ch] mb-8"
                        title=""
                    >
                        <p>
                            Feynman's race-bred technology ensures that every input
                            from the driver is met with an instantaneous response, creating an
                            unparalleled connection between man and machine. Step inside the
                            cockpit, and you're greeted by a minimalist yet purposeful
                            interior, where every detail is meticulously crafted for
                            performance and comfort. Carbon fiber accents, plush Alcantara
                            upholstery, and cutting-edge instrumentation surround the driver,
                            creating an atmosphere that's equal parts luxurious and
                            exhilarating.
                        </p>
                        <Link
						className="bg-accent text-black p-2 -skew-x-[20deg]"
						href={"/configurator"}
					>
						Configure your Nuclide
					</Link>
                    </Article>
                    
                </div>
                
            </div>
        </>
    );
};

export default NuclidePage;
