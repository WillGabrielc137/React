import { useState, useRef, useEffect } from 'react'
import './App.css'

export default function Formulario() {
  const nomeRef = useRef<HTMLInputElement>(null);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (nomeRef.current) {
      nomeRef.current.focus();
    }
  },[]);

  return (
    <div className="p-4 max-w-sm mx-auto border rounded shadow">
      <h2 className="text-1g font-bold mb-3">Cadastro</h2>

      <div className="mb-2">
        <label className="block font-medium">Nome:</label>
        <input
          ref={nomeRef}
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="p-2 border rounded w-full"
        />
      </div>

      <div className="mb-2">
        <label className="block font-medium">E-mail:</label>     
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 border rounded w-full"
        />
      </div>

      <button className="mt-3 px-4 py-2 bg-blue-500 text-white rounded">
        Enviar
      </button>
    </div>
  );
}