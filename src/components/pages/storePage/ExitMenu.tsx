import { Link } from '@tanstack/react-router';


export default function ExitMenu(){
    return (
        <>
        <Link className="fixed left-1/2 -translate-x-1/2 bottom-16 bg-black border-4 border-cardmon-orage size-16 rounded-full z-100 flex justify-center items-center" to='/'>
        <svg width="19" height="23" viewBox="0 0 19 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.40149 23.008C0.217488 23.008 -0.422512 21.952 0.313488 20.96L7.57749 11.264L0.761488 2.112C-0.0385119 1.056 0.633488 0 1.75349 0C2.39349 0 2.84149 0.288 3.32149 0.959999L9.24149 9.056L15.1295 0.959999C15.6095 0.288 16.0575 0 16.7295 0C17.8495 0 18.5215 1.056 17.7215 2.112L10.9055 11.264L18.1375 20.96C18.8735 21.952 18.2655 23.008 17.0495 23.008C16.4735 23.008 15.9935 22.72 15.4815 22.048L9.24149 13.504L3.00149 22.048C2.48949 22.72 2.00949 23.008 1.40149 23.008Z" fill="#FF8E06"/>
        </svg>
        </Link>

        <div className="w-full h-[104px] bg-cardmon-light-gray fixed left-0 bottom-0 rounded-t-xl z-96 
        [mask-image:radial-gradient(circle_at_50%_calc(50%_-50px),_transparent_64px,_white_65px)] "></div>
        </>   
    );
}
