//Este componente contiene la lista de productos.
import React from 'react';
import Product from './Product';

export default function ProductList({ products, addToCart }) {
  return (
    <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <Product key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
}
