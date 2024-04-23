import ListItem from "@/components/ListItem";
import Spacer from "@/components/Spacer";

const Network: React.FC = () => {
	return (
		<>
			<Spacer />
			<div className="grid w-fit gap-8 grid-cols-[auto_auto] grid-rows-[auto_1fr]">
				<iframe
					title="maps"
					src="https://www.google.com/maps/d/embed?mid=16b1wRMebZgQuMdUbbN1wZM59MIZAMTk&ehbc=2E312F&noprof=1"
					width="800"
					className="row-start-1 row-span-2"
					height="550"
				/>
				<h1 className="text-h1 font-display accentline">Dealerships</h1>
				<ul>
					<li>
						<ListItem title="Feynman Lavelle Road" address="asdf" />
					</li>
					<li>
						<ListItem
							title="Feynman Richmond Road"
							address="asdf"
						/>
					</li>
					<li>
						<ListItem title="Feynman Ashok Nagar" address="asdf" />
					</li>
					<li>
						{" "}
						<ListItem
							title="Feynman Sankey Road"
							address="asdf"
						/>
					</li>
				</ul>
			</div>
		</>
	);
};

export default Network;
