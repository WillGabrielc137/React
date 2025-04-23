import { useState, useEffect } from 'react'

import './App.css'

export default function Timer() {
  const [time, setTime] = useState(10);

  useEffect(() => {
    if (time <= 0) return;
    
    const timer = setInterval(() => {
      setTime((preveTime) => preveTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [time]);
  
  return (
    <div className="text-center p-4">
      <h1 className="text-2x1 font-bold">Timer: {time}</h1>
    </div>
  );
}