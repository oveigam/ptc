"use client";

import { useEffect, useState } from "react";
import { LoadingIndicator } from "./LoadingIndicator";

function getFrase(t: number) {
  switch (t) {
    case 0:
    case 10:
    case 20:
      return "Procesando datos";
    case 30:
    case 40:
    case 50:
    case 60:
      return "Generando Pirivi Time";

    default:
      return "Analizando respuesta";
  }
}

export const Progress = () => {
  const [w, setW] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setW((prev) => prev + 10);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <div className="flex items-center gap-1">
        <LoadingIndicator />
        <p className="text-sm font-semibold">{getFrase(w)}</p>
      </div>
      <div className="h-2.5 w-56 rounded-full bg-gray-200 dark:bg-gray-700">
        <div className="h-2.5 rounded-full bg-pink-400" style={{ width: `${w}%` }}></div>
      </div>
    </div>
  );
};
