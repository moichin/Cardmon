import ContainerProfilePage from "../components/pages/profilePage/ContainerProfilePage"

export const Route = createFileRoute({
  component: RouteComponent,
})

const profile = {
  titleStats: 'STADISTICS',
  titleCards: 'CARDS COLLECTED',
  titleSteps: 'TOTAL STEPS',
  titleCoins: 'TOTAL COINS'
}


function RouteComponent() {
  return (
    <>
    <ContainerProfilePage profile={profile}></ContainerProfilePage>
    </>
  );
}
