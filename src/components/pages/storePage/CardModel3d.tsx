import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

interface CardModel3dProps{
    color: string
}

export default function CardModel3d(props: CardModel3dProps) {

    return(
    <div className='absolute size-full bg-gray-300 z-100'>
        <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight />
        <directionalLight position={[5, 5, 5]}/>
        <mesh position={[0, 0, 0]}>
            <boxGeometry args={[2.8, 4, 0.01]}/>
            <meshStandardMaterial attach="material-0" color="white" />
            <meshStandardMaterial attach="material-1" color="white" />
            <meshStandardMaterial attach="material-2" color="white" />
            <meshStandardMaterial attach="material-3" color="white" />
            <meshStandardMaterial attach="material-4" color={props.color} />
            <meshStandardMaterial attach="material-5" color="black" />
        </mesh>
        <OrbitControls enableZoom={false} enablePan={false} autoRotate={true} autoRotateSpeed={2}/>
        </Canvas>
    </div>
    );
}