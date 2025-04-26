import { useState } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import './index.css';
import Tailwind from './routes/Tailwind';
import Styled from './routes/Styled';

interface HomeProps {
  usuario: string;
  setUsuario: React.Dispatch<React.SetStateAction<string>>;
}

function Home({ usuario, setUsuario }: HomeProps) {
  return (
    <div className='card'>
      <h2 className='titulo'> Buscar Usuário do GitHub </h2>
      <div className='elementos-card'>
        <input className='input'
          placeholder='Informe o nome do usuário do GitHub'
          type='text'
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />

        <Link to="/Tailwind">
          <button className='botao-tailwind'>
            Rota em Tailwind
          </button>
        </Link>

        <Link to="/Styled">
          <button className='botao-Styled'>
            Rota em Styled-Components
          </button>
        </Link>

      </div>
    </div>
  )
}

function App() {
  const [usuario, setUsuario] = useState<string>("");

  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home usuario={usuario} setUsuario={setUsuario} />} />
        <Route path='/Tailwind' element={<Tailwind usuario={usuario} />} />
        <Route path='/Styled' element={<Styled usuario={usuario}/>} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
