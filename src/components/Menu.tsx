import { useState } from "react";


export default function Menu(){
    const [visible, setVisible] = useState(false); 

    /*
    const changeVisible = () => {
        setVisible(!visible)
    }
        */

    return(
        <div className="relative w-full h-full" id="menu-container">

          <div className="relative w-full h-full z-110">

            {visible && <ul className="relative w-[inherit] h-[inherit] z-[inherit]" id="menu-hide">

              <li className="motion-translate-y-in-[150%] -motion-translate-x-in-[130%] motion-opacity-in-[15%] w-[112px] h-[112px] rounded-full absolute right-4 bottom-[232px] bg-blue-400" 
              id="Profile"></li>

              <li className="motion-translate-y-in-[150%] motion-opacity-in-[15%] w-[112px] h-[112px] rounded-full absolute left-2/4 bottom-[360px] bg-red-400 [transform:translateX(-50%)]" 
              id="Card"></li>

              <li className="motion-translate-y-in-[150%] motion-translate-x-in-[130%] motion-opacity-in-[15%] w-[112px] h-[112px] rounded-full absolute left-4 bottom-[232px] bg-pink-400" 
              id="Inventory"></li>

              <li className="w-[112px] h-[112px] rounded-full absolute left-2/4 -translate-x-1/2 bottom-[72px]" 
              id="close"
              onClick={() => setVisible(!visible)}
              ></li>

            </ul>}
          
            <div className="w-[112px] h-[112px] absolute left-2/4 -translate-x-1/2 bottom-[72px] z-98">
              <span className="w-1.5 h-1.5 absolute rounded-full left-[3px] bottom-[53px] bg-amber-400 z-101"></span>
              <span className={`w-[72px] h-[16px] rounded-full absolute left-[20px] bottom-[48px] bg-white ${visible ? 'motion-rotate-out-160 motion-duration-[600ms]' : 'motion-rotate-in-160'} `} 
              id="rotate">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 absolute left-[5px] bottom-[5px]"></span>
              </span>
              <span className="w-[80px] h-[80px] absolute rounded-full border-2 border-white left-4 bottom-4"></span>
              <a className="w-[112px] h-[112px] rounded-full border-[12px] border-white absolute z-100-" 
              id="open"
              onClick={() => setVisible(!visible)}></a>
            </div>

          {visible && <div className="absolute left-0 top-0 w-full h-full bg-amber-900 opacity-80" id="menu-bg"></div>}

        </div>

        <span className="w-[128px] h-[128px] absolute left-2/4 -translate-x-1/2 bottom-[64px] rounded-full bg-amber-400 z-97"></span>

        <div className="w-full h-[128px] bg-gray-500 absolute left-0 bottom-0 rounded-t-xl z-96"></div>

      </div>

    );

}