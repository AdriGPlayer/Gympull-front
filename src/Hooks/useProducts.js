import { useEffect, useState } from 'react';
import ProductService from '../services/ProductService'; 

const useProducts = (selectedCategory) => {
    const [shop, setShop] = useState({ productos: {} }); 
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await ProductService.getAllProducts();
                const categoria = selectedCategory;
                console.log(categoria)
                const productosData = response.data.reduce((acc, product) => {
                
                    acc[product.id] = {
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        imageUrl: product.imageUrl 
                    };
                    return acc;
                }, {});
                console.log(selectedCategory)
                setShop({ productos: productosData });
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };
    
        fetchProducts();
    }, []);

    return shop; 
};

export default useProducts;