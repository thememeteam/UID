"use client";
import { Canvas, extend } from "@react-three/fiber";
import { PerspectiveCamera, PresentationControls } from "@react-three/drei";
import { Mesh, MeshNormalMaterial, } from "three";
import { Nuclide } from "./Nuclide";
import Spacer from "@/components/Spacer";
// extend({ Canvas, Mesh, MeshNormalMaterial });

const Configurator: React.FC = () => {
	return (
		<div className="w-full h-full">
			<Spacer />
			<div style={{ width: "100%", height: "100vh" }} className="items-center align-middle">
				<Canvas camera={{ fov: 40 }}>
					<PresentationControls global zoom={1} polar={[-0.1, Math.PI / 4]}>
						<mesh>
							<ambientLight intensity={1} />
							<directionalLight color="white" position={[0, 5, 8]} castShadow={true} />
							<Nuclide />

						</mesh>
					</PresentationControls>
				</Canvas>
			</div>
		</div>
	);
};

export default Configurator;
