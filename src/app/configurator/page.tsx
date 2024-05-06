"use client";
import Segmented from "@/components/Segmented";
import Spacer from "@/components/Spacer";
import NuclideModel from "@/components/models/Nuclide";
import SLSModel from "@/components/models/SLS";
import ViperModel from "@/components/models/Viper";
import {
	CameraControls, Environment,
	MeshReflectorMaterial
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useState } from "react";

const options = ["SLS", "Nuclide", "Viper"] as const;
type CarOptions = (typeof options)[number];

const Configurator: React.FC = () => {
	const [current, setCurrent] = useState<CarOptions>("SLS");

	return (
		<div className="w-full h-full grid grid-rows-[auto_1fr] grid-cols-[2fr_1fr]">
			<div className="row-start-1 col-span-2">
				<Spacer />
			</div>
			<div className="row-start-2 col-start-1">
				<Canvas camera={{ fov: 40, position: [0, 40, 200] }}>
					<CameraControls
						makeDefault
						infinityDolly={true}
						minDistance={5}
						maxDistance={1000}
						maxPolarAngle={Math.PI / 2 - 0.01}
					/>
					<Environment preset="warehouse" />

					{/* don't do conditional rendering for better performance */}
					<NuclideModel position={[-35, 0, -70]} scale={0.01} visible={current === "Nuclide"} />
					<ViperModel position={[-35, 0, -70]} scale={0.01} visible={current === "Viper"} />
					<SLSModel position={[-35, 0, -70]} scale={0.01} visible={current === "SLS"} />

					<mesh rotation={[Math.PI / 2, Math.PI, 0]} scale={500}>
						<planeGeometry />
						<MeshReflectorMaterial
							blur={[3840, 2160]}
							mixBlur={1}
							resolution={2048}
							mixStrength={10}
							mixContrast={1}
							minDepthThreshold={0.5}
							maxDepthThreshold={2}
							roughness={1}
							color={0x1a1a1a}
							mirror={0.05}
						/>
					</mesh>
				</Canvas>
			</div>
			<div className="row-start-2 col-start-2 relative m-8 border border-card-stroke wedge">
				<Segmented
					options={options}
					onChange={(e) => setCurrent(e as CarOptions)}
				/>
			</div>
		</div>
	);
};

export default Configurator;
