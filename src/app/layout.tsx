import type { Metadata } from "next";
import "./variables.css";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Feynman Motors",
	description: "Building the next generation of high-performance vehicles.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,100..900;1,100..900&display=swap"
					rel="stylesheet"
				/>
			</head>
			<body className="min-h-screen grid grid-rows-1 grid-cols-1 items-start">
				<header className="row-start-1 col-start-1 
					sticky top-0 left-0 z-40
					flex flex-row items-center 
					h-16 w-fit pl-8 pr-12 py-4 
					bg-card backdrop-blur-md
					wedge">
					<Link href={"/"} className="contents">
						<span className="text-h1 font-display leading-none transition-color ease-out duration-75 hover:text-accent">
							Feynman
						</span>
					</Link>
					<div className="h-full w-0 mx-8 border border-divider-stroke" />
					<nav className="hidden md:flex gap-6 ">
						<Link
							className="transition-color ease-out duration-75 hover:text-accent"
							href={"/models"}
						>
							Models
						</Link>
						<Link
							className="transition-color ease-out duration-75 hover:text-accent"
							href={"/configurator"}
						>
							Configurator
						</Link>
						<Link
							className="transition-color ease-out duration-75 hover:text-accent"
							href={"/accessories"}
						>
							Accessories
						</Link>
						<Link
							className="transition-color ease-out duration-75 hover:text-accent"
							href={"/network"}
						>
							Dealerships
						</Link>
						<Link
							className="transition-color ease-out duration-75 hover:text-accent"
							href={"/about"}
						>
							About
						</Link>
					</nav>
				</header>
				<main className="h-full row-start-1 col-start-1">
					{children}
				</main>
				<footer className="row-start-2 col-start-1 p-4 flex gap-2 justify-center text-caption text-secondary border-t border-card-stroke">
					<span>&copy; 2024 thememeteam under the MIT license</span>
					<span>•</span>
					<a
						href="https://github.com/thememeteam/uid"
						className="underline"
					>
						GitHub
					</a>
				</footer>
			</body>
		</html>
	);
}
