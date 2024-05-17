"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import MenuIcon from "./icons/Menu";
import { useRef } from "react";

const links = {
	"/models": "Models",
	"/configurator": "Configurator",
	"/accessories": "Accessories",
	"/network": "Dealerships",
	"/about": "About",
};

const Header: React.FC = () => {
	const pathname = usePathname();
	const mobileNavRef = useRef<HTMLDivElement>(null);

	return (
		<header
			className={`
                    row-start-1 col-start-1
					sticky top-0 left-0 z-40
					flex flex-row items-center 
					h-16 w-fit pl-8 pr-12 py-4
					bg-card backdrop-blur-md
					wedge select-none`}
		>
			<Link href={"/"} className="contents">
				<span className="text-h2 md:text-h1 font-display transition-color ease-out duration-75 hover:text-accent">
					Feynman
				</span>
			</Link>
			<div className="h-full w-0 mx-6 md:mx-8 border border-divider-stroke" />
			<button className="block md:hidden" popovertarget="mobile-nav">
				<MenuIcon className="w-8 h-8 mr-4" />
			</button>
			<nav className="hidden md:flex gap-6">
				{Object.entries(links).map((e) => (
					<Link
						className="transition-color ease-out duration-75 hover:text-accent"
						style={{
							color: pathname.startsWith(e[0])
								? "var(--accent-fill)"
								: "",
						}}
						key={e[0]}
						href={e[0]}
					>
						{e[1]}
					</Link>
				))}
			</nav>
			<div ref={mobileNavRef} popover="auto" id="mobile-nav" className="bg-card backdrop-blur-md m-0 w-full">
				<nav className="flex flex-col w-full gap-6 p-4">
					{Object.entries(links).map((e) => (
						<Link
							className="transition-color ease-out duration-75 hover:text-accent"
							style={{
								color: pathname.startsWith(e[0])
									? "var(--accent-fill)"
									: "",
							}}
							key={e[0]}
							href={e[0]}
							onClick={() => mobileNavRef.current?.hidePopover()}
						>
							{e[1]}
						</Link>
					))}
				</nav>
			</div>
		</header>
	);
};

export default Header;
