import HomePageSprite from '../../spritesheet/HomePageSprite'
import CardsMissions from './CardsMissions'
import { useState } from 'react';
import StepCounter from './StepCounter';

interface HomePageProps {
  steps: number;
  coinsTitle: string;
  coins: number;
  todayStepsTitle: string;
  missionsTitle: string;
}

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

interface HomePageCombinedProps {
  homePage: HomePageProps;
  cardMissions: CardMissionsProps;
}

export default function Homepage(props: HomePageCombinedProps) {
    const [visible, setVisible] = useState(false); 

    const [steps, setSteps] = useState(0)
    const [coins, setCoins] = useState(0)

    return (
       <div className="absolute w-full h-auto pb-[200px] bg-cardmon-gray">
            <StepCounter steps={steps} setSteps={setSteps} coins={coins} setCoins={setCoins} />
            <div className="relative flex flex-col w-full h-full">
                <div className="flex w-full h-6 mt-[40px] justify-end">
                    <h1 className="leading-none text-xl text-white font-offbit font-bold tracking-wider pt-1 mr-4">{props.homePage.coinsTitle}</h1>
                    <span className="size-6 bg-cardmon-orage border-2 border-white rounded-full mr-2"></span>
                    <h2 className="leading-none text-xl text-white font-offbit font-bold tracking-wider pt-1 mr-4">{coins}</h2>
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
                    <h3>{steps}</h3>
                    <h4 className="opacity-75">{props.homePage.todayStepsTitle}</h4>
                </div>
            </div>
                <div className='h-8 w-full mt-8 flex justify-between items-center'>
                <h5 className='leading-none text-xl text-white font-offbit font-bold tracking-wider ml-4'>{props.homePage.missionsTitle}</h5>
                <button  className={`w-8 h-8 rounded-full mr-4 flex justify-center items-center duration-300 ease-in-in 
                ${visible ? 'rotate-45 bg-cardmon-orage' : 'rotate-0 bg-white '}`}
                onClick={() => setVisible(!visible)}>
                    <div className='size-4 relative'>
                        <span className={`w-4 h-1  z-20 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${visible ? 'bg-white' : 'bg-cardmon-light-gray'}`}></span>
                        <span className= {`w-1 h-4  z-10 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${visible ? 'bg-white' : 'bg-cardmon-light-gray'}`}></span>
                    </div>
                </button>
                </div>
                {visible && <CardsMissions {...props.cardMissions}  cardDailySteps={steps} cardWeeklySteps={steps}></CardsMissions>}
       </div>
    );
}

