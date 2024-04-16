import Spacer from "@/components/Spacer";

const Home: React.FC = () => {
    return (
        <>
            <div className="relative">
                <div className="absolute w-full h-full" style={{background: 'linear-gradient(to bottom, black 0%, transparent 40%, var(--background-fill) 90%, var(--background-fill) 100%'}} />
                <video muted autoPlay loop disablePictureInPicture className="max-h-[32rem] w-full object-cover">
                    <source src="/stockvid.mp4" />
                </video>
            </div>
            <div className="mx-auto max-w-[70ch]">
                <h1 className="text-h1 font-display accentline">beans</h1>
                <p className="mt-8">
                    We make the world's highest performance vehicles.
                </p>
                <p>
                    Every one of our vehicles is precision-engineered and painstakingly manufactured, delivering performance in a league of its own.
                </p>
            </div>
        </>
    )
}

export default Home;