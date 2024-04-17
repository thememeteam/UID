import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./variables.css";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

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
				<header className="h-16 row-start-1 col-start-1 sticky top-0 left-0 z-10 w-fit flex flex-row items-center pl-8 py-4 wedge">
					<Link href={"/"} className="contents">
						<span className="text-h1 font-display leading-none">
							Feynman
						</span>
					</Link>
					<div className="h-full w-0 mx-8 border border-divider-stroke" />
					<nav className="flex gap-6">
						<Link href={"/models"}>Models</Link>
						<Link href={"/configurator"}>Configurator</Link>
						<Link href={"/accessories"}>Accessories</Link>
						<Link href={"/about"}>About</Link>
						<Link href={"/network"}>Dealerships</Link>
					</nav>
				</header>
				<main className="h-full row-start-1 col-start-1">
					{children}
				</main>
				<footer className="row-start-2 col-start-1 mt-8 p-4 flex gap-2 justify-center text-caption text-secondary border-t border-card-stroke">
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
