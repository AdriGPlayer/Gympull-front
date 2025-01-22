
import React from 'react';
import { Link } from 'react-router-dom';

export default function Pricing() {
    const plans = [
        {
          name: "MENSUAL",
          description: "Accede a todas nuestras instalaciones y clases durante un mes. Ideal para quienes quieren probar antes de comprometerse.",
          price: "$35",
          features: ["Instructor Personal", "Suplemento de Cortesía"],
        },
        {
          name: "ANUAL",
          description: "Disfruta de un año completo de acceso ilimitado. Perfecto para quienes están listos para un compromiso a largo plazo.",
          price: "$350",
          features: ["Instructor Personal", "Bebida Gratis", "Suplemento de Cortesía", "Soporte 24/7", "Kit de Bienvenida", "Sesiones de Relajación", "Plan de Nutrición Personalizado"],
        },
      ];
    
      return (
        <section className="bg-black text-white py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-1">
                <h2 className="text-4xl font-bold mb-4">ELIGE NUESTROS PLANES</h2>
                <p className="text-gray-400 mb-4">
                  Elige el plan que mejor se adapte a tus necesidades y empieza a disfrutar de todas nuestras ventajas.
                </p>
              </div>
              {plans.map((plan, index) => (
                <div key={index} className="pricing-card border border-yellow-400 p-6 rounded-lg text-center">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <ul className="mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center mb-2 justify-center">
                        <svg className="w-4 h-4 mr-2 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <p className="text-4xl font-bold mb-6">{plan.price}</p>
                  <Link className='button'>Elegir ahora</Link>
                </div>
              ))}
            </div>
          </div>
        </section>
        
      );
}
