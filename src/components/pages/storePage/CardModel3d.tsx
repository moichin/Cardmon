import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'


export default function CardModel3d() {

    return(
    <>
        <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight />
        <directionalLight position={[5, 5, 5]}/>
        <mesh position={[0, 0, 0]}>
            <boxGeometry args={[2.8, 4, 0.01]}/>
            <meshStandardMaterial color="orange" />
        </mesh>
        <OrbitControls enableZoom={false} enablePan={false} autoRotate={true} autoRotateSpeed={2}/>
    </Canvas>
    </>
    );
}