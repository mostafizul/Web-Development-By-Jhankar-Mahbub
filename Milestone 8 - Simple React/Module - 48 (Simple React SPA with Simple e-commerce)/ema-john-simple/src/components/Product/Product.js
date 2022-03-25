import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import './Product.css'
const Product = (props) => {
    const {name,img,seller,price,ratings} = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <p className='product-name'>{name}</p>
            <p>Price: {price}</p>
            <p><small>Seller: {seller}</small></p>
            <p><small>Ratings: {ratings} stars</small></p>
            <button className='btn-cart' onClick={()=> props.handleAddToCart(props.product)}>
                <p>Add to Cart  <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></p>
               
            </button>
        </div>
    );
};

export default Product;