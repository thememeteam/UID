import { useGLTF } from '@react-three/drei'

export const Nuclide = () => {
    const { nodes, materials } = useGLTF('/assets/nuclide/scene.gltf')
    return (
        <>
            <group position={[0.635, 0.328, 1.328]}>
                <group position={[0.199, -0.006, 0.005]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_91.geometry}
                        material={materials.Rims}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_92.geometry}
                        material={materials.Details}
                    />
                </group>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_94.geometry}
                    material={materials.tires}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_95.geometry}
                    material={materials.tires}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_96.geometry}
                    material={materials.tires2}
                />
            </group>
            <group position={[0.635, 0.328, -1.342]}>
                <group position={[0.173, -0.006, 0.005]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_99.geometry}
                        material={materials.Rims}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_100.geometry}
                        material={materials.Details}
                    />
                </group>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_102.geometry}
                    material={materials.tires}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_103.geometry}
                    material={materials.tires}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_104.geometry}
                    material={materials.tires2}
                />
            </group>
            <group position={[-0.793, 0.328, -1.342]}>
                <group position={[-0.173, -0.006, 0.005]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_107.geometry}
                        material={materials.Rims}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_108.geometry}
                        material={materials.Details}
                    />
                </group>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_110.geometry}
                    material={materials.tires}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_111.geometry}
                    material={materials.tires}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_112.geometry}
                    material={materials.tires2}
                />
            </group>
            <group position={[-0.793, 0.328, 1.328]}>
                <group position={[-0.199, -0.006, 0.005]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_115.geometry}
                        material={materials.Rims}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_116.geometry}
                        material={materials.Details}
                    />
                </group>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_118.geometry}
                    material={materials.tires}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_119.geometry}
                    material={materials.tires}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_120.geometry}
                    material={materials.tires2}
                />
            </group>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_5.geometry}
                material={materials.BrakeDisk}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_7.geometry}
                material={materials.BrakeDisk}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_9.geometry}
                material={materials.Brakes}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_10.geometry}
                material={materials.Blue}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_12.geometry}
                material={materials.Carbon2}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_14.geometry}
                material={materials.Decals}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_16.geometry}
                material={materials.Details}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_17.geometry}
                material={materials.Blue}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_19.geometry}
                material={materials.Engine1}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_20.geometry}
                material={materials.Engine4}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_21.geometry}
                material={materials.Engine4}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_22.geometry}
                material={materials.Engine3}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_23.geometry}
                material={materials.Engine2}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_25.geometry}
                material={materials.Exhaust}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_27.geometry}
                material={materials.Glass}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_29.geometry}
                material={materials.Grid1}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_31.geometry}
                material={materials.Grid}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_33.geometry}
                material={materials.Grille}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_35.geometry}
                material={materials.Headlights}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_36.geometry}
                material={materials.HeadlightsEmissive}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_38.geometry}
                material={materials.Blue}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_39.geometry}
                material={materials.Blue}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_40.geometry}
                material={materials.Blue}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_41.geometry}
                material={materials.Interior}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_43.geometry}
                material={materials.Black}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_44.geometry}
                material={materials.Black}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_45.geometry}
                material={materials.Black}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_46.geometry}
                material={materials.Black}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_47.geometry}
                material={materials.Black}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_48.geometry}
                material={materials.Black}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_50.geometry}
                material={materials.Carbon1}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_51.geometry}
                material={materials.Carbon1}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_52.geometry}
                material={materials.Carbon1}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_53.geometry}
                material={materials.Blue}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_55.geometry}
                material={materials.WhitePaintjob}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_56.geometry}
                material={materials.Carbon}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_57.geometry}
                material={materials.Blue}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_59.geometry}
                material={materials.Plastics}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_61.geometry}
                material={materials.Mechanicals}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_63.geometry}
                material={materials.Mirror}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_65.geometry}
                material={materials.Pipes}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_67.geometry}
                material={materials.Plate}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_69.geometry}
                material={materials.Black}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_71.geometry}
                material={materials.Glossy}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_73.geometry}
                material={materials.SafetyBelt}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_75.geometry}
                material={materials.GridSoundSytem}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_77.geometry}
                material={materials.Carbon}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_79.geometry}
                material={materials.Blue}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_81.geometry}
                material={materials.Black}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_83.geometry}
                material={materials.Glossy}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_85.geometry}
                material={materials.Stitchwork}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_87.geometry}
                material={materials.TaillightsEmissive}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_88.geometry}
                material={materials.TaillightsReflective}
            />
        </>

    )
}
useGLTF.preload('/assets/nuclide/scene.gltf')