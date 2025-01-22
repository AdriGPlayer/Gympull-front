// src/services/ChatService.js
import axios from "axios";

const API_URL = "http://localhost:8080/api/chat/";

class ChatService {
    // Método para crear un nuevo mensaje de chat
    createChat(chat) {
        const user = JSON.parse(localStorage.getItem("user"));
        const token = user ? user.token : null;

        return axios.post(`${API_URL}create`, chat, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
    }

    // Método para obtener todos los mensajes de chat
    getAllChats() {
        return axios.get(`${API_URL}all`);
    }

    // Método para obtener un mensaje específico de chat por ID
    getChatById(id) {
        return axios.get(`${API_URL}${id}`);
    }
}

export default new ChatService();
