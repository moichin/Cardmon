import StorePage from "./StorePage";
import ExitMenu from "./ExitMenu";

interface CardProps {
  id: number;
  name: string;
  rarity: string;
  color: string;
}

interface StorePageProps {
  coinsTitle: string,
  priceTitle: string,
  price: string,
  btnTitle: string
}

interface ContainerStoreProps{
    card: CardProps,
    storePage: StorePageProps
}

export default function ContainerStorePage(props: ContainerStoreProps){
  
    return(

    <div className="absolute size-full bg-cardmon-gray" id="container">
    
    <StorePage cards={props.card} store={props.storePage}></StorePage>
    <ExitMenu></ExitMenu>
    </div>
    );
}
