import React, { useState } from 'react';
import AuthService from '../../../../services/AuthService';
import { useNavigate } from 'react-router-dom';


export default function ConfirmCart() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userId, setUserId] = useState(null);
  const authService = new AuthService();
  const navegacion = useNavigate();
  const handleSubmit = async (event) => {

    event.preventDefault(); // Evita el comportamiento predeterminado del formulario

    try {
      const response = await authService.confirmarCarro(email, password);
      
      console.log('ID del usuario:', response.data); // Imprime el ID en la consola para verificar
      setUserId(response.data);
      console.log('hola ', userId);
      navegacion(`/shop/${response.data}`);

    } catch (error) {
      console.error('Error al confirmar el carrito:', error);
      // Aquí puedes manejar errores, como mostrar un mensaje al usuario
    }
  };

  return (
    <div className="confirm-container">
      <div className="confirm-card">
        <div className="confirm-card-header">
          <h1 className="confirm-card-title">Confirmar Carrito</h1>
        </div>
        <div className="confirm-card-content">
          <form className="confirm-form" onSubmit={handleSubmit}>
            <div className="confirm-form-group">
              <label htmlFor="email" className="confirm-form-label">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Email"
                className="confirm-form-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Actualiza el estado del email
                required
              />
            </div>
            <div className="confirm-form-group">
              <label htmlFor="contrasena" className="confirm-form-label">Contraseña</label>
              <input
                id="contrasena"
                type="password"
                placeholder="Contraseña"
                className="confirm-form-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)} // Actualiza el estado de la contraseña
                required
              />
            </div>
            <div className="confirm-card-footer">
              <button type="submit" className="confirm-button">Confirmar Compra</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
