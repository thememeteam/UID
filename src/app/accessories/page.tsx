'use client'

import React, { useState } from "react";
import Hero from "@/components/Hero";
import pData from './parts.json';
import aData from './accessories.json';
import Segmented from "@/components/Segmented";
import SearchIcon from "@/components/icons/Search";

type Tabs = "Accessories" | "Parts";

const Accessories: React.FC = () => {
	const [filter, setFilter] = useState<string>("");
	const [currentTab, setCurrentTab] = useState<Tabs>("Accessories");

	const actualData = currentTab === "Accessories" ? aData : pData;

	return (
		<>
			<Hero
				type="image"
				src="/assets/nuclide/p1gtr4.jpg"
				alt="Accesories header"
			>
				<span className="block mix-blend-difference text-8xl text-accent">
					Accessories
				</span>
			</Hero>
			<div className="mt-12 text-center self-center mb-24">
				<p className="mr-48 ml-48 font-display text-h1 text-wrap">
					Customise Your Vehicle with Feynman certified accessories
				</p>
				<p className="font-body font-normal mx-auto max-w-[50ch]">
					Our accessories provide you with endless choices to personalise your vehicle to your taste, while also adding an element of practicality so you can be prepared to take whatever the road, or the lack thereof, may throw at you.
				</p>
			</div>
			<div className="mr-72 ml-72">
				<Segmented options={["Accessories", "Parts"]} onChange={(e) => setCurrentTab(e as Tabs)} />
			</div>
			<div >
				<div className="grid grid-cols-4 content-center  space-y-10 mb-10">
					<div></div>
					<div className="grid col-span-2 relative">
						<input type="search" onChange={(e) => setFilter(e.target.value.toLowerCase())} placeholder="S&#x0065;arch" className="indent-14 placeholder:text-center py-3 rounded-2xl pr-4" />
						<SearchIcon className="w-6 h-full absolute left-0 ml-4 text-secondary" />
					</div>

				</div>
				<div className="grid grid-cols-2 gri gap-2 mr-24 ml-24 gap-x-10 ">
					{actualData.filter(e => filter ? e.name.toLowerCase().indexOf(filter) >= 0 : true).map((item, partnumber) => (
						<div key={partnumber} className="p-4 border border-card-stroke rounded text-center grid  grid-flow-col items-center hover:cursor-pointer" onClick={() => alert('a')}>
							<div>
							<h2 className="text-xl font-bold">{item.name}</h2>
							<h4>Part number: {item.partNumber}</h4></div>
							{item.url && <img className="w-80 " src={item.url} />}
						</div>
					))}
				</div>
			</div>
		</>
	);

};



export default Accessories;
