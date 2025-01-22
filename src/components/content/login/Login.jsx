import React, { useState } from 'react'; 
import AuthService from './../../../services/AuthService';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [isLogin, setIsLogin] = useState(true);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const authService = new AuthService();
    const toggleForm = () => setIsLogin(!isLogin);
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            if (isLogin) {
                const response = await authService.login(email, password);
                console.log("Login exitoso:", response);

                const user = {
                    email: response.data.email,
                    name: response.data.name,
                };
                localStorage.setItem('user', JSON.stringify(user));
                localStorage.setItem('email', JSON.stringify(email));
                console.log("Contenido de localStorage:", localStorage);

                navigate(`/user/${email}`);
                window.location.reload();
            } else {
                const newUser = { name, email, password };
                const response = await authService.signup(newUser);
                console.log("Registro exitoso:", response);

                localStorage.setItem('user', JSON.stringify(newUser));
            
                navigate('/');
                
            }
        } catch (error) {
            console.error("Error en el proceso:", error);
            setErrorMessage(isLogin 
                ? "Error al iniciar sesión. Revisa tus credenciales." 
                : "Error al registrar. Intenta nuevamente."
            );
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2 className="login-title">
                    {isLogin ? 'Iniciar Sesión' : 'Registrarse'}
                </h2>
                <p className="login-description">
                    {isLogin ? 'Accede a tu cuenta de gimnasio' : 'Crea una nueva cuenta de gimnasio'}
                </p>
                <form className="login-form" onSubmit={handleSubmit}>
                    {!isLogin && (
                        <div className="input-group">
                            <label htmlFor="name" className="label">Nombre</label>
                            <input 
                                id="name" 
                                placeholder="Tu nombre" 
                                className="input" 
                                value={name}
                                onChange={(e) => setName(e.target.value)} 
                            />
                        </div>
                    )}
                    <div className="input-group">
                        <label htmlFor="email" className="label">Correo Electrónico</label>
                        <input 
                            id="email" 
                            type="email" 
                            placeholder="tu@email.com" 
                            className="input" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} 
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password" className="label">Contraseña</label>
                        <input 
                            id="password" 
                            type="password" 
                            className="input" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} 
                        />
                    </div>
                    {errorMessage && <p className="error-message">{errorMessage}</p>}
                    <button type="submit" className="login-button">
                        {isLogin ? 'Iniciar Sesión' : 'Registrarse'}
                    </button>
                </form>
                <p className="toggle-text">
                    {isLogin ? '¿No tienes una cuenta?' : '¿Ya tienes una cuenta?'}
                    <button onClick={toggleForm} className="toggle-button">
                        {isLogin ? 'Regístrate' : 'Inicia sesión'}
                    </button>
                </p>
            </div>
        </div>
    );
}
