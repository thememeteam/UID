"use client";
import Segmented from "@/components/Segmented";
import Spacer from "@/components/Spacer";
import NuclideModel from "@/components/models/Nuclide";
import SLSModel from "@/components/models/SLS";
import ViperModel from "@/components/models/Viper";
import { Environment, MeshReflectorMaterial, PresentationControls, Sky, Stage } from "@react-three/drei";
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
				<Canvas shadows camera={{ position: [0, 0, 4.5], fov: 30 }}>
					<spotLight
						position={[-4, 5, 0]}
						angle={0.3}
						penumbra={1}
						castShadow
						receiveShadow
						intensity={3}
						shadow-bias={-0.0001}
					/>
					<PresentationControls global>
						<Stage
							shadows={{
								type: "accumulative",
								color: "#D3D3D3",
								colorBlend: 0.35,
								opacity: 2,
							}}
						>
							{/* don't do conditional rendering for better performance */}
							<NuclideModel visible={current === "Nuclide"} />
							<ViperModel visible={current === "Viper"} />
							<SLSModel visible={current === "SLS"} />
						</Stage>
					</PresentationControls>
					<mesh rotation={[-Math.PI / 2, 0, 0]}>
						<planeGeometry args={[50, 50]} />
						<MeshReflectorMaterial
							blur={[300, 100]}
							resolution={2048}
							mixBlur={1}
							mixStrength={80}
							roughness={1}
							depthScale={1.2}
							minDepthThreshold={0.4}
							maxDepthThreshold={1.4}
							color="#050505"
							metalness={0.5}
							mirror={0}
						/>
					</mesh>
					<Environment preset="city"/>
				</Canvas>
			</div>
			<div className="row-start-2 col-start-2 relative m-8 border border-card-stroke wedge">
				<Segmented
					options={options}
					onChange={(e) => setCurrent(e as CarOptions)}
				/>
				<div className="absolute bottom-0 right-4 w-2 h-20 rotate-[36.87deg] border-r border-card-stroke" />
			</div>
		</div>
	);
};

export default Configurator;
