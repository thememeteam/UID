import Article from "@/components/Article";

const Home: React.FC = () => {
    return (
        <>
            <div className="relative h-screen">
                <div className="absolute w-full h-full flex flex-col items-center justify-center gap-4" style={{background: 'linear-gradient(to bottom, var(--background-fill) 0%, transparent 40%, var(--background-fill) 100%'}}>
                    <p className="text-8xl font-display mix-blend-difference text-orange-400">Feynman</p>
                    <p className="text-h2 font-display mix-blend-difference">Performance exemplified</p>
                </div>
                <video muted autoPlay loop disablePictureInPicture
                    className="h-full object-cover"
                    >
                    <source src="/stockvid.mp4" />
                </video>
            </div>
            <div className="flex flex-col gap-16 mx-auto max-w-[90ch] mt-16">
                <Article className="max-w-[50ch]" title="Who we are">
                    <p className="mt-8">
                        We make high-performance vehicles.
                    </p>
                    <p>
                        Every one of our vehicles is precision-engineered and painstakingly manufactured, delivering performance in a league of its own.
                    </p>
                </Article>
                <Article className="max-w-[50ch] self-end" title="Our work">
                    <p>Every model we release is our next magnum opus.</p>
                    <p>We spend years refining every release. Our master engineers work tireless towards increasing horsepower, reducing weight, and enhancing comfort. Then we do it again, ad infinitum.</p>
                </Article>
                <Article className="max-w-[50ch]" title="Get your own">
                    <p>Every vehicle that rolls out of the Feynman workshop in Marathahalli is expertly built by hand.</p>
                    <p>We work with our demanding and individualistic clientele to customize every vehicle to their exact specifications. No two Feynmans will ever be the same.</p>
                </Article>
            </div>
        </>
    )
}

export default Home;