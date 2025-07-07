import { useQuery } from '@tanstack/react-query';
import Menu from "./Menu";
import Homepage from "./HomePage";

interface HomePageProps {
  steps: number;
  coinsTitle: string;
  //coins: number;
  todayStepsTitle: string;
  missionsTitle: string;
}

interface CardMissionsProps {
  cardDailyGoalTitle: string;
  cardRewardTitle: string;
  cardDailySteps: number;
  cardDailyStepsGoal: string;
  cardStepsTitle: string;
  cardDailyRewardCoins: string;
  cardWeeklyGoalTitle: string;
  cardWeeklySteps: number;
  cardWeeklyStepsGoal: string;
  cardWeeklyRewardCoins: string;
}

interface MenuProps {
  titleProfile: string;
  titleInventory: string;
  titleStore: string;
}

interface ContainerProps {
  homePage: HomePageProps;
  cardMissions: CardMissionsProps;
  menu: MenuProps;
}

export default function ContainerHomePage(props: ContainerProps) {
  const token = localStorage.getItem('token');

  const { data: userInfo, isLoading, error } = useQuery({
    queryKey: ['userInfo'],
    queryFn: async () => {
      const resp = await fetch('https://cardmond.test/api/v1/user-info', {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/json',
        },
      });
      if (!resp.ok) throw new Error('No se pudo obtener información del usuario');
      const json = await resp.json();
      return json.user;
    },
    enabled: !!token,
  });

  if (isLoading) return <div>Cargando...</div>;
  if (error) return <div>Error: {(error as Error).message}</div>;
  if (!userInfo) return <div>Usuario no encontrado</div>;

  return (
    <div className="absolute h-full w-full bg-cardmon-gray" id="container">
      <Homepage
        homePage={{
          ...props.homePage,
          coins: userInfo.coins,
        }}
        cardMissions={props.cardMissions}
      />
      <Menu {...props.menu} />
    </div>
  );
}
