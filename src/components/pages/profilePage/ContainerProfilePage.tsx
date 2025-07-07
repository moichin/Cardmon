import ExitMenu from "../storePage/ExitMenu";
import ProfilePage from "./ProfilePage";
import { useQuery } from "@tanstack/react-query";

export default function ContainerProfilePage() {
  const token = localStorage.getItem("token");

  const userQuery = useQuery({
    queryKey: ["userInfo"],
    queryFn: async () => {
      const response = await fetch("https://cardmond.test/api/v1/user-info", {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      });
      if (!response.ok) throw new Error("Error obteniendo usuario");
      const result = await response.json();
      return result.user;
    },
  });

  const userCardsQuery = useQuery({
    queryKey: ["userCards"],
    queryFn: async () => {
      const response = await fetch("https://cardmond.test/api/v1/user/cards", {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      });
      if (!response.ok) throw new Error("Error obteniendo cartas");
      return await response.json();
    },
  });

  const allCardsQuery = useQuery({
    queryKey: ["allCards"],
    queryFn: async () => {
      const response = await fetch("https://cardmond.test/api/v1/cards", {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      });
      if (!response.ok) throw new Error("Error obteniendo todas las cartas");
      return await response.json();
    },
  });

  const stepsQuery = useQuery({
    queryKey: ["steps"],
    queryFn: async () => {
      const response = await fetch("https://cardmond.test/api/v1/steps", {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      });
      if (!response.ok) throw new Error("Error obteniendo pasos");
      const result = await response.json();
      return result.steps;
    },
  });

  if (
    userQuery.isLoading ||
    userCardsQuery.isLoading ||
    allCardsQuery.isLoading ||
    stepsQuery.isLoading
  ) {
    return <div>Cargando...</div>;
  }

  if (
    userQuery.error ||
    userCardsQuery.error ||
    allCardsQuery.error ||
    stepsQuery.error
  ) {
    return <div>Error al cargar perfil</div>;
  }

  const totalSteps = stepsQuery.data.reduce(
    (acc: number, item: any) => acc + item.cantidad_pasos,
    0
  );

  return (
    <div className="absolute size-full bg-cardmon-gray">
      <ProfilePage
        titleStats="STATS"
        titleCards="CARDS"
        titleSteps="STEPS"
        titleCoins="COINS"
        username={userQuery.data.name}
        totalSteps={totalSteps}
        coins={userQuery.data.coins}
        userCards={userCardsQuery.data}
        allCards={allCardsQuery.data}
      />
      <ExitMenu />
    </div>
  );
}
