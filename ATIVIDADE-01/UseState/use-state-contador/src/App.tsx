import { useState } from 'react'
import './App.css'

export default function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <h1>
        Contador
      </h1>

      <p>
        valor: {contador}
      </p>

      <div>
        <button onClick={() => setContador(contador + 1)}>
          incrementar
        </button>
        <button onClick={() => setContador(contador - 1)}>
          decrementar
        </button>
      </div>
    </div>
  );
}