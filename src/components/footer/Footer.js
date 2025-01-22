import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div>
      <footer className="bg-yellow-500 p-4 flex justify-between items-center">
      
        <p className="text-gray-800 text-sm">
            Carrasco Torres Marco
        </p>
        
        {/* Imágenes alineadas a la derecha */}
        <div className="flex gap-4">
          <Link to="#" className="text-white hover:text-yellow-400">
            <img src="/instagram.png" className="w-5 h-auto" alt="Instagram" />
          </Link>
          <Link to="#" className="text-white hover:text-yellow-400">
            <img src="/twitter.png" className="w-5 h-auto" alt="Twitter" />
          </Link>
          <Link to="#" className="text-white hover:text-yellow-400">
            <img src="/facebook-app-symbol.png" className="w-5 h-auto" alt="Facebook" />
          </Link>
        </div>
      </footer>
    </div>
  );
}
