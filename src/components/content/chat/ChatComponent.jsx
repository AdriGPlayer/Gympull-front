// src/components/ChatComponent.js
import React, { useState, useEffect } from 'react';
import ChatService from '../../../services/ChatService';


const ChatComponent = () => {
    const [chats, setChats] = useState([]);
    const [message, setMessage] = useState('');

    useEffect(() => {
        ChatService.getAllChats()
            .then(response => setChats(response.data))
            .catch(error => console.error("Error al cargar los mensajes:", error));
    }, []);

    const handleSendMessage = () => {
        const newChat = {
            fecha: new Date().toISOString(),
            idcliente: 1,
            tipo: 1,
            mensaje: message,
        };

        ChatService.createChat(newChat)
            .then(response => {
                setChats([...chats, response.data]);
                setMessage('');
            })
            .catch(error => console.error("Error al enviar el mensaje:", error));
    };

    return (
        <div className="chat-container">
            <div className="chat-history">
                {chats.map(chat => (
                    <div key={chat.idchat} className={`chat-message ${chat.tipo === 1 ? 'client' : 'response'}`}>
                        <span>{chat.mensaje}</span>
                    </div>
                ))}
            </div>

            <div className="chat-input">
                <input
                    type="text"
                    placeholder="Escribe un mensaje..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button onClick={handleSendMessage}>Enviar</button>
            </div>
        </div>
    );
};

export default ChatComponent;
