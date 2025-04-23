import React, { useState, useEffect, useRef, useMemo } from 'react';

import './App.css'

function Header({ onToggleTheme }) {
  return (
    <header className="header">
      <button onClick={onToggleTheme}>Alternar Tema</button>
    </header>
  );
}

function NavMenu({ items }) {
  const [search, setSearch] = useState('');
  const inputRef = useRef(null);

  const filteredItems = useMemo(() => {
    return items.filter((item) =>
      item.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, items]);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <nav>
      <input
        ref={inputRef}
        type="text"
        placeholder="Buscar..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </nav>
  );
}

export default function App() {
  const [theme, setTheme] = useState('light');
  const [menuItems, setMenuItems] = useState([]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    setTimeout(() => {
      setMenuItems(['Início', 'Sobre', 'Serviços', 'Contato']);
    }, 1000);
  }, []);

  return (
    <div className={`app ${theme}`}>
      <Header onToggleTheme={toggleTheme} />
      <NavMenu items={menuItems} />
    </div>
  );
}