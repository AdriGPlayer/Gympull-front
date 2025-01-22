import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Nav() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));
  const email = user ? user.email : '';

  useEffect(() => {
    // Verifica si hay un usuario en localStorage al montar el componente
    const user = localStorage.getItem('user');
    setIsAuthenticated(!!user);

    // Función para manejar cambios en el almacenamiento local
    const handleStorageChange = () => {
      const updatedUser = localStorage.getItem('user');
      setIsAuthenticated(!!updatedUser);
    };

    // Añade un listener para detectar cambios en localStorage
    window.addEventListener('storage', handleStorageChange);

    // Limpia el listener al desmontar el componente
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsAuthenticated(false);
    navigate('/'); // Redirige al inicio después de cerrar sesión
  };

  const handleNavigate = () => {
    navigate('/login');
  };

  return (
    <div>
      <header className="header-container container">
        <div className="header-logo">
          <img src="/Pull.png" alt="Gym Pull Logo" className="logo-image" />
          <span className="logo-letter">G</span>
          <span className="logo-text">P</span>
        </div>
        <nav className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">Sobre nosotros</Link>
          <Link to="/gallery" className="nav-link">Galería</Link>
          <Link to="/pricing" className="nav-link">Precios</Link>
          <Link to="/shop" className="nav-link">Tienda</Link>
          <Link to="/contact" className="nav-link">Contacto</Link>
          <Link to="/chat" className='nav-link'>Chat</Link>
          {
            isAuthenticated ? (
              <Link to={`/user/${email}`} className='nav-link'>Profile</Link>
            ) : (
              <Link></Link>
            )
          }
        </nav>

        {isAuthenticated ? (
          <button className="logout" onClick={handleLogout}>
            Cerrar sesión
          </button>
        ) : (
          <button className="btn-warning-custom" onClick={handleNavigate}>
            Iniciar sesión
          </button>
        )}
      </header>
    </div>
  );
}
