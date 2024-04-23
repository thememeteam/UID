import Hero from "@/components/Hero";

const M5Page: React.FC = () => {
    return (
        
		<>
        {/* <div className="relative max-h-screen">
            <div
                className="absolute w-full h-full flex flex-col items-center justify-center gap-2"
                style={{
                    background:
                        "linear-gradient(to bottom, var(--background-fill) 0%, transparent 40%, var(--background-fill) 100%",
                }}
            >
                <p className="text-6xl font-display mix-blend-difference text-orange-400">
                    Feynman M5
                </p>
            </div>
            <img
                src="/m5model1.jpg"
                className="max-h-[38rem] w-screen object-cover"
            />
        </div> */}
        <Hero type="video" src="/M5video.mp4" alt="showcase of a BMW M5">
            <span className=" mix-blend-difference nomargin text-8xl font-display text-accent">
                Feynman M5
            </span>
        </Hero>
    </>	
    
    );
}

export default M5Page;