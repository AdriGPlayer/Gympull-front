// services/AuthService.js
import axios from 'axios';
const API_URL = 'http://localhost:8000/login';


class AuthService {
    // Método para iniciar sesión
    async login(email, password) {
        return  axios.post(API_URL, {
            email,
            password,
        });
    }

    // Método para registrar un nuevo usuario
    async signup(user) {
        return axios.post(`${API_URL}/saveUser`, user);
    }
    async getUserByEmail(email) {
        return axios.get(`${API_URL}/getUser/${email}`);
    }
    // Método para confirmar el carrito
    async confirmarCarro(email, password) {
        return axios.post(`${API_URL}/confirmarcarro`, {
            email,
            password,
        });
    }
    
}

export default AuthService;
