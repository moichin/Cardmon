
export default function Missions (){
    return(
        <div className="relative flex-col ml-4 mr-4 mt-4 space-y-4">
            <div className="w-full h-[152px] border-4 border-cardmon-orage rounded-lg bg-black motion-preset-slide-up motion-delay-0">
                <div className="text-white font-offbit font-bold text-base tracking-wider 
                flex w-full justify-between pl-5 pr-5 pt-5">
                    <h1 className="opacity-75">DAILY GOAL</h1>
                    <h2>REWARD</h2>
                </div>
                <div className="flex w-full pl-5 justify-between">
                    <div className="flex">
                        <h2 className="flex h-[26px] text-2xl leading-none text-white font-offbit font-bold tracking-wider pt-0.5">10000/</h2>
                        <h3 className="flex h-[26px] text-base opacity-75 leading-none text-white font-offbit font-bold tracking-wider pt-2 ml-1">10000</h3>
                        <h4 className="flex h-[26px] text-sm opacity-75 leading-none text-white font-offbit font-bold tracking-wider pt-2.5 ml-1">STEPS</h4>
                    </div>
                    <div className="flex">
                        <span className="w-6 h-6 rounded-full bg-cardmon-orage border-2 border-white mr-1"></span>
                        <h2 className="leading-none text-white font-offbit font-bold tracking-wider text-xl pt-1 mr-5">+10</h2>
                    </div>
                </div>
                <div className="flex justify-between w-full h-auto mt-8">
                    <div className="flex items-center">
                        <div className="bg-cardmon-orage w-[200px] h-2 ml-5"></div>
                    </div>
                    <div className="flex item-end">
                        <h2 className="text-white font-offbit font-bold tracking-wider text-xl leading-none mr-5">100%</h2>
                    </div>
                </div>
            </div>

            <div className="w-full h-[152px] border-4 border-cardmon-orage rounded-lg bg-black motion-preset-slide-up motion-delay-0">
                <div className="text-white font-offbit font-bold text-base tracking-wider 
                flex w-full justify-between pl-5 pr-5 pt-5">
                    <h1 className="opacity-75">WEEKLEY MISSION</h1>
                    <h2>REWARD</h2>
                </div>
                <div className="flex w-full pl-5 justify-between">
                    <div className="flex">
                        <h2 className="flex h-[26px] text-2xl leading-none text-white font-offbit font-bold tracking-wider pt-0.5">70000/</h2>
                        <h3 className="flex h-[26px] text-base opacity-75 leading-none text-white font-offbit font-bold tracking-wider pt-2 ml-0.5">70000</h3>
                        <h4 className="flex h-[26px] text-sm opacity-75 leading-none text-white font-offbit font-bold tracking-wider pt-2.5 ml-1">STEPS</h4>
                    </div>
                    <div className="flex">
                        <span className="w-6 h-6 rounded-full bg-cardmon-orage border-2 border-white mr-1"></span>
                        <h2 className="leading-none text-white font-offbit font-bold tracking-wider text-xl pt-1 mr-5">+70</h2>
                    </div>
                </div>
                <div className="flex justify-between w-full h-auto mt-8">
                    <div className="flex items-center">
                        <div className="bg-cardmon-orage w-[200px] h-2 ml-5"></div>
                    </div>
                    <div className="flex item-end">
                        <h2 className="text-white font-offbit font-bold tracking-wider text-xl leading-none mr-5">100%</h2>
                    </div>
                </div>
            </div>
        </div>    
    );
}
