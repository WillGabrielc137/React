import { useState, useMemo } from 'react';
import './App.css';

export default function Calculadora() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operacao, setOperacao] = useState("+");

  const resultado = useMemo(() => {
    switch (operacao) {
      case "+":
        return num1 + num2;
      
      case "-":
        return num1 - num2;
      
      case "*":
        return num1 * num2;
      
      case "/":
        return num2 !== 0 ? num1 / num2 : "Erro (Divisão por 0 não existe)";    
      default: 
        return 0;
    }
  }, [num1, num2, operacao]);

  return (
    <div className="calculadora-box">
      <h2 className="text-lg font-bold mb-2 text-center">Calculadora Simples</h2>

      <div className="flex gap-4 justify-center mb-4">
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(Number(e.target.value))}
          className="p-3 border rounded w-24 text-center"
        />
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(Number(e.target.value))}
          className="p-3 border rounded w-24 text-center"
        />
      </div>

      <div className="flex justify-center gap-4 mb-4">
        {["+", "-", "*", "/"].map((op) => (
          <button
            key={op}
            onClick={() => setOperacao(op)}
            className={`px-4 py-2 rounded-lg text-lg ${operacao === op ? "bg-blue-500 text-white" : "bg-gray-300"}`}
          >
            {op}
          </button>
        ))}
      </div>

      <div className="text-lg font-semibold text-center">
        Resultado: <span className="text-blue-600">{resultado}</span>
      </div>
    </div>
  );
}
