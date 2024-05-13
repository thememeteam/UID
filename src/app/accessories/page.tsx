"use client";

import type React from "react";
import { useState } from "react";
import Hero from "@/components/Hero";
import pData from "./parts.json";
import aData from "./accessories.json";
import Segmented from "@/components/Segmented";
import SearchIcon from "@/components/icons/Search";
import Dialog from "@/components/Dialog";
import CloseIcon from "@/components/icons/Close";

type Tabs = "Accessories" | "Parts";

const Accessories: React.FC = () => {
	const [filter, setFilter] = useState<string>("");
	const [currentTab, setCurrentTab] = useState<Tabs>("Accessories");
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [displayData, setDisplayData] = useState(null);
	const actualData = currentTab === "Accessories" ? aData : pData;

	return (
		<>
			<Hero
				type="image"
				src="/assets/nuclide/p1gtr4.jpg"
				alt="Accesories header"
			>
				<span className="block mix-blend-difference text-4xl md:text-8xl text-accent">
					Accessories
				</span>
			</Hero>
			<div className="mt-12 mb-24 mx-8 md:mx-auto  md:w-[60ch] text-center self-center">
				<p className="font-display text-3xl md:text-h1 text-wrap">
					Customise Your Vehicle with Feynman certified accessories
				</p>
				<p className="font-body font-normal mx-auto max-w-[50ch]">
					Our accessories provide you with endless choices to
					personalise your vehicle to your taste, while also adding an
					element of practicality so you can be prepared to take
					whatever the road, or the lack thereof, may throw at you.
				</p>
			</div>
			<div className="grid gap-y-8 md:w-3/5 mx-8 md:mx-auto mb-12">
				<div>
					<Segmented
						options={["Accessories", "Parts"]}
						onChange={(e) => setCurrentTab(e as Tabs)}
					/>
				</div>
				<div className="grid relative">
					<input
						type="search"
						onChange={(e) => setFilter(e.target.value.toLowerCase())}
						placeholder="Search"
						className="indent-14 placeholder:text-center py-3 rounded-2xl pr-4"
					/>
					<SearchIcon className="w-6 h-full absolute left-0 ml-4 text-secondary" />
				</div>
				<div className="grid md:grid-cols-[1fr_1fr_1fr] gap-4">
					{actualData
						.filter((e) =>
							filter
								? e.name.toLowerCase().indexOf(filter) >= 0
								: true,
						)
						.map((item) => (
							// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
							<div
								key={item.partNumber}
								className="p-4 border border-card-stroke rounded text-center grid grid-flow-col items-center hover:cursor-pointer"
								onClick={() => setIsOpen(true)}
							>
								<div>
									<h2 className="text-xl font-bold">
										{item.name}
									</h2>
									<h4>Part number: {item.partNumber}</h4>
								</div>
								{item.url && (
									<img className="w-80" src={item.url} />
								)}
							</div>
						))}
				</div>
			</div>
			<Dialog
				isOpen={isOpen}
				onClose={() => setIsOpen(false)}
				className="backdrop:backdrop-blur-md"
			>
				<div className="bg-background p-8 relative">
					<button
						className="absolute right-0 top-0 p-2"
						onClick={() => setIsOpen(false)}
					>
						<CloseIcon className="w-6 h-6" />
					</button>
				</div>
			</Dialog>
		</>
	);
};

export default Accessories;
