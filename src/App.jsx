import React, { useRef, useState } from "react";
import "./App.css";
import Gallery from './Gallery';
import Countdown from './Countdown';

const App = () => {
  const audioRef = useRef(null); 
  const [isPlaying, setIsPlaying] = useState(false); 

  const openLocation = () => {
    window.open("https://maps.app.goo.gl/3SLjnHiGfhhhTM9J9", "_blank");
  };

  const handlePlayPauseMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play(); 
    }
    setIsPlaying(!isPlaying); 
  };

  return (
    <div className="invitation-container">
      <audio ref={audioRef} loop>
        <source src="/musica/musica.mp3" type="audio/mp3" />
        Tu navegador no soporta el elemento de audio.
      </audio>

      <div className="content">
        <br /><br />
        <button 
          onClick={handlePlayPauseMusic} 
          className="music-button"
        >
          {isPlaying ? "Pausar Música" : "Reproducir Música"}
        </button>
        <div className="header">
          <br />
          <h1 className="title">Estás Invitado</h1>
          <p className="subtitle">a celebrar los 70 años de </p><br />
          <h1 className="name">Yolanda</h1><br /><br />
        </div>

        <div className="details">
          <Gallery />
          <h1>_________</h1>
          <h2>Cuenta regresiva:</h2>
          <Countdown />
        
          <h1>_________</h1>
          <h2>Detalles del Evento</h2>
          <p>
            📅 <strong>Fecha:</strong> 2 de Febrero <br /> <br />
            🕒 <strong>Hora:</strong> 3:30 PM<br /><br />
            🎩 <strong>Vestimenta:</strong> Formal<br /><br />
            📍 <strong>Ubicación:</strong> <br /><br />
            <button onClick={openLocation}>Ver Ubicación</button>
          </p>

          <h1>_________</h1>
          <h2>Presentes</h2>
          🎁🍷
          <p>
            <strong>Tu compañía siempre es lo más importante</strong> pero agradecería
            mucho si en este día tan especial me obsequias alguna de estas botellas:<br />
          </p>

          <div className="wines">
            <div className="wine">
              <br />
              <img src="/images/vino1.png" alt="Old Parr" />
              <p>Old Parr</p>
            </div>
            <div className="wine">
              <br />
              <img src="/images/vino2.png" alt=" Black Label" />
              <p>Black Label</p>
            </div>
            <div className="wine">
              <br />
              <img src="/images/vino3.png" alt="Marqués de Cáceres" />
              <p>Marqués de Cáceres</p>
            </div>
          </div>

          <h1>_________</h1>
          <h2>Confirma tu asistencia</h2>
          <p>Confirma tu asistencia al (506) 7102-7304</p>
          <p>Thiara Espinoza</p>
        </div>
      </div>
    </div>
  );
};

export default App;
