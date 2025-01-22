import React from 'react';
import About from './About';
import Gallery from './Gallery';
import Pricing from './Pricing';
import Contact from './Contact';

export default function Main() {
  return (
    <div>
      <main className="main-container container">
        <div className="main-content">
          <h2>CENTRO DE FITNESS Y GIMNASIO</h2>
          <h1>LIBERA LA BESTIA<br />QUE LLEVAS DENTRO</h1>
          <p>
            En nuestro centro de fitness y gimnasio, te ofrecemos un ambiente motivador y profesional para que logres tus objetivos de entrenamiento. Contamos con equipos de última tecnología, entrenadores altamente capacitados y una variedad de clases para todos los niveles. Ya sea que busques mejorar tu fuerza, resistencia o simplemente mantenerte activo, tenemos todo lo que necesitas para alcanzar tu mejor versión. ¡Únete hoy y empieza tu viaje hacia un tú más fuerte y saludable!
          </p>
          <button className="btn-warning-custom">Comenzar</button>
        </div>
        <div className="main-image">
          <img src="/banner.jpeg" alt="Imagen del gimnasio" className="logo-image" />
          
        </div>
      </main>
      <About></About>
      <Gallery></Gallery>
      <Pricing></Pricing>
      <Contact></Contact>
    </div>
  );
}
