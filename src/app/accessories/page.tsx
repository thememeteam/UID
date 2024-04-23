const Accessories: React.FC = () => {
	return(
		<>
			<div className="relative max-h-screen">
				<div
					className="absolute w-full h-full flex flex-col items-center justify-center gap-2"
					style={{
						background:
							"linear-gradient(to bottom, var(--background-fill) 0%, transparent 40%, var(--background-fill) 100%",
					}}
				>
					<p className="text-6xl font-display mix-blend-difference text-orange-400">
						Accessories
					</p>
				</div>
				<img
					src="/p1gtr4.jpg"
					className="max-h-[38rem] w-screen object-cover"
				/>
			</div>
			
		</>	
		) 
};

export default Accessories;
