interface StoreInformationProps {

visibleInformation: boolean;
setVisibleInformation: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function StoreInformation(props: StoreInformationProps) {

    return (   
        <div className="size-full absolute flex justify-center items-center">

            <div className="w-full h-[352px] bg-black flex flex-col relative border-8 border-cardmon-orage z-102 ml-4 mr-4 ">

               <div className="overflow-x-auto snap-x px-4 space-x-4 flex w-full h-full items-center scrollbar-hide bg-red-500">
                <div className=" snap-center w-full h-40 bg-blue-500 rounded-xl text-white flex items-center justify-center text-xl shadow-lg shrink-0">
                    Tarjeta 1
                </div>
                <div className="snap-center w-full h-40 bg-red-500 rounded-xl text-white flex items-center justify-center text-xl shadow-lg shrink-0">
                    Tarjeta 2
                </div>
                <div className="snap-center w-full h-40 bg-red-500 rounded-xl text-white flex items-center justify-center text-xl shadow-lg shrink-0">
                    Tarjeta 2
                </div>
                
                </div>
                <div className="flex w-full h-6 bg-amber-600"></div>
             
            </div>
            <div className="absolute flex size-full justify-center items-center bg-black opacity-90 z-101"
            onClick={() => props.setVisibleInformation(!props.visibleInformation)}>
            
            </div>
        </div>
    );
    }

   
