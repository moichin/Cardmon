import { useState, useEffect } from 'react';


export default function StepsInformationCard() {

    let [stepsAnimation, setStepsAnimation] = useState(0);

   useEffect(() => {
    const interval = setInterval(() => {
      setStepsAnimation(prev => {
        if (prev >= 5) {
          return 0;
        }
        return prev + 1;
      });
    }, 600);

    return () => clearInterval(interval);
  }, []);
    

    return(
        <>
        <div className="snap-center size-full text-white flex flex-col text-xl shadow-lg shrink-0">
                        <h1 className=" flex w-full h-36 text-center items-center justify-center text-2xl font-offbit font-bold tracking-wider flex-col">
                            <div>YOU NEED TO MOVE </div>
                            <div>TO GAIN <span className="text-cardmon-orage">STEPS</span></div>
                        </h1>
                        <h2 className="flex w-full h-20  text-center items-center justify-center text-[64px] font-offbit font-bold leading-none tracking-wider">{stepsAnimation}</h2>
                        <h3 className="flex w-full h-auto  text-center items-center justify-center text-2xl font-offbit font-bold leading-none tracking-wider">STEPS</h3>
                            <div className="flex w-full justify-end h-auto pt-10.5 pr-4">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="16" cy="16" r="16" fill="white"/>
                                <path d="M14.689 9.24988L21.6428 15.2221C21.7549 15.3184 21.8448 15.4378 21.9064 15.5721C21.9681 15.7065 22 15.8527 22 16.0006C22 16.1485 21.9681 16.2946 21.9064 16.429C21.8448 16.5633 21.7549 16.6828 21.6428 16.779L14.689 22.7512C14.0253 23.3212 13 22.8487 13 21.9728V10.0266C13 9.15075 14.0253 8.6782 14.689 9.24988Z" fill="#343434"/>
                                </svg>
                            </div>
                    </div>
        </>

    );
}