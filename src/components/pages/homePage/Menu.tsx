import { useState } from "react";
import { Link } from '@tanstack/react-router';

/*
Este componente es el menu despegable, este fue planteado por medio de diferentes etiquetas de html, como ul, li, a, spam, div 
aunque estas no se utilicen para lo que fueron diseñadas ya que en este componente se utilizan para representar elementos graficos. 
Por medio de use state y rombo tailwind se hacen animaciones. Por ejemplo que visible es basicamente para desparecer o aparecer los componentes del menu. 
*/

interface MenuProps {
  titleProfile: string,
  titleInventory: string,
  titleStore: string,
}

export default function Menu(props: MenuProps) {
    const [visible, setVisible] = useState(false); 

    const [controlAnimation, setControlAnimation] = useState(false);

    const controlMenu = () => {
    if (visible) {
      setControlAnimation(true);
      setTimeout(() => {
        setVisible(false);
        setControlAnimation(false);
      }, 
      60); }
      else 
      {
      setVisible(true);
      }
    };

    return(
        <div className="fixed left-0 bottom-0 w-full h-auto" id="menu-container">

          <div className="relative w-full h-full z-110">

            {(visible || controlAnimation) && <ul className="relative w-[inherit] h-[inherit] z-[inherit]" id="menu-hide">

              <li className={`w-[120px] h-[106px] absolute right-3 bottom-[260px] ${visible && !controlAnimation ? 
              'motion-translate-y-in-[150%] -motion-translate-x-in-[100%] motion-opacity-in-[15%]' 
              : 
              'motion-translate-y-out-[150%] -motion-translate-x-out-[100%] motion-opacity-out-[0%] motion-duration-[0.30s]/opacity motion-duration-[0.50s]' }`}>
                <h2 className="font-offbit text-base w-full h-[18px] justify-center items-center flex text-white tracking-wider">{props.titleProfile}</h2>
                <div className="w-20 h-20 rounded-full border-[3px] border-gray-400 absolute left-1/2 -translate-x-1/2 bottom-0">
                  <span className="w-[68px] h-[68px] rounded-full bg-white absolute left-1/2 -translate-x-1/2 mt-[3px]">
                    <img src="/src/assets/menuIcons/profile.svg" alt="img-profile" className="w-[25px] h-[28px] left-1/2 top-5 -translate-x-1/2 absolute"/>
                  </span>
                </div>
              </li>

              <li className={`w-[120px] h-[106px] absolute left-3 bottom-[260px] ${visible && !controlAnimation ? 
              'motion-translate-y-in-[150%] motion-translate-x-in-[100%] motion-opacity-in-[15%]' 
              : 
              'motion-translate-y-out-[150%] motion-translate-x-out-[100%] motion-opacity-out-[0%] motion-duration-[0.30s]/opacity motion-duration-[0.50s]'}`}>
                <h2 className="font-offbit text-base w-full h-[18px] justify-center items-center flex text-white tracking-wider">{props.titleInventory}</h2>
                <div className="w-20 h-20 rounded-full border-[3px] border-gray-400 absolute left-1/2 -translate-x-1/2 bottom-0">
                  <span className="w-[68px] h-[68px] rounded-full bg-white absolute left-1/2 -translate-x-1/2 mt-[3px]">
                    <img src="/src/assets/menuIcons/inventory.svg" alt="img-inventory" className="w-[26px] h-[30px] left-1/2 top-[19px] -translate-x-1/2 absolute"/>
                  </span>
                </div>
              </li>

              <li className={`[transform:translateX(-50%)]
              w-[120px] h-[106px] absolute left-1/2 -translate-x-1/2 bottom-[388px] ${visible && !controlAnimation ?
              'motion-translate-y-in-[150%] motion-opacity-in-[15%]'
              :
              'motion-translate-y-out-[150%] motion-opacity-out-[0%] motion-duration-[0.30s]/opacity motion-duration-[0.50s]'
              }`}>
                <h2 className="font-offbit text-base w-full h-[18px] justify-center items-center flex text-white tracking-wider">{props.titleStore}</h2>
                <Link className="w-20 h-20 rounded-full border-[3px] border-gray-400 absolute left-1/2 -translate-x-1/2 bottom-0" to='/store'>
                  <span className="w-[68px] h-[68px] rounded-full bg-white absolute left-1/2 -translate-x-1/2 mt-[3px]">
                    <img src="/src/assets/menuIcons/store.svg" alt="img-store" className="w-[27px] h-[31px] left-1/2 top-[19px] -translate-x-1/2 absolute"/>
                  </span>
                </Link>
              </li>

              <li className="w-[112px] h-[112px] rounded-full absolute left-2/4 -translate-x-1/2 bottom-[72px]" 
              id="close"
              onClick={controlMenu}
              ></li>

            </ul>}
          
            <div className="w-20 h-20 absolute left-2/4 -translate-x-1/2 bottom-[90px] z-98">
              <span className={`w-1 h-1 absolute rounded-full left-0.5 bottom-[38px] z-101 ${visible ? 'bg-black opacity-90' : 'bg-cardmon-gray'}`}></span>
              <span className={`w-[48px] h-[12px] rounded-full absolute left-4 bottom-[34px] duration-[400ms] ease-in-in ${visible ? 'rotate-[160deg] bg-cardmon-orage' : 'rotate-0 bg-white'}`} 
              id="rotate">
                <span className={`w-1 h-1 rounded-full absolute left-[3px] bottom-[4px] duration-300 
                ${visible ? 'bg-black opacity-90' : 'bg-cardmon-gray'}`}>
                </span>
              </span>
              <span className="w-[56px] h-[56px] absolute rounded-full border-2 border-white left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"></span>
              <a className={`w-20 h-20 rounded-full border-[8px] absolute z-100 ${visible ? 'border-cardmon-orage' : 'border-white' }`} 
              id="open"
              onClick={controlMenu}></a>
            </div>

          {visible && <div className="fixed left-0 top-0 w-full h-full bg-black opacity-90" id="menu-bg"></div>}

        </div>
        
        <span className="absolute w-20 h-20 bg-cardmon-gray rounded-full left-2/4 -translate-x-1/2 bottom-[90px] "></span>
        <div className="w-full h-[128px] bg-cardmon-light-gray absolute left-0 bottom-0 rounded-t-xl z-96 
        [mask-image:radial-gradient(circle_at_50%_calc(50%_-_64px),_transparent_64px,_white_65px)] "></div>
      </div>

    );
  }


