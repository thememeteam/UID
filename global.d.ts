declare global {
	const models = ["SLS", "Nuclide", "Viper"] as const;
	type Models = (typeof options)[number];

	interface IconProps {
		className?: string;
	}
}

export type {};
