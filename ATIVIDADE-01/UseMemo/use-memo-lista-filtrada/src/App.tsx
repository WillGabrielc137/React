import { useState, useMemo } from 'react'

import './App.css'

export default function ListaFiltrada() {
  const [filtro, setFiltro] = useState("");
  const lista = ["F-39 GRIPEN",
                "F-14 - TOMCAT",
                "DASSAULT RAFALE",
                "EUROFIGHTER TYPHOON",
                "SUKHOI SU-57"
              ];

  const listaFiltrada = useMemo(() => {
    return lista.filter((item) =>
      item.toLowerCase().includes(filtro.toLowerCase())
    );
  }, [filtro, lista]);

  return (
    <div className="p-4 max-w-md mx-auto">
      <input
        type="text"
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
        placeholder="Filtro"
        className="p-2 border rounded w-full"
      />
      <ul className="mt-4 border p-2 rounded">
        {listaFiltrada.map((item, index) => (
          <li key={index} className="p-1 border-b last:border-0">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}