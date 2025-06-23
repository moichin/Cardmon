import { useEffect, useState } from "react";

interface MainPageSpriteProps {
  frameCount: number;         
  frameWidth: number;       
  frameHeight: number;        
  imageUrl: string;          
  fps?: number;               
}

export default function HomePageSprite(props: MainPageSpriteProps){

  let frameCount = props.frameCount
  let frameWidth = props.frameWidth
  let frameHeight = props.frameHeight
  let imageUrl = props.imageUrl
  let fps = props.fps || 2
  
  const [currentFrame, setCurrentFrame] = useState(0);

  useEffect(() => {
    if (currentFrame >= frameCount - 0) return; // Detener si ya está en el último frame


    const interval = setInterval(() => {
       setCurrentFrame((prev) => {
        if (prev >= frameCount - 0) {
          clearInterval(interval); // Detener el intervalo
          return prev;
        }
        return prev + 1;
      });
    }, 1000 / fps);

    return () => clearInterval(interval);
  }, [currentFrame,frameCount, fps]);

  const backgroundPosition = `-${currentFrame * frameWidth}px 0`;

  return (
    <div
      className="bg-no-repeat scale-300 absolute flex top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      style={{
        width: `${frameWidth}px`,
        height: `${frameHeight}px`,
        backgroundImage: `url(${imageUrl})`,
        backgroundPosition,
        imageRendering: "pixelated",
      }}
    />
  );
};
