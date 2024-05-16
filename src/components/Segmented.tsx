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
	return (
		<div className={`${className} gap-2 grid auto-cols-fr grid-flow-col`}>
			{options.map((e) => (
				<button
					key={e}
					type="button"
					onClick={() => {
						setTimeout(() => onChange?.(e), 0);
					}}
					className="p-4 text-center"
					style={{
						backgroundColor:
							selected === e ? "var(--accent-fill)" : "initial",
						color:
							selected === e ? "var(--accent-text)" : "initial",
					}}
				>
					{e}
				</button>
			))}
		</div>
	);
};

export default Segmented;
