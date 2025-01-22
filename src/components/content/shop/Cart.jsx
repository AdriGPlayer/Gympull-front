import { useNavigate } from "react-router-dom";

export default function Cart({ cart, addToCart, removeFromCart, getTotalPrice, userId }) { // Asegúrate de recibir userId
    const navegacion = useNavigate();
  
    const confirmButton = () => {
        const totalPrice = getTotalPrice().toFixed(2); // Llama a la función para obtener el total
        console.log(totalPrice);
        localStorage.clear();
        // Almacena el carrito en localStorage
        const cartData = JSON.stringify(cart); // Convierte el carrito a JSON
        localStorage.setItem('cart', cartData); // Almacena el carrito
        navegacion(`/confirm`);
    };
    const confirmCompra = () =>{


    }
  
    return (
        <div className="shop-cart">
            <h2 className="text-xl font-semibold mb-4 flex items-center text-yellow-400">
                Carrito de Compras 
            </h2>
            {cart.length === 0 ? (
                <p className="text-gray-400">Tu carrito está vacío</p>
            ) : (
                <>
                    <ul className="space-y-4">
                        {cart.map((item) => (
                            <li key={item.id} className="flex justify-between items-center">
                                <span className="text-gray-300">{item.name}</span>
                                <div className="flex items-center">
                                    <button
                                        onClick={() => removeFromCart(item.id)}
                                        className="quantity-button"
                                    >
                                        -
                                    </button>
                                    <span className="mx-2 text-gray-300">{item.quantity}</span>
                                    <button
                                        onClick={() => addToCart(item)}
                                        className="quantity-button"
                                    >
                                        +
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="flex justify-between items-center border-t border-yellow-400 p-4">
                        <span className="font-semibold text-gray-300">Total:</span>
                        <span className="font-bold text-lg text-yellow-400">${getTotalPrice().toFixed(2)}</span>
                    </div>
                    <div className="mt-4">
                        <button className="btn-btncart" onClick={confirmButton}>
                            Confirmar Carrito
                        </button>
                        <button className="btn-btncart" onClick={confirmCompra}>
                            Confirmar Compra
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}
