
import MissionsInformationCard from './MissionsInformationCard';
import StepsInformationCard from './stepsInformationCard';
interface StoreInformationProps {

visibleInformation: boolean;
setVisibleInformation: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function StoreInformation(props: StoreInformationProps) {

    return (   
        <div className="size-full  flex absolute justify-center items-center">

            <div className="w-full h-[352px] bg-cardmon-gray relative border-4 rounded-lg border-cardmon-orage z-102 ml-4 mr-4 ">

               <div className="overflow-x-scroll scroll-smooth snap-x space-x-4 flex w-full h-full items-center">

                    <StepsInformationCard/>

                    <MissionsInformationCard/>
               
                </div>
            </div>
            <div className="absolute flex size-full justify-center items-center bg-black opacity-90 z-101"
            onClick={() => props.setVisibleInformation(!props.visibleInformation)}>
            
            </div>
        </div>
    );
    }

