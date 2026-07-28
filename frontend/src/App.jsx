import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const disparar = () => {
    alert("Lampejo funcionando no React!");
  };

  const iniciarLampejo = () => {
    window.location.href = '/Lampejo_index.html';
  };

  return (
    <>
    <button 
        id="play-button" 
        onClick={iniciarLampejo} 
        style={{ cursor: 'pointer', border: 'none', background: 'transparent' }}
      >
        <img 
          src="/images/play_branco.jpg" 
          alt="Botão Play" 
          width="200" 
          height="200" 
        />
      </button>
    </>
  )
}

export default App
