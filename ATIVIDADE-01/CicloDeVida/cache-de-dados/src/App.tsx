import React, { useState, useEffect } from 'react';
import './App.css'

export default function DataFetcher() {
  const [data, setData] = useState(null);

  useEffect(() => {
    console.log('Componente montado');

    const cachedData = localStorage.getItem('cachedData');
    if (cachedData) {
      console.log('Dados carregados do cache');
      setData(JSON.parse(cachedData));
    } else {
      fetchData();
    }

    return () => {
      console.log('Componente desmontado');
    };
  }, []);

  const fetchData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((jsonData) => {
        console.log('Dados carregados da API');
        setData(jsonData);
      })
      .catch((error) => console.error('Erro ao buscar dados:', error));
  };

  const saveToCache = () => {
    if (data) {
      localStorage.setItem('cachedData', JSON.stringify(data));
      console.log('Dados salvos no cache');
    }
  };

  const clearCache = () => {
    localStorage.removeItem('cachedData');
    console.log('❌ Cache limpo');
  };

  return (
    <div>
      <h1>Dados da API</h1>
      <button onClick={saveToCache}>Salvar no Cache</button>
      <button onClick={clearCache}>Limpar Cache</button>
      {data ? (
        <ul>
          {data.slice(0, 10).map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      ) : (
        <p>Carregando</p>
      )}
    </div>
  );
}