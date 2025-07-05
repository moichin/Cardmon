import { useState, useEffect } from 'react';

interface CardMissionsProps{
    cardDailyGoalTitle: string,
    cardRewardTitle: string,
    cardDailySteps: number, 
    cardDailyStepsGoal: string,
    cardStepsTitle: string,  
    cardDailyRewardCoins: string,

    cardWeeklyGoalTitle: string,
    cardWeeklySteps: number,
    cardWeeklyStepsGoal: string,
    cardWeeklyRewardCoins: string,
}

export default function CardsMissions (props: CardMissionsProps){

    const [waitCardDaily, setWaitCardDaily] = useState(false);
    const [waitCardWeekly, setWaitCardWeekly] = useState(false);

    const cardDaily = () => {
    const stepsDaily = props.cardDailySteps; 
    const goalDaily = 10;
    const dailyPorcentaje = goalDaily > 0 ? (stepsDaily / goalDaily) * 100 : 0;
    const dailyPorcentajeEstimaded = Math.min(Math.round(dailyPorcentaje), 100);
    const dailyProgress = `${dailyPorcentajeEstimaded}%`;
    return dailyProgress;
    };

    useEffect(() => {
    const goalDaily = 10;
    const dailyPorcentaje = goalDaily > 0 ? (props.cardDailySteps / goalDaily) * 100 : 0;
    const dailyPorcentajeEstimaded = Math.min(Math.round(dailyPorcentaje), 100);

    if (dailyPorcentajeEstimaded >= 100) {
        setWaitCardDaily(true);
    }
    }, [props.cardDailySteps]);

    const cardWeekly = () => {
        const stepsWeekly = props.cardWeeklySteps;
        const goalWeekly = 20; 
        const weeklyPorcentaje = goalWeekly > 0 ? (stepsWeekly / goalWeekly) * 100: 0;
        const weeklyPorcentajeEstimaded = Math.round(Math.min(weeklyPorcentaje, 100));
        const weeklyProgress = `${weeklyPorcentajeEstimaded}%`;
        return weeklyProgress;
    }

    useEffect(() => {
        const goalWeekly = 20;
        const weeklyPorcentaje = goalWeekly > 0 ? (props.cardWeeklySteps / goalWeekly) * 100 : 0;
        const weeklyPorcentajeEstimaded = Math.min(Math.round(weeklyPorcentaje), 100
        );
        if (weeklyPorcentajeEstimaded >= 100) {
            setWaitCardWeekly(true);
        }
    }, [props.cardWeeklySteps]);

    return(
        <div className="relative flex-col ml-4 mr-4 mt-4 space-y-4">
            <div className="w-full h-[152px] border-4 border-cardmon-orage rounded-lg bg-black motion-preset-slide-up motion-delay-0">
                {waitCardDaily && (
                    <div className='absolute bg-black w-full size-full flex z-1 opacity-95'>
                        <h1 className="size-full text-center text-white flex items-center justify-center text-2xl font-offbit font-bold leading-none tracking-wider">24:00:00</h1>
                    </div>
                )}
                <div className="text-white font-offbit font-bold text-base tracking-wider 
                flex w-full justify-between pl-5 pr-5 pt-5">
                    <h1 className="opacity-75">{props.cardDailyGoalTitle}</h1>
                    <h2>{props.cardRewardTitle}</h2>
                </div>
                <div className="flex w-full pl-5 justify-between">
                    <div className="flex">
                        <h2 className="flex h-[26px] text-2xl leading-none text-white font-offbit font-bold tracking-wider pt-0.5">{props.cardDailySteps}/</h2>
                        <h3 className="flex h-[26px] text-base opacity-75 leading-none text-white font-offbit font-bold tracking-wider pt-2 ml-1">{props.cardDailyStepsGoal}</h3>
                        <h4 className="flex h-[26px] text-sm opacity-75 leading-none text-white font-offbit font-bold tracking-wider pt-2.5 ml-1">{props.cardStepsTitle}</h4>
                    </div>
                    <div className="flex">
                        <span className="w-6 h-6 rounded-full bg-cardmon-orage border-2 border-white mr-1"></span>
                        <h2 className="leading-none text-white font-offbit font-bold tracking-wider text-xl pt-1 mr-5">{props.cardDailyRewardCoins}</h2>
                    </div>
                </div>
                <div className="flex justify-between w-full h-auto mt-8">
                    <div className="flex items-center">
                        <div className="w-[200px] h-2 ml-5 bg-white">
                            <div className="bg-cardmon-orage w-[200px] flex h-2 transition-all duration-300" style={{ width: cardDaily() }}>
                            </div>
                        </div>   
                    </div>
                    <div className="flex item-end">
                        <h2 className="text-white font-offbit font-bold tracking-wider text-xl leading-none mr-5">{cardDaily()}</h2>
                    </div>
                </div>
            </div>
            
            <div className="w-full h-[152px] border-4 border-cardmon-orage rounded-lg bg-black motion-preset-slide-up motion-delay-0">
                {waitCardWeekly && (
                    <div className='absolute bg-black w-full size-full flex z-1 opacity-95'>
                        <h1 className="size-full text-center text-white flex items-center justify-center text-2xl font-offbit font-bold leading-none tracking-wider">168:00:00</h1>
                    </div>
                )}
                <div className="text-white font-offbit font-bold text-base tracking-wider 
                flex w-full justify-between pl-5 pr-5 pt-5">
                    <h1 className="opacity-75">{props.cardWeeklyGoalTitle}</h1>
                    <h2>{props.cardRewardTitle}</h2>
                </div>
                <div className="flex w-full pl-5 justify-between">
                    <div className="flex">
                        <h2 className="flex h-[26px] text-2xl leading-none text-white font-offbit font-bold tracking-wider pt-0.5">{props.cardWeeklySteps}/</h2>
                        <h3 className="flex h-[26px] text-base opacity-75 leading-none text-white font-offbit font-bold tracking-wider pt-2 ml-0.5">{props.cardWeeklyStepsGoal}</h3>
                        <h4 className="flex h-[26px] text-sm opacity-75 leading-none text-white font-offbit font-bold tracking-wider pt-2.5 ml-1">{props.cardStepsTitle}</h4>
                    </div>
                    <div className="flex">
                        <span className="w-6 h-6 rounded-full bg-cardmon-orage border-2 border-white mr-1"></span>
                        <h2 className="leading-none text-white font-offbit font-bold tracking-wider text-xl pt-1 mr-5">{props.cardWeeklyRewardCoins}</h2>
                    </div>
                </div>
                <div className="flex justify-between w-full h-auto mt-8">
                    <div className="flex items-center">
                        <div className="w-[200px] h-2 ml-5 bg-white">
                            <div className="bg-cardmon-orage w-[200px] flex h-2 transition-all duration-300" style={{ width: cardWeekly() }}>
                            </div>
                        </div>   
                    </div>
                    <div className="flex item-end">
                        <h2 className="text-white font-offbit font-bold tracking-wider text-xl leading-none mr-5">{cardWeekly()}</h2>
                    </div>
                </div>
            </div>
        </div>    
    );
}
