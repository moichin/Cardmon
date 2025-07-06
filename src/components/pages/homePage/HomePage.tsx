import CardsMissions from './CardsMissions'
import { useState } from 'react';
import StepCounter from './StepCounter';
import HomeInformation from './HomeInformation';

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
    const [visibleInformation, setVisibleInformation] =useState(false);

    const [steps, setSteps] = useState(0);
    const [coins, setCoins] = useState(0);

    return (
    <>
            {visibleInformation && <HomeInformation visibleInformation={visibleInformation} setVisibleInformation={setVisibleInformation}></HomeInformation>}

       <div className="absolute w-full h-auto pb-[200px] bg-cardmon-gray">

            <StepCounter steps={steps} setSteps={setSteps} coins={coins} setCoins={setCoins} />
            <div className="relative flex flex-col size-full">

                 <div className="flex w-full h-8 mt-8 justify-between">
                    <button className={`w-8 h-8 rounded-full  flex justify-center items-center ml-4 ${visibleInformation ? 'bg-cardmon-orage' : 'bg-white'}`}
                    onClick={() => (setVisibleInformation(!visibleInformation))}>
                        <svg className={`size-[18px] ${visibleInformation ? 'fill-white' : ''}`} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 0C4.0374 0 0 4.0374 0 9C0 13.9626 4.0374 18 9 18C13.9626 18 18 13.9626 18 9C18 4.0374 13.9626 0 9 0ZM9 3.69C9.2314 3.69 9.45761 3.75862 9.65002 3.88718C9.84242 4.01574 9.99239 4.19847 10.0809 4.41226C10.1695 4.62605 10.1927 4.8613 10.1475 5.08826C10.1024 5.31521 9.99094 5.52369 9.82731 5.68732C9.66369 5.85094 9.45521 5.96237 9.22826 6.00752C9.0013 6.05266 8.76605 6.02949 8.55226 5.94094C8.33847 5.85239 8.15574 5.70242 8.02718 5.51002C7.89862 5.31761 7.83 5.0914 7.83 4.86C7.83 4.5497 7.95327 4.2521 8.17269 4.03269C8.3921 3.81327 8.6897 3.69 9 3.69ZM11.16 13.86H7.2C7.00904 13.86 6.82591 13.7841 6.69088 13.6491C6.55586 13.5141 6.48 13.331 6.48 13.14C6.48 12.949 6.55586 12.7659 6.69088 12.6309C6.82591 12.4959 7.00904 12.42 7.2 12.42H8.46V8.46H7.74C7.54904 8.46 7.36591 8.38414 7.23088 8.24912C7.09586 8.11409 7.02 7.93096 7.02 7.74C7.02 7.54904 7.09586 7.36591 7.23088 7.23088C7.36591 7.09586 7.54904 7.02 7.74 7.02H9.18C9.37096 7.02 9.55409 7.09586 9.68912 7.23088C9.82414 7.36591 9.9 7.54904 9.9 7.74V12.42H11.16C11.351 12.42 11.5341 12.4959 11.6691 12.6309C11.8041 12.7659 11.88 12.949 11.88 13.14C11.88 13.331 11.8041 13.5141 11.6691 13.6491C11.5341 13.7841 11.351 13.86 11.16 13.86Z"/>
                        </svg>
                    </button>
                    <div className="flex justify-end items-center">
                        <h1 className="leading-none text-xl text-white font-offbit font-bold tracking-wider pt-1 mr-4">{props.homePage.coinsTitle}</h1>
                        <span className="size-6 bg-cardmon-orage border-2 border-white rounded-full mr-2"></span>
                        <h2 className="leading-none text-xl text-white font-offbit font-bold tracking-wider pt-1 mr-4">{coins}</h2>
                    </div>
                </div>

                <div className="w-full justify-center flex pt-12 pb-6">
                    <div className="w-[168px] h-[168px] rounded-full border-8 bg-black border-cardmon-orage flex justify-center items-center">
                        <img src="./character.gif" alt="character" className='scale-60 ml-1'/>
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
       </>
    );
}

