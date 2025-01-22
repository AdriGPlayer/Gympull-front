import React from 'react'

export default function Gallery() {
  
    const images = [
        '/gallery1.png',
        '/gallery2.png',
        '/gallery3.png',
        '/gallery4.png',
        '/gallery5.png',
        '/gallery6.png',
      ];
    
      return (
        <section className="gallery-section">
          <div className="gallery-container">
            <div className="gallery-title">
              <div></div>
              <h2>VE NUESTRA<br />GALERÍA DEL GIMNASIO</h2>
              <div></div>
            </div>
            <div className="gallery-grid">
              {images.map((src, index) => (
                <div key={index} className="aspect-w-4 aspect-h-3">
                  <img src={src} className="object-cover w-full h-full"/>
                </div>
              ))}
            </div>
          </div>
        </section>
  )
}
