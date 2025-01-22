import React, { useEffect, useState } from 'react';
import ProductList from './ProductList';
import Cart from './Cart';
import ProductService from './../../../services/ProductService'; 
import CategorySelector from './CategorySelector';
import { useParams } from 'react-router-dom';

export default function Shop() {
    const [cart, setCart] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('1');
    const [productos, setProductos] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const defaultUserId = 'default-id'; // Cambia esto al ID que desees como por defecto

    // Obtén el ID de los parámetros de la ruta
    const { id } = useParams();
    const userId = id || defaultUserId; // Establece un ID por defecto si no hay ID

    const addToCart = (product) => {
        setCart(currentCart => {
            const existingItem = currentCart.find(item => item.id === product.id);
            if (existingItem) {
                return currentCart.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...currentCart, { ...product, quantity: 1 }];
        });
    };

    const removeFromCart = (productId) => {
        setCart(currentCart => {
            const existingItem = currentCart.find(item => item.id === productId);
            if (existingItem && existingItem.quantity > 1) {
                return currentCart.map(item =>
                    item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
                );
            }
            return currentCart.filter(item => item.id !== productId);
        });
    };

    const getTotalPrice = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const handleSelectCategory = (category) => {
        setSelectedCategory(category);
        console.log('Categoría seleccionada:', category);
    };

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            try {
                const response = await ProductService.getProductsByCategory(selectedCategory);
                const productosData = response.data.reduce((acc, product) => {
                    acc[product.id] = {
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        imageUrl: product.imageUrl 
                    };
                    return acc;
                }, {});
                setProductos(productosData);
                setError(null);
            } catch (error) {
                console.error("Error fetching products:", error);
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        if (selectedCategory) {
            fetchProducts();
        } else {
            setProductos({});
        }
    }, [selectedCategory]);

    return (
        <div className="min-h-screen bg-black text-white">
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-8 text-center text-yellow-400">Nuestra Tienda</h1>
                
                {/* Enviar cart, totalPrice, y userId como props a Cart */}
                <Cart 
                    cart={cart} 
                    removeFromCart={removeFromCart} 
                    addToCart={addToCart} 
                    getTotalPrice={getTotalPrice} 
                    userId={userId} // Aquí pasamos el userId
                />
                
                <CategorySelector onSelectCategory={handleSelectCategory} />

                {loading ? (
                    <p className="text-gray-400">Cargando productos...</p>
                ) : error ? (
                    <p className="text-red-500">Error al cargar productos: {error.message}</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {Object.keys(productos).length > 0 ? (
                            <ProductList products={Object.values(productos)} addToCart={addToCart} />
                        ) : (
                            <p className="text-gray-400">No hay productos disponibles.</p>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
