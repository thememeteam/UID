interface ArticleProps {
	title: string;
	className?: string | undefined;
	children: React.ReactNode;
}

const Article: React.FC<ArticleProps> = ({ title, className, children }) => {
	return (
		<article className={className}>
			<span className="text-h1 font-display accentline">{title}</span>
			<div className="mt-6">{children}</div>
		</article>
	);
};

export default Article;
