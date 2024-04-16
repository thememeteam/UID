import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./variables.css"
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
        <link href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen grid grid-rows-[auto_1fr]">
      <video autoPlay loop muted 
            className="absolute -z-10 w-auto  
            min-w-full min-h-full"> 
            <source src="stockvid.mp4" 
                type="video/mp4"/> 
        </video> 

        <header className="relative pt-2 bg-orange-500 end-60">
          <div className="flex flex-col items-center">
            <nav className="flex gap-4 p-2">
              <Link className={'pb-2 hover:text-black transition-colors duration-75 '} href={'/'}>Home</Link>
              <Link className={'pb-2'} href={'/models'}>Models</Link>
              <Link className={'pb-2'} href={'/about'}>About</Link>
              <Link className={'pb-2'} href={'/configurator'}>Configurator</Link>
              <Link className={'pb-2'} href={'/accessories'}>Accessories</Link>
            </nav>
          </div>
        </header>
        <main className="p-4"> 
          {children}
        </main>
      </body>
    </html>
  );
}
