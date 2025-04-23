import { useState, useEffect } from 'react'
import './App.css'

export default function AmiiboList() {
  const [amiibos, setAmiibos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://www.amiiboapi.com/api/amiibo/")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro ao buscar dados");
        }
        return response.json();
      })
      .then((data) => {
        setAmiibos(data.amiibo);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center text-xl">Carregando...</p>;
  if (error) return <p className="text-center text-red-500">Erro: {error}</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Lista de Amiibos</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {amiibos.slice(0, 12).map((amiibo) => (
          <div key={amiibo.tail} className="border p-2 rounded-lg shadow">
            <img src={amiibo.image} alt={amiibo.name} className="w-full" />
            <p className="text-center font-semibold">{amiibo.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
