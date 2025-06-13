import Menu from "./Menu";
import Homepage from "./HomePage";

interface HomePageProps {
    steps: number,
    coinsTitle: string,
    coins: number,
    todayStepsTitle: string,
    missionsTitle: string
}

interface CardMissionsProps{
    cardDailyGoalTitle: string,
    cardRewardTitle: string,
    cardSteps: number, 
    cardDailyStepsGoal: string,
    cardStepsTitle: string,  
    cardDailyRewardCoins: string,
    cardDailyProgress: string,

    cardWeeklyGoalTitle: string,
    cardWeeklySteps: number,
    cardWeeklyStepsGoal: string,
    cardWeeklyRewardCoins: string,
    cardWeeklyProgress: string
}

interface ContainerProps{
    homePage?: HomePageProps,
    cardMissions?: CardMissionsProps
}

export default function container(props: ContainerProps){
    if (!props.homePage || !props.cardMissions) return null;

    return(

    <div className="absolute h-full w-full bg-cardmon-gray" id="container">
            <Homepage homePage={props.homePage} cardMissions={props.cardMissions}></Homepage>
            <Menu></Menu>
    </div>
    );

}