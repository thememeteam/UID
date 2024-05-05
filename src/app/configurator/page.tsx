"use client";
import Segmented from "@/components/Segmented";
import Spacer from "@/components/Spacer";
import NuclideModel from "@/components/models/Nuclide";
import SLSModel from "@/components/models/SLS";
import ViperModel from "@/components/models/Viper";
import { ContactShadows, Environment, MeshReflectorMaterial, PresentationControls, Sky, Stage } from "@react-three/drei";
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
					<PresentationControls global>
						<directionalLight position={[0,5,0]} intensity={2} />
						<Stage
						>
							{/* don't do conditional rendering for better performance */}
							<group>

								<NuclideModel visible={current === "Nuclide"} />
								<ViperModel visible={current === "Viper"} />
								<SLSModel visible={current === "SLS"} />
								<mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 200, 0]} scale={50}>
									<planeGeometry />
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
							</group>
						</Stage>
					</PresentationControls>
					<Environment preset="warehouse"/>
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
