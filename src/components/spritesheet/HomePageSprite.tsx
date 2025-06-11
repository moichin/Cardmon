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
    const interval = setInterval(() => {
      setCurrentFrame((prev) => (prev + 1) % frameCount);
    }, 
    1000 / fps);

    return () => clearInterval(interval);
  }, [frameCount, fps]);

  const backgroundPosition = `-${currentFrame * frameWidth}px 0`;

  return (
    <div
      className="bg-no-repeat scale-600 absolute flex ml-1 top-[195px] left-1/2 -translate-x-1/2 -translate-y-1/2"
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
