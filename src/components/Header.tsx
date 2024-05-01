'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = {
    "/models": "Models",
    "/configurator": "Configurator",
    "/accessories": "Accessories",
    "/network": "Dealerships",
    "/about": "About"
};

const Header: React.FC = () => {
    const pathname = usePathname();

	return (
		<header
			className={`
                    row-start-1 col-start-1
					sticky top-0 left-0 z-40
					flex flex-row items-center 
					h-16 w-fit pl-8 pr-12 py-4
					bg-card backdrop-blur-md
					wedge`}
		>
			<Link href={"/"} className="contents">
				<span className="text-h1 font-display transition-color ease-out duration-75 hover:text-accent">
					Feynman
				</span>
			</Link>
			<div className="h-full w-0 mx-8 border border-divider-stroke" />
			<nav className="hidden md:flex gap-6 ">
                {Object.entries(links).map(e => (
                    <Link
					className="transition-color ease-out duration-75 hover:text-accent"
                    style={{color: pathname.startsWith(e[0]) ? "var(--accent-fill)" : ""}}
                    key={e[0]}
					href={e[0]}
				>
					{e[1]}
				</Link>
                ))}
			</nav>
		</header>
	);
};

export default Header;