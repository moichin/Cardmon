import { useEffect, useState } from "react";
import CardModel3d from "./CardModel3d";
import StorePageSprite from "../../spritesheet/StorePageSprite";
import StoreInformation from "./StoreInformation";

interface CardProps {
  id: number;
  name: string;
  rarity: string;
  color: string;
}

interface StorePageProps {
  coinsTitle: string;
  priceTitle: string;
  price: string;
  btnTitle: string;
}

interface StorePageCombinedProps {
  cards: CardProps;
  store: StorePageProps;
}

export default function StorePage(props: StorePageCombinedProps) {
  const [visible, setVisible] = useState(false);
  const [visibleOpenAnimation, setVisibleOpenAnimation] = useState(false);
  const [visibleInformation, setVisibleInformation] = useState(false);
  const [coins, setCoins] = useState(0);
  const [obtainedCard, setObtainedCard] = useState<CardProps | null>(null);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch("https://cardmond.test/api/v1/user-info", {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${token}`,
            "Accept": "application/json",
          },
        });

        const result = await response.json();

        if (!response.ok) {
          console.error("Error al obtener monedas:", result.message);
          return;
        }

        setCoins(result.user.coins);
      } catch (error) {
        console.error("Fallo al cargar las monedas:", error);
      }
    };

    fetchCoins();
  }, []);

  const controlCard = () => {
    setTimeout(() => {
      setVisibleOpenAnimation(true);
      setTimeout(() => {
        setVisibleOpenAnimation(false);
        setVisible(true);
      }, 2000);
    }, 200);
  };

  const comprarCarta = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch("https://cardmond.test/api/v1/shop/buy", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Accept": "application/json",
        },
      });

      const result = await response.json();

      if (!response.ok) {
        console.error("Error en la compra:", result.message);
        return;
      }

      console.log("Carta obtenida:", result.card);
      setObtainedCard({
        id: result.card.id,
        name: result.card.nombre,
        rarity: result.card.rareza?.toUpperCase() || "NORMAL",
        color: result.card.color || "gray",
      });

      setCoins(result.user.coins);
    } catch (error) {
      console.error("Fallo en la compra:", error);
    }
  };

  const handleBuyPack = () => {
    controlCard();
    comprarCarta();
  };

  return (
    <div className="size-full flex flex-col space-y-8">
      <div className="flex w-full h-8 mt-8 justify-between">
        <button className={`w-8 h-8 rounded-full flex justify-center items-center ml-4 ${visibleInformation ? 'bg-cardmon-orage' : 'bg-white'}`}
          onClick={() => setVisibleInformation(!visibleInformation)}>
          <svg className={`size-[18px] ${visibleInformation ? 'fill-white' : ''}`} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 0C4.0374 0 0 4.0374 0 9C0 13.9626 4.0374 18 9 18C13.9626 18 18 13.9626 18 9C18 4.0374 13.9626 0 9 0ZM9 3.69C9.2314 3.69 9.45761 3.75862 9.65002 3.88718C9.84242 4.01574 9.99239 4.19847 10.0809 4.41226C10.1695 4.62605 10.1927 4.8613 10.1475 5.08826C10.1024 5.31521 9.99094 5.52369 9.82731 5.68732C9.66369 5.85094 9.45521 5.96237 9.22826 6.00752C9.0013 6.05266 8.76605 6.02949 8.55226 5.94094C8.33847 5.85239 8.15574 5.70242 8.02718 5.51002C7.89862 5.31761 7.83 5.0914 7.83 4.86C7.83 4.5497 7.95327 4.2521 8.17269 4.03269C8.3921 3.81327 8.6897 3.69 9 3.69ZM11.16 13.86H7.2C7.00904 13.86 6.82591 13.7841 6.69088 13.6491C6.55586 13.5141 6.48 13.331 6.48 13.14C6.48 12.949 6.55586 12.7659 6.69088 12.6309C6.82591 12.4959 7.00904 12.42 7.2 12.42H8.46V8.46H7.74C7.54904 8.46 7.36591 8.38414 7.23088 8.24912C7.09586 8.11409 7.02 7.93096 7.02 7.74C7.02 7.54904 7.09586 7.36591 7.23088 7.23088C7.36591 7.09586 7.54904 7.02 7.74 7.02H9.18C9.37096 7.02 9.55409 7.09586 9.68912 7.23088C9.82414 7.36591 9.9 7.54904 9.9 7.74V12.42H11.16C11.351 12.42 11.5341 12.4959 11.6691 12.6309C11.8041 12.7659 11.88 12.949 11.88 13.14C11.88 13.331 11.8041 13.5141 11.6691 13.6491C11.5341 13.7841 11.351 13.86 11.16 13.86Z" />
          </svg>
        </button>
        <div className="flex justify-end items-center">
          <h1 className="leading-none text-xl text-white font-offbit font-bold tracking-wider pt-1 mr-4">{props.store.coinsTitle}</h1>
          <span className="size-6 bg-cardmon-orage border-2 border-white rounded-full mr-2"></span>
          <h2 className="leading-none text-xl text-white font-offbit font-bold tracking-wider pt-1 mr-4">{coins}</h2>
        </div>
      </div>

      <div className="flex justify-center ">
        <div className="flex w-full h-[282px] justify-end absolute items-end">
          <div className="w-[88px] h-14 bg-black mr-4 z-20 border-4 border-cardmon-orage rounded-lg flex flex-col">
            <h2 className="leading-none text-base text-white font-offbit font-bold tracking-wider flex w-full justify-center pt-1.5">{props.store.priceTitle}</h2>
            <div className="flex justify-center w-full space-x-1">
              <span className="size-5 bg-cardmon-orage border-2 border-white rounded-full mt-0.5"></span>
              <h3 className="leading-none text-base text-white font-offbit font-bold tracking-wider pt-1.5">{props.store.price}</h3>
            </div>
          </div>
        </div>
        <img src="/packCard.png" alt="packCard" className="w-[164px] h-[282px] -rotate-2 motion-rotate-loop-[4deg] motion-duration-1900" style={{ imageRendering: "pixelated" }} />
      </div>

      <div className="ml-4 mr-4">
        <button className="flex w-full h-10 shadow-[0px_8px_0px_rgba(0,0,0)] border-2 rounded-sm border-white bg-cardmon-orage active:h-10 active:translate-y-2 active:shadow-[0px_2px_0px_rgba(0,0,0)]
          justify-center items-center"
          onClick={handleBuyPack}
        >
          <h3 className="leading-none text-xl text-black text-center font-offbit font-bold tracking-wider pt-1">{props.store.btnTitle}</h3>
        </button>
      </div>

      {visibleOpenAnimation && (
        <div className="absolute flex size-full bg-black z-101">
          <StorePageSprite
            frameCount={18}
            frameWidth={245}
            frameHeight={255}
            imageUrl="/packAnimation-Sheet.png"
            fps={12}
          />
        </div>
      )}

      {obtainedCard && <CardModel3d color={obtainedCard.color} visible={visible} setVisible={setVisible} />}

      {visibleInformation && (
        <StoreInformation visibleInformation={visibleInformation} setVisibleInformation={setVisibleInformation} />
      )}
    </div>
  );
}
