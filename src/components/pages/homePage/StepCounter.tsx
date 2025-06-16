import { useEffect, useRef } from "react";

interface StepCounterProps {
  steps: number;
  setSteps: (value: number | ((prev: number) => number)) => void;
  coins: number;
  setCoins: (value: number | ((prev: number) => number)) => void;
}

export default function StepCounter(props: StepCounterProps) {
  const lastStepTimeRef = useRef(Date.now());
  const lastRewardStepRef = useRef(0);

  const THRESHOLD = 12;
  const STEP_INTERVAL = 400;

  const handleMotion = (event: DeviceMotionEvent) => {
    const acceleration = event.accelerationIncludingGravity;
    if (!acceleration) return;

    const magnitude = Math.sqrt(
      (acceleration.x ?? 0) ** 2 +
      (acceleration.y ?? 0) ** 2 +
      (acceleration.z ?? 0) ** 2
    );

    const now = Date.now();

    if (magnitude > THRESHOLD && now - lastStepTimeRef.current > STEP_INTERVAL) {
      props.setSteps(prev => {
        const newSteps = prev + 1;

        if (newSteps % 10 === 0 && newSteps !== lastRewardStepRef.current) {
          props.setCoins(c => c + 1);
          lastRewardStepRef.current = newSteps;
        }

        return newSteps;
      });

      lastStepTimeRef.current = now;
    }
  };

  const solicitarPermiso = () => {
    if (typeof DeviceMotionEvent !== "undefined" && "requestPermission" in DeviceMotionEvent) {
      (DeviceMotionEvent as any).requestPermission()
        .then((response: string) => {
          if (response === "granted") {
            window.addEventListener("devicemotion", handleMotion);
          }
        })
        .catch(console.error);
    } else {
      window.addEventListener("devicemotion", handleMotion);
    }
  };

  useEffect(() => {
    solicitarPermiso();
    return () => {
      window.removeEventListener("devicemotion", handleMotion);
    };
  }, []);

  return null;
}
