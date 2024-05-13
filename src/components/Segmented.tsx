import { useState } from "react";

interface SegmentedProps {

	options: readonly string[];
	selected?: string;
	className?: string;
	onChange?: (e: string) => void;
}

const Segmented: React.FC<SegmentedProps> = ({
	options,
	selected,
	className,
	onChange,
}) => {
	const [selectedState, setSelectedState] = useState<string>(options.includes(selected) ? selected : options[0]);

	return (
		<div
			className={`${className} gap-2 grid auto-cols-fr grid-flow-col`}
		>
			{options.map((e) => (
				<button
					key={e}
					type="button"
					onClick={() => {
						setSelectedState(e);
						setTimeout(() => onChange?.(e), 0);
					}}
					className="p-4 text-center"
					style={{
						backgroundColor:
							selected === e ? "var(--accent-fill)" : "initial",
					}}
				>
					{e}
				</button>
			))}
		</div>
	);
};

export default Segmented;
