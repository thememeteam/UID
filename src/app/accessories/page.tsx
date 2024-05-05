'use client'

import React, { useState } from "react";
import Hero from "@/components/Hero";
import pData from './parts.json';
import aData from './accessories.json';
import Segmented from "@/components/Segmented";

const Accessories: React.FC = () => {
	const [filter, setFilter] = useState<string>("");
	const [currentTab, setCurrentTab] = useState<string>("");
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
			<Segmented options={["Accessories", "Parts"]} onChange={(e) => setCurrentTab(e)} />
			</div>
			{/* <div className="grid grid-cols-4 content-center  space-y-10">
				<div></div>
				<div className="grid col-span-2">
					<input type="search" onChange={(e) => setFilter(e.target.value.toLowerCase())} placeholder="Search" className="text-center py-3" />
				</div>

			</div> */}
			<div >
			<div className="grid grid-cols-4 content-center  space-y-10 mb-10">
				<div></div>
				<div className="grid col-span-2">
					<input type="search" onChange={(e) => setFilter(e.target.value.toLowerCase())} placeholder="Search" className="text-center py-3 rounded-2xl" />
				</div>

			</div>
				<div className="grid grid-cols-2 gri gap-2 mr-24 ml-24 gap-x-10">
					{pData.filter(e => filter ? e.name.toLowerCase().indexOf(filter) >= 0 : true).map((item, partnumber) => (
						<div key={partnumber} className="p-4 border border-card-stroke rounded text-center">
							<h2 className="text-xl font-bold">{item.name}</h2>
						</div>
					))}
				</div>
			</div>
			{
				currentTab === "Parts" && (
					<div></div>
				)
			}
		</>
	);

};



export default Accessories;
