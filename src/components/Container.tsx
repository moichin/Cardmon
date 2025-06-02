import Menu from "./Menu";

export default function container(){

    return(

    <div className="absolute top-1/2 left-1/2 h-full w-full bg-amber-400 -translate-x-1/2 -translate-y-1/2" id="container">
            <h1 className="font-pixelon text-4xl absolute flex">Prueba de fuente</h1>
            <Menu></Menu>
    </div>
    );

}