import ContainerProfilePage from "../components/pages/profilePage/ContainerProfilePage"


export const Route = createFileRoute({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
    <ContainerProfilePage></ContainerProfilePage>
    </>
  );
}
