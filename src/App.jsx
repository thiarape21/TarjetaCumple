import React, { useRef, useState } from "react";
import "./App.css";

// Importar los componentes
import Gallery from './Gallery';
import Countdown from './Countdown';

const App = () => {
  const audioRef = useRef(null); // Crear la referencia para el audio
  const [isPlaying, setIsPlaying] = useState(false); // Estado para controlar si la música está reproduciéndose

  const openLocation = () => {
    window.open("https://goo.su/83FW5VN", "_blank");
  };

  // Función para alternar play/pause
  const handlePlayPauseMusic = () => {
    if (isPlaying) {
      audioRef.current.pause(); // Pausar la música
    } else {
      audioRef.current.play(); // Reproducir la música
    }
    setIsPlaying(!isPlaying); // Alternar el estado
  };

  return (
    <div className="invitation-container">
      {/* Agregar el audio pero no con autoplay, solo cuando se haga clic */}
      <audio ref={audioRef} loop>
        <source src="/musica/musica.mp3" type="audio/mp3" />
        Tu navegador no soporta el elemento de audio.
      </audio>

      <div className="content"><br /><br />
        <button 
        onClick={handlePlayPauseMusic} 
        className="music-button"
        >
          {isPlaying ? "Pausar Música" : "Reproducir Música"}
          </button>
        <div className="header"><br />
          <h1 className="title">Estás Invitado</h1>
          <p className="subtitle">a celebrar los 70 años de </p><br />
          <h1 className="name">Yolanda</h1><br /><br />
        </div>
        <div className="details">
          {/* Usamos los componentes importados */}
          <Gallery />
          <h1>___________________</h1>
          <h2>Cuenta regresiva:</h2>
          <Countdown />
        
          <h1>___________________</h1>
          <h2>Detalles del Evento</h2>
          <p>
            📅 <strong>Fecha:</strong> 12 de Febrero <br /> <br />
            🕒 <strong>Hora:</strong> 3:30 PM<br /><br />
            🎩 <strong>Vestimenta:</strong> Formal<br /><br />
            📍 <strong>Ubicación:</strong>{" "}<br /><br />
            <button onClick={openLocation}>Ver Ubicación</button>
          </p>
          <h1>___________________</h1>
          <h2>Presentes</h2>
          🎁🍷
          <p>
            <strong>Tu compañia siempre es lo más importante</strong> pero agradecería
            mucho si en este día tan especial me obsequias alguna de estas botellas de vino:<br />
          </p>
          <div className="wines">
            <div className="wine"><br />
              <img src="/images/vino1.jpg" alt="Vino 1" />
              <p>Vino 1</p>
            </div>
            <div className="wine"><br />
              <img src="/images/vino2.jpg" alt="Vino 2" />
              <p>Vino 2</p>
            </div>
          </div>
          <h1>___________________</h1>
          <h2>Confirma tu asistencia</h2>
          <p>Confirma tu asistencia al (123) 456-7890</p>

  
        </div>
      
        <div className="footer">
        
        </div>
      </div>
    </div>
  );
};

export default App;
