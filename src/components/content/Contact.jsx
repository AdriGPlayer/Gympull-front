import React from 'react';

export default function Contact() {
  return (
    <section className="contact-section bg-black text-white">
      <div className="map-container w-full h-64 md:h-96 relative">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30201.110839965313!2d-96.93881048528354!3d18.880920182684367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85c4e55d2fa44b9f%3A0x36f657bdb8549f96!2sGimnasio%20Au%20Fitness!5e0!3m2!1ses!2smx!4v1726360099620!5m2!1ses!2smx"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full object-cover"/>
        
      </div>
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold mb-6">CONTACTO</h2>
            <p className="text-gray-400 mb-8">
              Estamos aquí para ayudarte con cualquier pregunta que tengas sobre nuestros servicios. ¡No dudes en ponerte en contacto con nosotros!
            </p>

            <div className="space-y-4">
              <div className="dates">
                <div className="flex items-center">
                  <img src="/phone-call.png" alt="Teléfono" className="icon" />
                  <span>+61 3 8376 6284</span>
                </div>
                <div className="flex items-center">
                  <img src="/email.png" alt="Correo" className="icon" />
                  <span>contacto@aufitness.com</span>
                </div>
                <div className="flex items-center">
                  <img src="/globe.png" alt="Ubicación" className="icon" />
                  <span>Av. 3, Centro, 94500 Córdoba, Ver.</span>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-form bg-gray-900 p-6 text-white rounded-lg shadow-lg border border-yellow-500 md:col-span-1">
            <div className="card">
              <p>Envianos un mensaje</p>
              <div className="inputBox1">
                <input type="text" required="required" />
                <span className="user">Email</span>
              </div>
              <div className="inputBox">
                <input type="text" required="required" />
                <span>Nombre</span>
              </div>
              <div className="inputBox">
              <textarea id="mensaje2" name="mensaje2" required/>
          
                <span>Mensaje</span>
              </div>
              <button className="enter">Enter</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
