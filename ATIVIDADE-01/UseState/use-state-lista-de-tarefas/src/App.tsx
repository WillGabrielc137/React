import { useState } from 'react'
import './App.css'

export default function ListaDeTarefas() {
  const [tarefa, setTarefas] = useState<String[]>([]);

  const [novaTarefa, setNovaTarefa] = useState("");

  const adicionarTarefa = () => {
    if (novaTarefa.trim() === "") return;
    setTarefas([...tarefa, novaTarefa]);
    setNovaTarefa("");
  };
  
  return (
    <div className="flex flex-col items-center space-y-4 p-4">
      <h1 className="text-2x1 font-bold">Lista de Tarefas</h1>
      <div className="flex space-x-2">
        <input
        type="text"
        className="border p-2 rounded-md"
        value={novaTarefa}
        onChange={(e) => setNovaTarefa(e.target.value)}
        placeholder="Digite uma tarefa: "
        ></input>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        onClick={adicionarTarefa}
        >
          Adicionar
        </button>
      </div>
      <ul className="list-disc">
        {tarefa.map((tarefa, index) => (
          <li key={index} className="text-lg">{tarefa}</li>
        ))}
      </ul>
    </div>
  );
}