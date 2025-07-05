import { useState } from "react";
import { Link } from '@tanstack/react-router';

/*
Este componente es el menu despegable, este fue planteado por medio de diferentes etiquetas de html, como ul, li, a, spam, div 
aunque estas no se utilicen para lo que fueron diseñadas ya que en este componente se utilizan para representar elementos graficos. 
Por medio de use state y rombo tailwind se hacen animaciones. Por ejemplo que visible es basicamente para desparecer o renderizar los componentes del menu. 
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

          <div className="relative size-full z-110">

            {(visible || controlAnimation) && <ul className="relative w-[inherit] h-[inherit] z-[inherit]" id="menu-hide">

              <li className={`w-[120px] h-[106px] absolute right-3 bottom-52 ${visible && !controlAnimation ? 
              'motion-translate-y-in-[150%] -motion-translate-x-in-[100%] motion-opacity-in-[150%]' 
              : 
              'motion-translate-y-out-[150%] -motion-translate-x-out-[100%] motion-opacity-out-[0%] motion-duration-[0.30s]/opacity motion-duration-[0.50s]' }`}>
                <h2 className="font-offbit text-base w-full h-[18px] justify-center items-center flex text-white tracking-wider">{props.titleProfile}</h2>
                <div className="size-20 rounded-full border-[3px] border-gray-400 absolute left-1/2 -translate-x-1/2 bottom-0">
                  <span className="w-[68px] h-[68px] rounded-full bg-white absolute left-1/2 -translate-x-1/2 mt-[3px]">
                    <svg className="w-[25px] h-[28px] left-1/2 top-5 -translate-x-1/2 absolute" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.1056 2.03624C15.9362 0.723121 14.3028 0 12.5 0C10.6876 0 9.04877 0.718746 7.88474 2.02374C6.70809 3.34311 6.13479 5.13622 6.2694 7.07246C6.53622 10.8924 9.33122 13.9999 12.5 13.9999C15.6688 13.9999 18.459 10.8931 18.73 7.07371C18.8664 5.15497 18.2895 3.36561 17.1056 2.03624ZM23.0766 27.9998H1.92337C1.64649 28.0036 1.37229 27.9431 1.12072 27.8228C0.869155 27.7024 0.646542 27.5253 0.469081 27.3042C0.0784666 26.8186 -0.078981 26.1555 0.0376023 25.4849C0.5448 22.5586 2.12769 20.1005 4.6156 18.3749C6.82588 16.843 9.62568 15.9999 12.5 15.9999C15.3743 15.9999 18.1741 16.8437 20.3844 18.3749C22.8723 20.0999 24.4552 22.558 24.9624 25.4842C25.079 26.1548 24.9215 26.818 24.5309 27.3036C24.3535 27.5248 24.1309 27.702 23.8794 27.8225C23.6278 27.9429 23.3536 28.0035 23.0766 27.9998Z" fill="black"/>
                    </svg>
                  </span>
                </div>
              </li>

              <li className={`w-[120px] h-[106px] absolute left-3 bottom-52 ${visible && !controlAnimation ? 
              'motion-translate-y-in-[150%] motion-translate-x-in-[100%] motion-opacity-in-[15%]' 
              : 
              'motion-translate-y-out-[150%] motion-translate-x-out-[100%] motion-opacity-out-[0%] motion-duration-[0.30s]/opacity motion-duration-[0.50s]'}`}>
                <h2 className="font-offbit text-base w-full h-[18px] justify-center items-center flex text-white tracking-wider">{props.titleInventory}</h2>
                <Link className="size-20 rounded-full border-[3px] border-gray-400 absolute left-1/2 -translate-x-1/2 bottom-0" to='/inventory'>
                  <span className="w-[68px] h-[68px] rounded-full bg-white absolute left-1/2 -translate-x-1/2 mt-[3px]">
                    <svg className="w-[26px] h-[30px] left-1/2 top-[19px] -translate-x-1/2 absolute" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.1429 21C11.1429 21.3978 11.3385 21.7794 11.6868 22.0607C12.0351 22.342 12.5075 22.5 13 22.5C13.4925 22.5 13.9649 22.342 14.3132 22.0607C14.6615 21.7794 14.8571 21.3978 14.8571 21H20.4286C21.7824 21 23.0509 20.7075 24.1429 20.1975V27C24.1429 27.7956 23.7515 28.5587 23.055 29.1213C22.3584 29.6839 21.4137 30 20.4286 30H5.57143C4.58634 30 3.6416 29.6839 2.94503 29.1213C2.24847 28.5587 1.85714 27.7956 1.85714 27V20.1975C2.94914 20.7075 4.21757 21 5.57143 21H11.1429ZM14.8571 19.5V15C14.8571 14.6022 14.6615 14.2206 14.3132 13.9393C13.9649 13.658 13.4925 13.5 13 13.5C12.5075 13.5 12.0351 13.658 11.6868 13.9393C11.3385 14.2206 11.1429 14.6022 11.1429 15V19.5H5.57143C4.09379 19.5 2.67668 19.0259 1.63183 18.182C0.586988 17.3381 0 16.1935 0 15L0 10.5C0 9.30653 0.586988 8.16193 1.63183 7.31802C2.67668 6.47411 4.09379 6 5.57143 6H20.4286C21.9062 6 23.3233 6.47411 24.3682 7.31802C25.413 8.16193 26 9.30653 26 10.5V15C26 16.1935 25.413 17.3381 24.3682 18.182C23.3233 19.0259 21.9062 19.5 20.4286 19.5H14.8571ZM9.28571 4.5H5.57143C4.93071 4.5 4.30857 4.566 3.71429 4.689V2.25C3.71429 1.65326 4.00778 1.08097 4.5302 0.65901C5.05263 0.237053 5.76118 3.35276e-08 6.5 3.35276e-08C7.23882 3.35276e-08 7.94737 0.237053 8.4698 0.65901C8.99222 1.08097 9.28571 1.65326 9.28571 2.25V4.5ZM22.2857 4.689C21.679 4.56312 21.055 4.49961 20.4286 4.5H16.7143V2.25C16.7143 1.65326 17.0078 1.08097 17.5302 0.65901C18.0526 0.237053 18.7612 0 19.5 0C20.2388 0 20.9474 0.237053 21.4698 0.65901C21.9922 1.08097 22.2857 1.65326 22.2857 2.25V4.689Z" fill="black"/>
                    </svg>
                  </span>
                </Link>
              </li>

              <li className={`[transform:translateX(-50%)]
              w-[120px] h-[106px] absolute left-1/2 -translate-x-1/2 bottom-[356px] ${visible && !controlAnimation ?
              'motion-translate-y-in-[150%] motion-opacity-in-[15%]'
              :
              'motion-translate-y-out-[150%] motion-opacity-out-[0%] motion-duration-[0.30s]/opacity motion-duration-[0.50s]'
              }`}>
                <h2 className="font-offbit text-base w-full h-[18px] justify-center items-center flex text-white tracking-wider">{props.titleStore}</h2>
                <Link className="size-20 rounded-full border-[3px] border-gray-400 absolute left-1/2 -translate-x-1/2 bottom-0" to='/store'>
                  <span className="w-[68px] h-[68px] rounded-full bg-white absolute left-1/2 -translate-x-1/2 mt-[3px]">
                    <svg className="w-[27px] h-[31px] left-1/2 top-[19px] -translate-x-1/2 absolute" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.6239 0C21.1481 4.4779e-05 27 6.93961 27 15.5C27 19.5325 25.8742 23.7219 23.6558 26.4791C21.165 29.575 17.6038 31 13.6239 31C9.64406 31 6.08262 29.575 3.59174 26.4791C1.37344 23.7219 7.62806e-08 19.5325 0 15.5C0 6.93959 6.09968 0 13.6239 0ZM13.5272 9.01818C11.7966 9.0182 9.98941 9.67978 8.94454 11.0437C8.08967 12.1598 7.83 13.813 7.83 15.3987C7.83 15.4325 7.83059 15.4661 7.83105 15.4997C7.83058 15.5335 7.83 15.5674 7.83 15.6013C7.83 17.187 8.08989 18.8402 8.9448 19.9562C9.98968 21.3201 11.7967 21.9818 13.5272 21.9818C15.2577 21.9818 17.0649 21.3202 18.1098 19.9562C18.9647 18.8402 19.2246 17.187 19.2246 15.6013C19.2246 15.5674 19.2237 15.5335 19.2233 15.4997C19.2237 15.4661 19.2246 15.4325 19.2246 15.3987C19.2246 13.813 18.9647 12.1598 18.1098 11.0437C17.0649 9.67976 15.2577 9.01818 13.5272 9.01818Z"/>
                    <path d="M25.11 15.5C25.11 7.87631 19.9924 2.0642 13.7711 1.97383L13.6239 1.97273C7.29351 1.97273 1.89 7.86563 1.89 15.5C1.89 19.126 3.14028 22.8503 5.03903 25.2103L5.13659 25.3298C7.19704 27.8152 10.1439 29.0273 13.6239 29.0273V31C9.64406 31 6.08262 29.575 3.59174 26.4791C1.37344 23.7219 7.62806e-08 19.5325 0 15.5C0 6.93959 6.09968 0 13.6239 0C21.1481 4.4779e-05 27 6.93961 27 15.5C27 19.5325 25.8742 23.7219 23.6558 26.4791C21.165 29.575 17.6038 31 13.6239 31V29.0273C17.1592 29.0273 20.1441 27.7763 22.2086 25.2103L22.2948 25.1016C24.035 22.868 25.0445 19.3918 25.1068 15.8487L25.11 15.5ZM19.2246 15.3987C19.2246 13.813 18.9647 12.1598 18.1098 11.0437C17.0649 9.67976 15.2577 9.01818 13.5272 9.01818C11.7966 9.0182 9.98941 9.67978 8.94454 11.0437C8.08967 12.1598 7.83 13.813 7.83 15.3987C7.83 15.4325 7.83059 15.4661 7.83105 15.4997C7.83058 15.5335 7.83 15.5674 7.83 15.6013C7.83 17.187 8.08989 18.8402 8.9448 19.9562C9.98968 21.3201 11.7967 21.9818 13.5272 21.9818C15.2577 21.9818 17.0649 21.3202 18.1098 19.9562C18.9647 18.8402 19.2246 17.187 19.2246 15.6013C19.2246 15.5674 19.2237 15.5335 19.2233 15.4997C19.2237 15.4661 19.2246 15.4325 19.2246 15.3987ZM21.1133 15.4997L21.1146 15.6013C21.1146 17.2534 20.8707 19.3932 19.7018 21.0312L19.5858 21.1881C18.0763 23.1585 15.6377 23.9545 13.5272 23.9545C11.4167 23.9545 8.97822 23.1586 7.46877 21.1884C6.27921 19.6355 5.97635 17.5826 5.94316 15.9269L5.94 15.6013C5.94 15.5646 5.94041 15.5271 5.94079 15.4997L5.94 15.3987C5.94 13.6936 6.19943 11.4684 7.46824 9.8119L7.53996 9.72025C9.05417 7.81663 11.4497 7.04548 13.5272 7.04545L13.726 7.04793C15.7892 7.09648 18.1235 7.90297 19.5858 9.8119L19.7018 9.96877C20.8707 11.6068 21.1146 13.7465 21.1146 15.3987L21.1133 15.4997Z"/>
                    <path d="M11.34 13.3862C11.34 12.2189 12.2466 11.2726 13.365 11.2726C14.4834 11.2726 15.39 12.2189 15.39 13.3862V17.6135C15.39 18.7808 14.4834 19.7271 13.365 19.7271C12.2466 19.7271 11.34 18.7808 11.34 17.6135V13.3862Z"/>
                    <path d="M15.12 17.6135V13.3862C15.12 12.3745 14.3343 11.5544 13.365 11.5544C12.3957 11.5544 11.61 12.3745 11.61 13.3862V17.6135C11.61 18.6252 12.3957 19.4453 13.365 19.4453V19.7271C12.2466 19.7271 11.34 18.7808 11.34 17.6135V13.3862C11.34 12.2189 12.2466 11.2726 13.365 11.2726C14.4834 11.2726 15.39 12.2189 15.39 13.3862V17.6135C15.39 18.7808 14.4834 19.7271 13.365 19.7271V19.4453C14.3343 19.4453 15.12 18.6252 15.12 17.6135Z"/>
                    <path d="M13.5272 9.01818C15.2577 9.01818 17.0649 9.67976 18.1098 11.0437C18.4818 11.5294 18.7412 12.1171 18.9154 12.7564H8.13916C8.31342 12.1171 8.57251 11.5294 8.94454 11.0437C9.98941 9.67978 11.7966 9.0182 13.5272 9.01818Z"/>
                    <path d="M13.7157 7.61118C15.6695 7.65734 17.8305 8.42275 19.1642 10.1638L19.2581 10.2901C19.7164 10.9278 20.0174 11.6495 20.2139 12.3704L20.703 14.1651H6.35131L6.84043 12.3704L6.88129 12.2262C7.09196 11.5056 7.41051 10.7899 7.8901 10.1638L8.02167 9.9981C9.40771 8.31974 11.5878 7.60898 13.5271 7.60898L13.7157 7.61118ZM13.5272 9.01818C11.7966 9.0182 9.98941 9.67978 8.94454 11.0437C8.57251 11.5294 8.31342 12.1171 8.13916 12.7564H18.9154C18.7412 12.1171 18.4818 11.5294 18.1098 11.0437C17.0649 9.67976 15.2577 9.01818 13.5272 9.01818Z"/>
                    </svg>
                  </span>
                </Link>
              </li>

              <li className="w-[112px] h-[112px] rounded-full absolute left-2/4 -translate-x-1/2 bottom-[72px]" 
              id="close"
              onClick={controlMenu}
              ></li>

            </ul>}
          
            <div className="size-20 absolute left-2/4 -translate-x-1/2 bottom-16 z-98">
              <span className={`size-1 absolute rounded-full left-0.5 bottom-[38px] z-101 ${visible ? 'bg-black opacity-90' : 'bg-cardmon-gray'}`}></span>
              <span className={`w-[48px] h-[12px] rounded-full absolute left-4 bottom-[34px] duration-[400ms] ease-in-in ${visible ? 'rotate-[160deg] bg-cardmon-orage' : 'rotate-0 bg-white'}`} 
              id="rotate">
                <span className={`size-1 rounded-full absolute left-[3px] bottom-[4px] duration-300 
                ${visible ? 'bg-black opacity-90' : 'bg-cardmon-gray'}`}>
                </span>
              </span>
              <span className="w-[56px] h-[56px] absolute rounded-full border-2 border-white left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"></span>
              <a className={`size-20 rounded-full border-[8px] absolute z-100 ${visible ? 'border-cardmon-orage' : 'border-white' }`} 
              id="open"
              onClick={controlMenu}></a>
            </div>

          {visible && <div className="fixed left-0 top-0 size-full bg-black opacity-90" id="menu-bg"></div>}

        </div>
        
        <span className="absolute size-20 bg-cardmon-gray rounded-full left-2/4 -translate-x-1/2 bottom-[64px] "></span>
        <div className="w-full h-[104px] bg-cardmon-light-gray absolute left-0 bottom-0 rounded-t-xl z-96 
        [mask-image:radial-gradient(circle_at_50%_calc(50%_-50px),_transparent_64px,_white_65px)] "></div>
      </div>

    );
  }


