interface ListItemProps {
	title: string;
	address: string;
}

const ListItem: React.FC<ListItemProps> = ({ title, address }) => {
	return (
		<div className="py-4">
			<h2 className="text-h2 font-display">{title}</h2>
            <p className="mt-2">{address}</p>
		</div>
	);
};

export default ListItem
