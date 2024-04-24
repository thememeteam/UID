import Article from "@/components/Article";
import Hero from "@/components/Hero";

const M5Page: React.FC = () => {
    return (
        
		<>
        <Hero type="video" src="/assets/m5/M5video (2).mp4" alt="showcase of a BMW M5">
            <span className=" mix-blend-difference nomargin text-8xl font-display text-accent">
                Feynman M5
            </span>
        </Hero>
        <div className="mx-auto max-w-[90ch]">
            <div className="flex flex-col gap-16 mx-auto max-w-[110ch]">
                <Article title="The ultimate driving machine">
                    <p></p>
                </Article>
            </div>

        </div>
    </>	
    );
}

export default M5Page;