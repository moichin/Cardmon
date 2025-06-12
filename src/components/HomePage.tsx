import HomePageSprite from './spritesheet/HomePageSprite'
import Missions from './Missions'
import { useState } from 'react';

export default function Homepage() {
    const [visible, setVisible] = useState(false); 

    return (
       <div className="absolute w-full h-auto pb-[200px] bg-cardmon-gray">

            <div className="relative flex flex-col w-full h-full">
                <div className="flex w-full h-6 mt-[40px] justify-end">
                    <h1 className="leading-none text-xl text-white font-offbit font-bold tracking-wider pt-1 mr-4">COINS</h1>
                    <span className="size-6 bg-cardmon-orage border-2 border-white rounded-full mr-2"></span>
                    <h2 className="leading-none text-xl text-white font-offbit font-bold tracking-wider pt-1 mr-4">999</h2>
                </div>
                <div className="w-full justify-center flex pt-12 pb-6">
                    <div className="w-[168px] h-[168px] rounded-full border-8 bg-black border-cardmon-orage">
                        <HomePageSprite 
                        frameCount={2}          
                        frameWidth={13}
                        frameHeight={16}
                        imageUrl="/src/assets/character-Sheet.png"
                        fps={2} 
                        ></HomePageSprite>
                    </div>
                </div>
                <div className="w-full items-center flex flex-col font-offbit font-bold text-2xl text-white tracking-wider space-y-4">
                    <h3>99999</h3>
                    <h4 className="opacity-75">TODAY STEPS</h4>
                </div>
            </div>
                <div className='h-8 w-full mt-8 flex justify-between items-center'>
                <h5 className='leading-none text-xl text-white font-offbit font-bold tracking-wider ml-4'>MISSION PROGRESS</h5>
                <button  className={`w-8 h-8 rounded-full mr-4 flex justify-center items-center duration-300 ease-in-in 
                ${visible ? 'rotate-45 bg-cardmon-orage' : 'rotate-0 bg-white '}`}
                onClick={() => setVisible(!visible)}>
                    <div className='size-4 relative'>
                        <span className={`w-4 h-1  z-20 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${visible ? 'bg-white' : 'bg-cardmon-light-gray'}`}></span>
                        <span className= {`w-1 h-4  z-10 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${visible ? 'bg-white' : 'bg-cardmon-light-gray'}`}></span>
                    </div>
                </button>
                </div>
                {visible && <Missions></Missions>}
       </div>
    );
}
