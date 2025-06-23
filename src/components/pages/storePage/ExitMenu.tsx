import { Link } from '@tanstack/react-router';


export default function ExitMenu(){
    return (
        <>
        <Link className="absolute left-1/2 -translate-x-1/2 bottom-24 bg-black border-4 border-cardmon-orage size-16 rounded-full z-100 flex justify-center items-center" to='/'>
        <img src="/src/assets/exit.svg" alt="exit"/>
        </Link>

        <div className="w-full h-[128px] bg-cardmon-light-gray absolute left-0 bottom-0 rounded-t-xl z-96 
        [mask-image:radial-gradient(circle_at_50%_calc(50%_-_64px),_transparent_64px,_white_65px)] "></div>
        </>   
    );
}
