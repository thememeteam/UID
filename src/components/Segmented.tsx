import { useState } from "react";

interface SegmentedProps {
	options: string[];
	className?: string;
	options: readonly string[];
	className?: string;
	onChange: (e: string) => void;
}

const Segmented: React.FC<SegmentedProps> = ({
	options,
	className,
	onChange,
}) => {
	const [selected, setSelected] = useState<string>(options[0]);

	return (
		<div
			className={`${className} gap-2 grid grid-cols-[repeat(3,1fr)] grid-flow-col`}
		>
			{options.map((e) => (
				<button
					key={e}
					type="button"
					onClick={() => {
						setSelected(e);
						setTimeout(() => onChange(e), 0);
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
