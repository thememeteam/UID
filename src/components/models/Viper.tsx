import { useGLTF } from "@react-three/drei";
import type { GroupProps } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import {
	type Mesh,
	MeshNormalMaterial,
	MeshDistanceMaterial,
	MeshDepthMaterial,
	MeshToonMaterial,
	type Material,
} from "three";

const ViperModel: React.FC<GroupProps & {material: Material}> = (props) => {
	const { nodes, materials } = useGLTF("/assets/viper/viper.glb");
	const bodyRef = useRef<Mesh>(null);

	// useEffect(() => {
	// 	bodyRef.current.material = new MeshNormalMaterial();
	// 	console.log('asdf');
	// }, []);

	return (
		<group {...props} dispose={null}>
			<group position={[-1.204, 0, -2.759]}>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.mesh_0.geometry}
					material={materials.black}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.mesh_0_1.geometry}
					material={materials["black_matt.001"]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.mesh_0_2.geometry}
					material={materials["black_matt.001"]}
				/>
				<mesh
					// ref={bodyRef}
					castShadow
					receiveShadow
					geometry={nodes.mesh_0_3.geometry}
					material={props.material}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.mesh_0_4.geometry}
					material={materials.brakes2}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.mesh_0_5.geometry}
					material={materials["chrome.001"]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.mesh_0_6.geometry}
					material={materials.chrome_d}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.mesh_0_7.geometry}
					material={materials.d_glass}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.mesh_0_8.geometry}
					material={materials.d_red}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.mesh_0_9.geometry}
					material={materials["glass.001"]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.mesh_0_10.geometry}
					material={materials.gold}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.mesh_0_11.geometry}
					material={materials.grid}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.mesh_0_12.geometry}
					material={materials.interior_blue}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.mesh_0_13.geometry}
					material={materials.interior_bump}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.mesh_0_14.geometry}
					material={materials.interior_carbon}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.mesh_0_15.geometry}
					material={materials["interior_decals.001"]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.mesh_0_16.geometry}
					material={materials.interior_red}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.mesh_0_17.geometry}
					material={materials.interior_silver}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.mesh_0_18.geometry}
					material={materials.interior_speakers}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.mesh_0_19.geometry}
					material={materials.interior_stripes}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.mesh_0_20.geometry}
					material={materials.lights}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.mesh_0_21.geometry}
					material={materials.logo}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.mesh_0_22.geometry}
					material={materials.plate}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.mesh_0_23.geometry}
					material={materials.r_glass}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.mesh_0_24.geometry}
					material={materials.r_lights}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.mesh_0_25.geometry}
					material={materials.silver_d}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.mesh_0_26.geometry}
					material={materials.tire_mat5}
				/>
			</group>
		</group>
	);
};

export default ViperModel;

useGLTF.preload("/assets/viper/viper.glb");
