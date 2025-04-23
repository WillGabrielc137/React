import { useState, useRef } from "react";
import './App.css'

export default function Timer() {
  const [tempo, setTempo] = useState(0);
  const [ativo, setAtivo] = useState(false);
  const intervaloRef = useRef<NodeJS.Timeout | null>(null);

  const iniciarTimer = () => {
    if (!ativo) {
      intervaloRef.current = setInterval(() => {
        setTempo((prev) => prev + 1);
      }, 1000);
      setAtivo(true);
    }
  };

  const pausarTimer = () => {
    if (intervaloRef.current) {
      clearInterval(intervaloRef.current);
      intervaloRef.current = null;
      setAtivo(false);
    }
  };

  return (
    <div className="p-4 max-w-sm mx-auto border rounded shadow text-center">
      <h2 className="text-lg font-bold mb-3">Timer</h2>
      <p className="text-2xl font-semibold">{tempo}s</p>

      <div className="flex justify-center gap-3 mt-4">
        <button
          onClick={ativo ? pausarTimer : iniciarTimer}
          className={`px-4 py-2 rounded ${ativo ? "bg-yellow-500" : "bg-green-500"} text-white`}
        >
          {ativo ? "Pausar" : "Retomar"}
        </button>

        <button
          onClick={() => {
            pausarTimer();
            setTempo(0);
          }}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          Resetar
        </button>
      </div>
    </div>
  );
}