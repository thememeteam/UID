import Article from "./Article";

interface InfoGridItemProps {
	title: string;
	children: React.ReactNode;
	image: string;
	alt: string;
}

interface InfoGridProps {
	children?: React.ReactNode;
}

const InfoGrid: React.FC<InfoGridProps> = ({ children }) => {
	return (
		<div className="md:infogrid grid md:grid-flow-row-dense md:grid-cols-2 gap-x-16 gap-y-16 md:gap-y-24 items-center max-w-[70rem] mx-auto mb-20">
			{children}
		</div>
	);
};

const InfoGridItem: React.FC<InfoGridItemProps> = ({
	title,
	children,
	image,
	alt,
}) => {
	return (
		<>
			<img
				src={image}
				alt={alt}
				className="md:band h-full object-cover"
			/>
			<Article
				className="md:max-w-[40ch] mx-8 md:mx-0 md:my-12 text-pretty"
				title={title}
			>
				{children}
			</Article>
		</>
	);
};

export { InfoGrid, InfoGridItem };
