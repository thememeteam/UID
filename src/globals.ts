import type { GroupProps } from "@react-three/fiber";
import type { MeshStandardMaterial } from "three";

const models = ["SLS", "Nuclide", "Viper"] as const;
type Models = (typeof models)[number];

interface IconProps {
	className?: string;
}

interface CarMaterials {
	body: MeshStandardMaterial;
	brakeCalipers: MeshStandardMaterial;
	interiorBase: MeshStandardMaterial;
	interiorAccent: MeshStandardMaterial;
}

type CarProps = GroupProps & {materials: CarMaterials};

export { models };
export type { Models, IconProps, CarMaterials, CarProps };
