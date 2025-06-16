import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useState } from 'react';



export default function ContainerStorePage(){
    
const [visible, setVisible] = useState(false);
    return(

    <div className="absolute h-full w-full bg-gray-200" id="container">
        <button className='absolute left-7 top-7 bg-amber-500 z-400' onClick={() => (setVisible(!visible))}>See</button>
     
     { visible &&<Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight />
        <directionalLight position={[5, 5, 5]}/>
        <mesh position={[0, 0, 0]}>
            <boxGeometry args={[2, 4, 0.01]}/>
            <meshStandardMaterial color="orange" />
        </mesh>
        <OrbitControls enableZoom={false} enablePan={false} autoRotate={true} autoRotateSpeed={2}/>
      </Canvas>}
    </div>
    );

}
