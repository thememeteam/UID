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
import { type Reducer, useReducer, useState } from "react";
import { type Models, models, type CarMaterials } from "@/globals";
import { Material, MeshNormalMaterial, MeshStandardMaterial } from "three";
import MaterialEditor from "@/components/configurator/MaterialEditor";

const initialState: CarMaterials = {
	body: new MeshStandardMaterial({
		color: 0x2f2f2f,
		roughness: 0
	}),
	rims: new MeshStandardMaterial({
		color: 'black',
		roughness: 0
	}),
	calipers: new MeshStandardMaterial({
		color: 0xf77315,
		roughness: 0.3
	}),
	interiorBase: new MeshStandardMaterial({
		color: 'black',
		roughness: 0.5
	}),
	interiorAccent: new MeshStandardMaterial({
		color: 0xf77315,
		roughness: 1
	}),
	interiorAccentMetallic: new MeshStandardMaterial({
		color: 0xf77315,
		roughness: 0.2,
		metalness: 1
	})
}

const actionTypes = ["body", "rims", "calipers", "interiorBase", "interiorAccent"] as const;
type ActionTypes = typeof actionTypes[number];

export type MaterialAction = { type: ActionTypes; key: keyof MeshStandardMaterial; value: any }

const reducer: Reducer<CarMaterials, MaterialAction> = (state, action) => {
	if(action.type === "interiorAccent") {
		state.interiorAccent[action.key] = action.value;
		state.interiorAccentMetallic[action.key] = action.value;
		return state;
	}
	state[action.type][action.key] = action.value;
	return state;
}

const Configurator: React.FC = () => {
	const [current, setCurrent] = useState<Models>("SLS");
	const [materials, dispatch] = useReducer(reducer, initialState);

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
					<NuclideModel position={[-38, 0, -70]} scale={0.01} visible={current === "Nuclide"} materials={materials}/>
					<SLSModel position={[-35, 0, -70]} scale={0.01} visible={current === "SLS"} materials={materials} />
					<ViperModel position={[-35, 0, -70]} scale={0.01} visible={current === "Viper"} materials={materials} />

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
							mirror={0}
						/>
					</mesh>
				</Canvas>
			</div>
			<div className="row-start-2 col-start-2 relative m-8 border border-card-stroke wedge">
				<Segmented
					options={models}
					onChange={(e) => setCurrent(e as Models)}
				/>
				<MaterialEditor state={materials} dispatch={dispatch}  />
			</div>
		</div>
	);
};

export default Configurator;
