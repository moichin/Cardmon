import { useState, useEffect} from "react";

export default function MissionsInformationCard() {

    const [buttonActive, setButtonActive] = useState(false);
    
    useEffect(() => {
    const interval = setInterval(() => {
      setButtonActive(previousValue => !previousValue);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

    return(
        <> 
        <div className="snap-center size-full text-white flex flex-col text-xl shadow-lg shrink-0 pl-4 pr-4">
             <h1 className="flex w-full h-36 text-center items-center justify-center text-2xl font-offbit font-bold tracking-wider flex-col mt-8">
                <div>OPEN PACKETS</div>
                <div>TO GET <span className="text-cardmon-orage">AWESOME</span></div>
                <div>CARDMONS</div>
            </h1>
            <div className="flex w-full h-8 justify-center mt-8">
                <h2 className="text-center text-2xl font-offbit font-bold leading-none tracking-wider pt-1 mr-2">PRICE</h2>
                <span className="size-6 bg-cardmon-orage border-2 border-white rounded-full mr-2"></span>
                <h3 className="text-center text-2xl font-offbit font-bold leading-none tracking-wider pt-1">100</h3>
            </div>
            <div className="relative mr-10 ml-10 mt-6">
                <button className={`flex w-full h-10  border-2 rounded-sm border-white
                bg-cardmon-orage 
                justify-center items-center ${!buttonActive ? 'shadow-[0px_2px_0px_rgba(0,0,0)] translate-y-2': 'shadow-[0px_8px_0px_rgba(0,0,0)]'}` }>
                <h3 className="leading-none text-xl text-black text-center font-offbit font-bold tracking-wider pt-1">OPEN</h3>
                </button>
            </div>
                
            
            <div className="flex w-full h-full ">
                <div className="justify-end items-end flex h-full w-full pb-3">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="16" cy="16" r="16" fill="white"/>
                    <path d="M14.689 9.24988L21.6428 15.2221C21.7549 15.3184 21.8448 15.4378 21.9064 15.5721C21.9681 15.7065 22 15.8527 22 16.0006C22 16.1485 21.9681 16.2946 21.9064 16.429C21.8448 16.5633 21.7549 16.6828 21.6428 16.779L14.689 22.7512C14.0253 23.3212 13 22.8487 13 21.9728V10.0266C13 9.15075 14.0253 8.6782 14.689 9.24988Z" fill="#343434"/>
                    </svg>
                </div>
            </div>
          </div>
        
        </>
    );
}


