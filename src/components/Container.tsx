import Menu from "./Menu";
import Homepage from "./HomePage";

export default function container(){

    return(

    <div className="absolute h-full w-full bg-cardmon-gray" id="container">
            <Homepage></Homepage>
            <Menu></Menu>
    </div>
    );

}