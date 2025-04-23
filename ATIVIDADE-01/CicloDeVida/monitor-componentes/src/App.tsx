import { useState, useEffect } from "react";
import './App.css'

function ComponenteMonitorado() {
  useEffect(() => {
    console.log("Componente montado");

    return () => {
      console.log("Componente desmontado");
    };
  }, []);

  return (
    <div className="p-4 border rounded shadow text-center">
      <h2 className="text-lg font-bold">Componente Ativo</h2>
      <p>Veja os logs no console</p>
    </div>
  );
}

export default function Monitor() {
  const [visivel, setVisivel] = useState(false);

  return (
    <div className="p-4 max-w-sm mx-auto text-center">
      <h2 className="text-lg font-bold mb-3">Monitor de Componentes</h2>

      <button
        onClick={() => setVisivel((prev) => !prev)}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        {visivel ? "Desmontar" : "Montar"} Componente
      </button>

      <div className="mt-4">{visivel && <ComponenteMonitorado />}</div>
    </div>
  );
}