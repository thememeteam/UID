"use client";
import { Canvas, extend } from "@react-three/fiber";
import { AccumulativeShadows, CubeCamera, MeshReflectorMaterial, OrthographicCamera, PerspectiveCamera, PresentationControls, RandomizedLight, Shadow, SpotLight, SpotLightShadow, Stage } from "@react-three/drei";
import { Camera, Mesh, MeshNormalMaterial, } from "three";
import { Nuclide } from "./Nuclide";
import Spacer from "@/components/Spacer";
import Segmented from "@/components/Segmented";

const Configurator: React.FC = () => {
	return (
		<>
			<Spacer />
			<Segmented options={['M5', 'Nuclide', 'Viper']} onChange={(e) => alert(e)} />

			{/* <div className="w-full h-fit">
				<div style={{ width: "100%", height: "100vh " }} className="items-center align-middle justify-between">
					<Canvas camera={{fov:30}} shadows>
						<PresentationControls global zoom={1.2} polar={[0.1, Math.PI / 30]}>
							<Stage shadows={"accumulative"}>
								<directionalLight intensity={1} castShadow={true} />
								<Nuclide />
							</Stage>
						</PresentationControls>
					</Canvas>
				</div>
			</div> */}
		</>
	);
};

export default Configurator;
