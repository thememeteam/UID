"use client";
import Segmented from "@/components/Segmented";
import Spacer from "@/components/Spacer";
import NuclideModel from "@/components/models/Nuclide";
import SLSModel from "@/components/models/SLS";
import ViperModel from "@/components/models/Viper";
import { PresentationControls, Stage } from "@react-three/drei";
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
						position={[0, 15, 0]}
						angle={0.3}
						penumbra={1}
						castShadow
						intensity={2}
						shadow-bias={-0.0001}
					/>
					<PresentationControls global>
						<Stage
							shadows={{
								type: "accumulative",
								color: "#D3D3D3",
								colorBlend: 0.35,
								opacity: 1,
							}}
						>
							{/* don't do conditional rendering for better performance */}
							<NuclideModel visible={current === "Nuclide"} />
							<ViperModel visible={current === "Viper"} />
							<SLSModel visible={current === "SLS"} />
						</Stage>
					</PresentationControls>
				</Canvas>
			</div>
			<div className="row-start-2 col-start-2 relative m-8 border border-card-stroke wedge">
				<Segmented
					options={options}
					onChange={(e) => setCurrent(e as CarOptions)}
				/>
				<div className="absolute bottom-0 right-[2.95rem] w-0 h-16 origin-bottom-right -skew-x-[36.87deg] border-r-[1.5px] border-card-stroke" />
			</div>
		</div>
	);
};

export default Configurator;
