export const Route = createFileRoute({
  component: RouteComponent,
})

import ContainerInventoryPage from "../components/pages/inventoryPage/ContainerInventoryPage";


function RouteComponent() {
  return (
    <ContainerInventoryPage></ContainerInventoryPage>

  );
}
