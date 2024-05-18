import Spacer from "@/components/Spacer";
import ListItem from "@/components/network/ListItem";

const Network: React.FC = () => {
	return (
		<div className="grid grid-flow-row h-full items-center justify-center">
			<div className="row-start-1 col-start-1 md:col-span-2">
				<Spacer />
			</div>
			<iframe
				title="maps"
				src="https://www.google.com/maps/d/embed?mid=16b1wRMebZgQuMdUbbN1wZM59MIZAMTk&ehbc=2E312F&noprof=1"
				className="w-full md:w-96 h-80 md:h-3/4"
			/>
			<div className="mt-8 md:mt-0 mx-4 md:h-3/4 overflow-y-hidden">
				<h1 className="text-h1 font-display accentline">Dealerships</h1>
				<ul className="overflow-y-scroll self-start max-h-full">
					<li>
						<ListItem
							title="Lavelle Road"
							address={
								<>
									<p>
										UMIYA Landmark, Lavelle Road, Shanthala
										Nagar,
										<br /> Ashok Nagar, Bengaluru, Karnataka
										560001
									</p>
									<p>Ph: +91 80 4161 0610</p>
								</>
							}
						/>
					</li>
					<li>
						<ListItem
							title="Richmond Road"
							address={
								<>
									<p>
										SKAV909, 9, 1, Richmond Rd, Ashok Nagar,
										Bengaluru, <br />
										Karnataka 560001 <br />
									</p>
									<p>Ph: +91 1800 3005 3987</p>
								</>
							}
						/>
					</li>
					<li>
						<ListItem
							title="Ashok Nagar"
							address={
								<>
									<p>
										107, Kasturba Rd, opp. Venkatappa Art
										Gallery, <br />
										Shanthala Nagar, Ashok Nagar, Bengaluru,
										Karnataka 560001
									</p>
									<p>Ph: +91 96864 56215</p>
								</>
							}
						/>
					</li>

					<li>
						<ListItem
							title="Sankey Road"
							address={
								<>
									<p>
										Opp: BDA Head Office, 22, Sankey Rd,
										Military Compound, <br /> Seshadripuram,
										Bengaluru, Karnataka 560020
									</p>
									<p>Ph: +91 63641 02911</p>
								</>
							}
						/>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Network;
