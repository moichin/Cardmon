import ExitMenu from "../storePage/ExitMenu";
import ProfilePage from "./ProfilePage";

interface ProfilePageProps{
    titleStats: string, 
    titleCards: string,
    titleSteps: string,
    titleCoins: string
}

interface ContainerProfileProps{
    profile: ProfilePageProps
}

export default function ContainerProfilePage(props: ContainerProfileProps){

    return(
        <div className="absolute size-full bg-cardmon-gray">
        <ProfilePage {...props.profile}></ProfilePage>
        <ExitMenu></ExitMenu>
        </div>
    );
}