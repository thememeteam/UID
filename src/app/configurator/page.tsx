"use client";
import { Canvas, extend } from "@react-three/fiber";
import { AccumulativeShadows, CubeCamera, Environment, MeshReflectorMaterial, OrthographicCamera, PerspectiveCamera, Plane, PresentationControls, RandomizedLight, Shadow, SpotLight, SpotLightShadow, Stage } from "@react-three/drei";
import { Camera, ColorManagement, Mesh, MeshNormalMaterial, } from "three";
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
					<Canvas shadows camera={{ position: [6, 0, 15], fov: 30 }}>
						<spotLight position={[0, 15, 0]} angle={0.3} penumbra={1} castShadow intensity={2} shadow-bias={-0.0001} />
						<ambientLight intensity={0.5} />
						<PresentationControls global polar={[0.1, Math.PI / 30]} >
							<Stage shadows={false}>
								<Nuclide />
							</Stage>
							<AccumulativeShadows position={[0, -0.5, 0]} frames={100} alphaTest={0.9} scale={10}>
								<RandomizedLight amount={8} radius={10} ambient={1.5} position={[1, 5, -1]} />
							</AccumulativeShadows>
						</PresentationControls>
					</Canvas>
				</div>
			</div> */}
		</>
	);
};

export default Configurator;
