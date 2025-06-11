import HomePageSprite from './spritesheet/HomePageSprite'
import Missions from './Missions'
import { useState } from 'react';


export default function Homepage() {
    const [visible, setVisible] = useState(false); 
    return (
       <div className="absolute w-full h-auto pb-[200px] bg-cardmon-gray">

            <div className="relative flex flex-col w-full h-full">
                <div className="flex w-full h-[27px] font-offbit font-bold text-2xl text-white tracking-wider mt-[39px] justify-end bg-green-500">
                    <h1 className="flex w-auto h-[26px] mb-[7px] mr-4">COINS</h1>
                    <span className="w-6 h-6 bg-cardmon-orage border-2 border-white rounded-full mr-[5px]"></span>
                    <h2 className="flex w-auto h-[26px] mb-[7px] mr-4">199</h2>
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
               <button className="flex h-5 ml-4 mt-8 items-end"
                onClick={() => setVisible(!visible)}>
                    <h5 className="font-offbit font-bold text-xl text-white tracking-wider mt-auto">MISSION PROGRESS</h5>
                        <div className="relative w-4 h-4 mb-[1px] ml-2.5">
                            <span className="absolute bg-white w-4 h-1 left-0 top-1/2 -translate-y-1/2"></span> 
                            <span className={`absolute bg-white w-1 h-4 top-0 left-1/2 -translate-x-1/2 ${visible ? 'rotate-0' : 'rotate-90'}`}></span> 
                        </div> 
                </button>
                {visible && <Missions></Missions>}
       </div>
    );
}
