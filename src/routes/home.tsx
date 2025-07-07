import ContainerHomePage from '../components/pages/homePage/ContainerHomePage'

const homePage = {
    steps: 0,
    coinsTitle: 'COINS',
    coins: 1000,
    todayStepsTitle: 'TODAY STEPS',
    missionsTitle: 'MISSIONS PROGRESS'
}

const cardMissions = {
    cardDailyGoalTitle: 'DAILY GOAL',
    cardRewardTitle: 'REWARD',
    cardDailySteps: 0, 
    cardDailyStepsGoal: '10000',
    cardStepsTitle: 'STEPS',  
    cardDailyRewardCoins: '+10',

    cardWeeklyGoalTitle: 'WEEKLY GOAL',
    cardWeeklySteps: 0,
    cardWeeklyStepsGoal: '70000',
    cardWeeklyRewardCoins: '+70'
}

const menu = {
  titleProfile: 'PROFILE',
  titleInventory: 'INVENTORY',
  titleStore: 'STORE',
}

export const Route = createFileRoute({
  component: RouteComponent,
})

function RouteComponent() {
  return (
        <ContainerHomePage homePage={homePage} cardMissions={cardMissions} menu={menu}></ContainerHomePage> 
  )
}
