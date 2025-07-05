import InventoryCards from './InventoryCards';
import ExitMenu from '../storePage/ExitMenu';


export default function ContainerInventoryPage (){

    return(
        <div className="absolute size-full bg-cardmon-gray">
            <InventoryCards></InventoryCards>
            <ExitMenu></ExitMenu>
        </div>
    );

}