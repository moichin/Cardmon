import { useState, useEffect } from 'react';


export default function MissionsInformationCard() {

    const [waitCardDaily, setWaitCardDaily] = useState(false);

    let [stepsAnimation, setStepsAnimation] = useState(0);

    useEffect(() => {
    if (waitCardDaily == true) return; // Detiene el intervalo si waitCardDaily es true

    const interval = setInterval(() => {
        setStepsAnimation(previousValue => {
            if (previousValue >= 5) {
                return 0;
            }
            return previousValue + 1;
        });
    }, 500);

    return () => clearInterval(interval);
    }, [waitCardDaily]);


    useEffect(() => {
        const stepsDaily = stepsAnimation + 5; 
        const goalDaily = 10;
        const dailyPorcentaje = (stepsDaily / goalDaily) * 100;
        const dailyPorcentajeEstimaded = Math.min(Math.round(dailyPorcentaje), 100);

        if (dailyPorcentajeEstimaded >= 100) {
            setWaitCardDaily(true);

            setTimeout(() => {
                setWaitCardDaily(false);
                setStepsAnimation(0); 
            }, 1000);

        }
    }, [stepsAnimation]); 

    const cardDaily = () => {
        const stepsDaily = stepsAnimation + 5;
        const goalDaily = 10;
        const dailyPorcentaje = (stepsDaily / goalDaily) * 100;
        const dailyPorcentajeEstimaded = Math.min(Math.round(dailyPorcentaje), 100);
        return `${dailyPorcentajeEstimaded}%`;
    };

    return(
        <> 
        <div className="snap-center size-full text-white flex flex-col text-xl shadow-lg shrink-0 pl-4 pr-4">
                <h1 className="flex w-full h-36 text-center items-center justify-center text-2xl font-offbit font-bold tracking-wider flex-col mt-8">
                    <div>COMPLETE THE MISSIONS </div>
                    <div>AND <span className="text-cardmon-orage">WAIT</span> FOR BE</div>
                    <div>AVAILABLE AGAIN</div>
                </h1>
                
                <div className="w-full h-[125px] relative flex flex-col border-4 border-cardmon-orage rounded-lg 
                bg-black mt-6">
                    {waitCardDaily && (<div className='absolute bg-black w-full size-full flex z-1 opacity-95'>
                        <h1 className="size-full text-center text-white flex items-center justify-center text-2xl font-offbit font-bold leading-none tracking-wider">24:00:00</h1>
                    </div>)}

                    <div className="text-white font-offbit font-bold text-base tracking-wider 
                    flex w-full justify-between pl-5 pr-5 pt-5">
                        <h1 className="opacity-75">DAILY MISSION</h1>
                        <h2>REWARD</h2>
                    </div>
                    <div className="flex w-full pl-5 justify-between">
                        <div className="flex">
                            <h2 className="flex h-[20px] text-xl leading-none text-white font-offbit font-bold tracking-wider pt-0.5">10000/</h2>
                            <h3 className="flex h-[20px] text-xs opacity-75 leading-none text-white font-offbit font-bold tracking-wider pt-2 ml-1">10000</h3>
                            <h4 className="flex h-[20px] text-xs opacity-75 leading-none text-white font-offbit font-bold tracking-wider pt-2 ml-1">STEPS</h4>
                        </div>
                        <div className="flex">
                            <span className="size-5 rounded-full bg-cardmon-orage border-2 border-white mr-1"></span>
                            <h2 className="leading-none text-white font-offbit font-bold tracking-wider text-xl pt-0.5 mr-5">+10</h2>
                        </div>
                    </div>
                    <div className="flex justify-between w-full h-auto mt-5 mb-5">
                        <div className="flex items-center">
                            <div className="w-[200px] h-2 ml-5 bg-white">
                                <div className="bg-cardmon-orage w-[200px] flex h-2 transition-all duration-300" style={{ width: cardDaily() }}>
                                </div>
                            </div>   
                        </div>
                        <div className="flex item-end">
                            <h2 className="text-white font-offbit font-bold tracking-wider text-base leading-none mr-5">{cardDaily()}</h2>
                        </div>
                    </div>
                </div>

                <div className="flex w-full h-full ">
                    <div className=" items-end flex h-full w-full pb-3">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="16" cy="16" r="16" fill="white"/>
                        <path d="M17.311 9.24988L10.3572 15.2221C10.2451 15.3184 10.1552 15.4378 10.0936 15.5721C10.0319 15.7065 10 15.8527 10 16.0006C10 16.1485 10.0319 16.2946 10.0936 16.429C10.1552 16.5633 10.2451 16.6828 10.3572 16.779L17.311 22.7512C17.9747 23.3212 19 22.8487 19 21.9728V10.0266C19 9.15075 17.9747 8.6782 17.311 9.24988Z" fill="#343434"/>
                        </svg>
                    </div>
                </div>
        </div>
        
        </>
    );
}


