import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
const Product = (product) => {

    const { seller, name, price, img } = product.product
   const handleAddToCart = product.handleAddToCart
    return (
        <div className='product-container' >
            <div>
                <div className='product-img'>
                    <img src={img} alt="" />
                </div>
                <div className='product-info'>
                    <h5>{name} <br />
                        $ {price}
                    </h5>
                    <p>Manufacturer: {seller}</p>
                    <p>rating: 3 ster</p>
                </div>
            </div>
            <button onClick={()=> handleAddToCart(product.product)} >Add to Cart
            <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Product;