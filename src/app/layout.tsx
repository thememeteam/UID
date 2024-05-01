import Header from "@/components/Header";
import type { Metadata } from "next";
import "./globals.css";
import "./variables.css";

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
			<body className="min-h-screen grid grid-rows-[1fr_auto] grid-cols-1 grid-flow-row items-start">
				<Header />
				<main className="h-full row-start-1 col-start-1">
					{children}
				</main>
				<footer className="row-start-2 p-4 flex gap-2 justify-center text-caption text-secondary border-t border-card-stroke">
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
