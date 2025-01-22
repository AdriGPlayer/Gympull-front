import axios from "axios";

const API_URL = "http://localhost:8000/products/";
// const API_URL = "https://september-promoted-algebra-suzuki.trycloudflare.com/products/";

class ProductService {
    createProduct(product) {
        const user = JSON.parse(localStorage.getItem("user"));
        const token = user ? user.token : null;

        return axios.post(API_URL + "post", product, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
    }

    getAllProducts() {
        return axios.get(API_URL + "get");
    }

    getProductsByCategory(categoryId) {
        return axios.get(`${API_URL}getByCategory/${categoryId}`);
    }
}

export default new ProductService();
