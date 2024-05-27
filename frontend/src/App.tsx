import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing } from './screens/Landing';
import { Game } from './screens/Game';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='h-screen bg-slate-900'>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} /> 
        <Route path="/game" element={<Game  />} /> 
      </Routes>
    </BrowserRouter>
    </div>
    </>
  )
}

export default App
