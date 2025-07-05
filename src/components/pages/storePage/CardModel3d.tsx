import { Canvas } from '@react-three/fiber'
import { OrbitControls, useTexture } from '@react-three/drei'
import { Environment } from '@react-three/drei'

interface CardModel3dProps {
  color: string
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

function CardBox({ color }: { color: string }) {
  const texture = useTexture("/faceCard1.png")

  return (
    <mesh position={[0, 0, 0]}>
      <boxGeometry args={[2.8, 4, 0.01]} />
      <meshStandardMaterial attach="material-0" color="white" />
      <meshStandardMaterial attach="material-1" color="white" />
      <meshStandardMaterial attach="material-2" color="white" />
      <meshStandardMaterial attach="material-3" color="white" />
      <meshStandardMaterial attach="material-4" color={color} />
      <meshStandardMaterial attach="material-5" map={texture} metalness={0.2} roughness={0.1} />
      
    </mesh>
  )
}

export default function CardModel3d(props: CardModel3dProps) {
  return (
    <div className={`size-full fixed bg-cardmon-gray z-100 ${props.visible ? 'absolute': 'hidden'}`}>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[-100, 5, 5]} intensity={20} />
        <CardBox color={props.color} />
        <Environment preset="city"/>
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={2} />
      </Canvas>
    </div>
  )
}