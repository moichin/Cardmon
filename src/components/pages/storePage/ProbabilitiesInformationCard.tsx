

export default function ProbabilitiesInformationCard() {

    return(
        <> 
        <div className="snap-center size-full text-white flex flex-col text-xl shadow-lg shrink-0">
             <h1 className=" flex w-full h-36 text-center items-center justify-center text-2xl font-offbit font-bold tracking-wider flex-col mt-8">
                <div>THE <span className="text-cardmon-orage">PROBABILITIES</span></div>
                <div>ARE...</div>
                
            </h1>
           
            <div className="flex w-full h-36 mt-6">
            <div className="w-1/2 h-auto flex ml-4 justify-center">
                <img src="./CardPixelArt.png" alt="Card" className="scale-100 flex" />
            </div>
                <div className="w-1/2 h-auto mr-4 text-white font-offbit font-bold tracking-wider text-xl flex flex-col justify-between text-center">
                    <h2><span className="text-cardmon-orage">NORMAL</span> 60%</h2>
                    <h3><span className="text-cardmon-orage">RARE</span> 25%</h3>
                    <h4><span className="text-cardmon-orage">EPIC</span> 10%</h4>
                    <h5><span className="text-cardmon-orage">LEGEND</span> 5%</h5>
                </div>
            </div>
 
            <div className="flex w-full h-full pl-4">
                    <div className=" items-end flex h-full w-full pb-3">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="16" cy="16" r="16" fill="white"/>
                        <path d="M17.311 9.24988L10.3572 15.2221C10.2451 15.3184 10.1552 15.4378 10.0936 15.5721C10.0319 15.7065 10 15.8527 10 16.0006C10 16.1485 10.0319 16.2946 10.0936 16.429C10.1552 16.5633 10.2451 16.6828 10.3572 16.779L17.311 22.7512C17.9747 23.3212 19 22.8487 19 21.9728V10.0266C19 9.15075 17.9747 8.6782 17.311 9.24988Z" fill="#343434"/>
                        </svg>
                    </div>
                </div>
          </div>
        
        </>
    );
}

