//Este componente representa un elemento individual en el carrito.
import React from 'react';

export default function CartItem({ item, removeFromCart, addToCart }) {
  return (
    <li className="flex justify-between items-center">
      <span className="text-gray-300">{item.name}</span>
      <div className="flex items-center">
        <button
          onClick={() => removeFromCart(item.id)}
          className="h-8 w-8 rounded-full border-yellow-400 text-yellow-400"
        >
          -
        </button>
        <span className="mx-2 text-gray-300">{item.quantity}</span>
        <button
          onClick={() => addToCart(item)}
          className="h-8 w-8 rounded-full border-yellow-400 text-yellow-400"
        >
          +
        </button>
      </div>
    </li>
  );
}
