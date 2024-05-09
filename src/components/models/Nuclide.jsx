import { useGLTF } from "@react-three/drei";
import React, { useRef } from "react";

function NuclideModel(props) {
  const { nodes, materials } = useGLTF("/assets/nuclide/nuclide.glb");
  return (
    <group {...props} dispose={null}>
      <group position={[-1.152, -0.001, -2.17]} scale={1}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0.geometry}
          material={materials.BrakeDisk}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_1.geometry}
          material={materials.Brakes}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_2.geometry}
          material={materials.Blue}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_3.geometry}
          material={materials.Carbon2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_4.geometry}
          material={materials.Decals}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_5.geometry}
          material={materials.Details}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_6.geometry}
          material={materials.Engine1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_7.geometry}
          material={materials.Engine4}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_8.geometry}
          material={materials.Engine3}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_9.geometry}
          material={materials.Engine2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_10.geometry}
          material={materials.Exhaust}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_11.geometry}
          material={materials.Glass}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_12.geometry}
          material={materials.Grid1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_13.geometry}
          material={materials.Grid}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_14.geometry}
          material={materials.Grille}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_15.geometry}
          material={materials.Headlights}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_16.geometry}
          material={materials.HeadlightsEmissive}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_17.geometry}
          material={materials.Interior}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_18.geometry}
          material={materials.Black}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_19.geometry}
          material={materials.Carbon1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_20.geometry}
          material={materials.WhitePaintjob}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_21.geometry}
          material={materials.Carbon}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_22.geometry}
          material={materials.Plastics}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_23.geometry}
          material={materials.Mechanicals}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_24.geometry}
          material={materials.Mirror}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_25.geometry}
          material={materials.Pipes}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_26.geometry}
          material={materials.Plate}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_27.geometry}
          material={materials.Glossy}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_28.geometry}
          material={materials.SafetyBelt}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_29.geometry}
          material={materials.GridSoundSytem}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_30.geometry}
          material={materials.Stitchwork}
        />
        
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_31.geometry}
          material={materials.TaillightsEmissive}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_32.geometry}
          material={materials.TaillightsReflective}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_33.geometry}
          material={materials.Rims}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_34.geometry}
          material={materials.tires}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_35.geometry}
          material={materials.tires2}
        />
      </group>
    </group>
  );
}

export default NuclideModel;

useGLTF.preload("/assets/nuclide/nuclide.glb");
