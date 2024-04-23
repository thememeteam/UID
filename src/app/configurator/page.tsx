"use client";

import { Canvas, extend } from "@react-three/fiber";
import { PresentationControls } from "@react-three/drei";
import { Mesh, MeshNormalMaterial,} from "three";
extend({ Canvas, Mesh, MeshNormalMaterial });
const Configurator: React.FC = () => {
	return (
		<>
		<div style={{ width: "100%", height: "100%" }}>
			<Canvas className="beans">
				<PresentationControls>
					<mesh>
						<boxGeometry/>
						<meshNormalMaterial />
					</mesh>
				</PresentationControls>
			</Canvas>
		</div>
		</>
	);
};

export default Configurator;
