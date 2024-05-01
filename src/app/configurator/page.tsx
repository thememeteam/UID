"use client";
import { Canvas, extend } from "@react-three/fiber";
import { AccumulativeShadows, CubeCamera, Environment, MeshReflectorMaterial, OrthographicCamera, PerspectiveCamera, Plane, PresentationControls, RandomizedLight, Shadow, SpotLight, SpotLightShadow, Stage } from "@react-three/drei";
import { Camera, ColorManagement, Mesh, MeshNormalMaterial, } from "three";
import NuclideModel from "@/components/models/Nuclide";
import ViperModel from "@/components/models/Viper";
import SLSModel from "@/components/models/SLS";
import Spacer from "@/components/Spacer";
import Segmented from "@/components/Segmented";
import { useState } from "react";

const options = ['SLS', 'Nuclide', 'Viper'] as const;
type CarOptions = typeof options[number];

const Configurator: React.FC = () => {
	const [current, setCurrent] = useState<CarOptions>('SLS');

	return (
		<>
			<Spacer />
			<Segmented options={options} onChange={(e) => setCurrent(e as CarOptions)} />
			{<div className="w-full h-fit">
				<div style={{ width: "100%", height: "100vh" }} className="items-center align-middle justify-between">
					<Canvas shadows camera={{position: [0, 0, 4.5], fov: 30 }}>
						<spotLight position={[0, 15, 0]} angle={0.3} penumbra={1} castShadow intensity={2} shadow-bias={-0.0001} />
						<PresentationControls global >
							<Stage shadows={{type: "accumulative",color:"#D3D3D3", colorBlend:0.35,opacity:1}}>
								{/* don't do conditional rendering for better performance */}
								<NuclideModel visible={current === "Nuclide"} />
								<ViperModel visible={current === "Viper"} />
								<SLSModel visible={current === "SLS"} />
							</Stage>
						</PresentationControls>
					</Canvas>
				</div>
			</div>}
		</>
	);
};

export default Configurator;
