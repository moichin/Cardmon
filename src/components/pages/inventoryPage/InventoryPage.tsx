import { useState, useEffect } from "react";
import CardModel3d from "../storePage/CardModel3d";

interface CardProps {
  id: number;
  name: string;
  rarity: string;
  color: string;
}

interface InventoryPageProps {
  values?: CardProps[];
}

export default function InventoryPage(props: InventoryPageProps) {
  const [visible, setVisible] = useState(false);
  const [obtainedCard, setObtainedCard] = useState<CardProps | null>(null);
  const [selectedRarity, setSelectedRarity] = useState("ALL");

  const cardsToShow = props.values || [];

  // Confirmar en consola si llegan datos desde el backend
  useEffect(() => {
    console.log("🧩 Cartas recibidas en InventoryPage:", cardsToShow);
  }, [cardsToShow]);

  const filterCards =
    selectedRarity === "ALL"
      ? cardsToShow
      : cardsToShow.filter(
          (card) => card.rarity.toUpperCase() === selectedRarity
        );

  return (
    <div className="w-full h-auto flex absolute flex-col bg-cardmon-gray">
      {visible && obtainedCard && (
        <CardModel3d
          color={obtainedCard.color}
          visible={visible}
          setVisible={setVisible}
        />
      )}

      <div className="flex flex-col w-full h-auto mt-8 space-y-5 relative">
        <div className="flex relative justify-between w-full h-8 items-center">
          <h1 className="text-xl leading-none text-white font-offbit font-bold tracking-wider ml-4 pt-1">
            CATEGORYS
          </h1>
          <div className="flex justify-end">
            <h2 className="text-xl leading-none text-white font-offbit font-bold tracking-wider mr-5 pt-1">
              CARDS
            </h2>
            <h2 className="text-xl leading-none text-white font-offbit font-bold tracking-wider mr-4 pt-1">
              <span className="text-cardmon-orage">{filterCards.length}</span>/
              {cardsToShow.length}
            </h2>
          </div>
        </div>

        <div className="p-4 pl-4">
          <div className="flex w-full h-8 space-x-2 justify-center">
            {["ALL", "NORMAL", "RARE", "EPIC", "LEGEND"].map((rarity) => (
              <button
                key={rarity}
                onClick={() => setSelectedRarity(rarity)}
                className={`flex w-[72px] h-8 shadow-[0px_8px_0px_rgba(0,0,0)] border-2 rounded-sm border-white 
                  ${
                    selectedRarity === rarity
                      ? "bg-white text-black"
                      : "bg-cardmon-orage text-black"
                  } 
                  active:translate-y-2 active:shadow-[0px_2px_0px_rgba(0,0,0)] justify-center items-center`}
              >
                <h2 className="text-sm leading-none text-black font-offbit font-bold tracking-wider flex w-full h-full justify-center items-center pl-1 pr-1">
                  {rarity}
                </h2>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="pl-4 pr-4">
        {cardsToShow.length === 0 ? (
          <p className="text-white text-center mt-10">
            No se encontraron cartas en el inventario.
          </p>
        ) : (
          <div className="grid grid-cols-3 justify-items-center gap-4 mt-12 mb-[200px]">
            {filterCards.map((card) => (
              <div
                key={card.id}
                className="w-full h-[184px] cursor-pointer"
                onClick={() => {
                  setObtainedCard(card);
                  setVisible(true);
                }}
              >
                <div className="w-full h-36 bg-black rounded-md border-2 border-white flex justify-center items-center">
                  <img
                    src="/character.gif" // Cambie esto por una imagen si ya tiene la imagen_url disponible
                    alt={card.name}
                    className="scale-40"
                  />
                </div>
                <div className="flex w-full h-10 justify-center items-center">
                  <h2 className="text-xl leading-none text-white font-offbit font-bold tracking-wider uppercase">
                    {card.name}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
