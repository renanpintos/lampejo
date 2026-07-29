import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const disparar = () => {
    alert("Lampejo funcionando no React!");
  };

  const iniciarLampejo = (version) => {
    window.location.href = `${import.meta.env.BASE_URL}Lampejo_index.html?version=${version}`;
  };

  return (
    <>
    <div className="header">
      <h1>Lampejo Web</h1>
    </div>

    <div className="card">
    <button id="play-button1" className="play-button" onClick={() => iniciarLampejo('1')}>
      <img src={`${import.meta.env.BASE_URL}images/play_branco.jpg`} alt="Play Lampejo 01"/>
      Play Lampejo 01
    </button>

    <button id="play-button2" className="play-button" onClick={() => iniciarLampejo('2')}>
      <img src={`${import.meta.env.BASE_URL}images/play_branco.jpg`} alt="Play Lampejo 02"/>
      Play Lampejo 02
    </button>

    <button id="play-button3" className="play-button" onClick={() => iniciarLampejo('3')}>
      <img src={`${import.meta.env.BASE_URL}images/play_branco.jpg`} alt="Play Lampejo 03"/>
      Play Lampejo 03
    </button>

    <button id="play-button4" className="play-button" onClick={() => iniciarLampejo('4')}>
      <img src={`${import.meta.env.BASE_URL}images/play_branco.jpg`} alt="Play Lampejo 04"/>
      Play Lampejo 04
    </button>

    <button id="play-button5" className="play-button" onClick={() => iniciarLampejo('5')}>
      <img src={`${import.meta.env.BASE_URL}images/play_branco.jpg`} alt="Play Lampejo 05"/>
      Play Lampejo 05
    </button>

    <button id="play-button6" className="play-button" onClick={() => iniciarLampejo('6')}>
      <img src={`${import.meta.env.BASE_URL}images/play_branco.jpg`} alt="Play Lampejo 06"/>
      Play Lampejo 06
    </button>

    </div>
    </>
  )
}

export default App
