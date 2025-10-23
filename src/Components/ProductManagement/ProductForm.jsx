import React from 'react';

const ProductForm = ({handleAdddProduct}) => {

    const handelProductSubmit = e => {
        e.preventDefault()
        const name = e.target.name.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;
        

        const newProduct = {
            name,
            price,
            quantity
        }

        handleAdddProduct(newProduct)
    }



    return (
        <div>
            <h3>Add a Product</h3>
            <form onSubmit={handelProductSubmit}>
                <input type="text" name='name' placeholder='Product name' />
                <br />
                <input type="text" name='price' placeholder='Product price' />
                <br />
                <input type="text" name='quantity' placeholder='Product quantity' />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default ProductForm;