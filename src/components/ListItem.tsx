interface ListItemProps {
	title: string;
	address: React.ReactNode;
}

const ListItem: React.FC<ListItemProps> = ({ title, address }) => {
	return (
		<div className="py-4">
			<h2 className="text-h2 font-display">Feynman <span className="text-accent">{title}</span></h2>
            <div className="mt-2">{address}</div>
		</div>
	);
};

export default ListItem
