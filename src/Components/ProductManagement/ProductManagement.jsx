import React, { useState } from 'react';
import ProductForm from './ProductForm';
import ProductTable from './ProductTable';

const ProductManagement = () => {

    const [products, setProducts] = useState([])

    const handleAdddProduct = newProduct => {
        const newProducts = [...products, newProduct]
        setProducts(newProducts)
    }


    return (
        <div>
            <ProductForm handleAdddProduct={handleAdddProduct}></ProductForm>
            <ProductTable products={products}></ProductTable>
        </div>
    );
};

export default ProductManagement;