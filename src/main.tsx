import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Container from './components/Container'

import './index.css'

const homePage = {
    steps: 1000,
    coinsTitle: 'COINS',
    coins: 1000,
    todayStepsTitle: 'TODAY STEPS',
    missionsTitle: 'MISSIONS PROGRESS'
}

const cardMissions = {
    cardDailyGoalTitle: 'DAILY GOAL',
    cardRewardTitle: 'REWARD',
    cardSteps: 10000, 
    cardDailyStepsGoal: '10000',
    cardStepsTitle: 'STEPS',  
    cardDailyRewardCoins: '+10',
    cardDailyProgress: '100%',

    cardWeeklyGoalTitle: 'WEEKLY GOAL',
    cardWeeklySteps: 70000,
    cardWeeklyStepsGoal: '70000',
    cardWeeklyRewardCoins: '+70',
    cardWeeklyProgress: '100%'
}


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Container homePage={homePage} cardMissions={cardMissions}></Container>
  </StrictMode>,
)
