// Product.js
import React from 'react';

export default function Product({ product, addToCart }) {
  return (
    <div className="flex flex-col justify-between bg-black border-2 border-yellow-400 shop-card">
      <div className="p-4">
        <div className="relative h-48 mb-4">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="rounded-md h-48 w-full object-cover shop-image"
          />
        </div>
        <div className='text-center'>
          <h2 className="text-lg font-semibold mb-2 text-yellow-400">{product.name}</h2>
          <p className="text-gray-300">${product.price.toFixed(2)}</p>
        </div>
        <div className='text-center'>
          <button onClick={() => addToCart(product)} className="shop-button">
            Añadir al carrito
          </button>
        </div>
      </div>
    </div>
  );
}
