import React, { useEffect, useState } from "react";
import { fetchProducts } from "../services/api";

function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const loadProducts = async () => {
            const data = await fetchProducts();
            setProducts(data);
        };
        loadProducts();
    }, []);

    return (
        <div>
            <h2>Product List</h2>
            <ul>
                {products.map((product) => (
                    <li key={product._id}>{product.name} - ${product.price}</li>
                ))}
            </ul>
        </div>
    );
}

export default ProductList;
