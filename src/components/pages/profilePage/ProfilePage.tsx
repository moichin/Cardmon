import cardsData from "../../../data/cards.json"; 
import cardsUserData from "../../../data/userCards.json";

interface ProfilePageProps{
    titleStats: string, 
    titleCards: string,
    titleSteps: string,
    titleCoins: string
}

export default function ProfilePage(props: ProfilePageProps){

const allCards = cardsData;
const userCards = cardsUserData

    return(
        <div className="absolute size-full bg-cardmon-gray pl-4 pr-4">
            <div className="w-full h-[304px] bg-black border-4 border-cardmon-orage rounded-lg mt-8 pl-4 pr-4">
                <h1 className="text-white items-center justify-center text-2xl font-offbit 
                font-bold leading-none tracking-wider mt-8 space-y-4">
                    <div>
                        MARIO
                    </div>
                    
                    <div className="text-cardmon-orage">
                       {props.titleStats}
                    </div>

                    <div className="flex w-full justify-between opacity-75">
                        <div className="ml-4">
                        {props.titleSteps}
                        </div>
                        <div>
                        1000000
                        </div>
                    </div>
                    
                    <div className="flex w-full justify-between opacity-75">
                        <div className="ml-4">
                        {props.titleCoins}
                        </div>
                        <div>
                        1000
                        </div>
                    </div> 
                </h1>
                <h2 className="text-white items-center justify-center text-2xl font-offbit 
                font-bold leading-none tracking-wider mt-14 space-y-4">
                    <div className="flex w-full justify-between">
                       <div className="text-cardmon-orage">
                        {props.titleCards}
                       </div>
                       <div>
                        {userCards.length}/{allCards.length}
                       </div>
                    </div>

                </h2>
            </div>

            <button className="flex w-full h-10 shadow-[0px_8px_0px_rgba(0,0,0)] border-2 rounded-sm border-white bg-cardmon-orage active:h-10 active:translate-y-2 active:shadow-[0px_2px_0px_rgba(0,0,0)] 
              justify-center items-center mt-10">
              <h3 className="leading-none text-xl text-black text-center font-offbit font-bold tracking-wider pt-1">LOG OUT</h3>
              </button>
        </div>
    );
}