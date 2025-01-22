import React from 'react'
import { useNavigate } from 'react-router-dom'


export default function About() {
  const navigate = useNavigate();
  const contacto = () =>{
    navigate('/contact')
  }

  return (
    <div className="fitness-container">
      <h1 className="fitness-title">
        PRACTICA EL FITNESS DE MANERA ADECUADA Y CORRECTA
      </h1>
      <div className="fitness-content">
        <div className="fitness-image-container">
          <img
            src="/about2.png"
            alt="Equipamiento de gimnasio"
            width={600}
            height={400}
            className="fitness-main-image"
          />
        </div>
        <div className="fitness-text-container">
          <img
            src="/about.png"
            alt="Hombre en el gimnasio"
            width={400}
            height={300}
            className="fitness-secondary-image"
          />
          <p className="fitness-description">
            En nuestro gimnasio, nos dedicamos a ofrecerte las mejores prácticas y técnicas para que puedas alcanzar tus objetivos de fitness de manera efectiva. Contamos con entrenadores expertos y equipos de alta calidad para que tu experiencia sea la mejor posible. No importa si eres principiante o experto, en nuestro centro encontrarás el apoyo que necesitas para mejorar tu salud y bienestar. ¡Únete a nosotros y comienza tu camino hacia una vida más saludable y activa!
          </p>
          <button className="fitness-contact-button" onClick={contacto}>
            Contáctanos
          </button>
        </div>
      </div>
    </div>
    
  )
}
