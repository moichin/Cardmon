import ExitMenu from "../storePage/ExitMenu";
import ProfilePage from "./ProfilePage";

export default function ContainerProfilePage(){

    return(
        <div className="absolute size-full bg-cardmon-gray">
        <ProfilePage></ProfilePage>
        <ExitMenu></ExitMenu>
        </div>
    );
}