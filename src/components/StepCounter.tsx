import { useEffect, useRef, useState } from "react";

interface StepCounterProps {
  steps: number;
  setSteps: (value: number | ((prev: number) => number)) => void;
    coins: number;
    setCoins: (value: number | ((prev: number) => number)) => void;
}

export default function StepCounter(props: StepCounterProps) {

  const [permisoSolicitado, setPermisoSolicitado] = useState(false);
  const [lastRewardStep, setLastRewardStep] = useState(0);

  const THRESHOLD = 12; //numero mas alto para que sea mas fuerte el movimiento
  // Puedes ajustar este valor según la sensibilidad
  const STEP_INTERVAL = 400; //tiempo en milisegundos entre pasos detectados
  // Puedes ajustar este valor según la frecuencia de pasos esperada

  const lastStepTimeRef = useRef(Date.now()); //guarda el tiempo del último paso detectado para compararlo con el tiempo actual y evitar contar pasos muy seguidos.

  //manejar el movimiento
  const handleMotion = (event: DeviceMotionEvent) => {
    //funcion que tiene el manejo del cel para detectar el movimiento
    const acceleration = event.accelerationIncludingGravity;
    if (!acceleration) return;

    const magnitude = Math.sqrt(
      Math.pow(acceleration.x ?? 0, 2) +
        Math.pow(acceleration.y ?? 0, 2) +
        Math.pow(acceleration.z ?? 0, 2)
    );

    const now = Date.now();

    if (
      magnitude > THRESHOLD &&
      now - lastStepTimeRef.current > STEP_INTERVAL
    ) {
      props.setSteps((prev) => prev + 1);
      lastStepTimeRef.current = now;
    }
  };

  //useeffec

  useEffect(() => {
    if (props.steps > 0 && props.steps % 1000 === 0 && props.steps !== lastRewardStep) {
      props.setCoins((prev) => prev + 1);
      setLastRewardStep(props.steps);
    }
  }, [props.steps, lastRewardStep]);

  const solicitarPermiso = () => {
    // funcion que solicita el permiso para el acelerometro en los dispositivos moviles
    if (
      typeof DeviceMotionEvent !== "undefined" &&
      "requestPermission" in DeviceMotionEvent
    ) {
      (DeviceMotionEvent as any)
        .requestPermission()
        .then((response: string) => {
          if (response === "granted") {
            window.addEventListener("devicemotion", handleMotion);
            setPermisoSolicitado(true);
          } else {
            alert("Permiso denegado para el acelerómetro.");
          }
        })
        .catch((error: any) => {
          console.error("Error solicitando permiso:", error);
        });
    } else {
      window.addEventListener("devicemotion", handleMotion);
      setPermisoSolicitado(true);
    }
  };

  useEffect(() => {
    solicitarPermiso();

    return () => {
      window.removeEventListener("devicemotion", handleMotion);
    };
  }, []);

  const progressToNextCoin = props.steps % 1000;
  const progressPercentage = (progressToNextCoin / 1000) * 100;

  return (
    <div className="bg-black border-4 border-cardmon-orage rounded-lg p-6 font-offbit text-white mt-5 mx-4">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-sm tracking-wider">DAILY GOAL</h2>
        <h2 className="text-sm tracking-wider">REWARD</h2>
      </div>

      <div className="flex justify-between items-center mb-2">
        <h2 className="text-2xl font-bold">
          {props.steps}/<span className="text-lg opacity-70">10000 STEPS</span>
        </h2>

        <div className="flex items-center gap-1">
          <span className="w-4 h-4 bg-cardmon-orage rounded-full border border-white"></span>
          <span className="text-lg font-bold">+10</span>
        </div>
      </div>

      {/* Barra de progreso */}
      <div className="flex items-center gap-2 mt-3">
        <div className="flex-1 h-3 bg-white">
          <div
            className="h-full bg-cardmon-orage transition-all duration-300"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
        <span className="text-sm text-white font-bold w-10 text-right">
          {Math.floor(progressPercentage)}%
        </span>
      </div>

      {!permisoSolicitado && (
        <button
          onClick={solicitarPermiso}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Solicitar Permiso
        </button>
      )}
    </div>
  );
} //end function StepCounter
