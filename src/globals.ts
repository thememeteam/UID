import type { GroupProps } from "@react-three/fiber";
import type { Material } from "three";

const models = ["SLS", "Nuclide", "Viper"] as const;
type Models = (typeof models)[number];

interface IconProps {
	className?: string;
}

interface CarMaterials {
	body: Material;
	brakeCalipers: Material;
	interiorBase: Material;
	interiorAccent: Material;
}

type CarProps = GroupProps & {materials: CarMaterials};

export { models };
export type { Models, IconProps, CarMaterials, CarProps };
