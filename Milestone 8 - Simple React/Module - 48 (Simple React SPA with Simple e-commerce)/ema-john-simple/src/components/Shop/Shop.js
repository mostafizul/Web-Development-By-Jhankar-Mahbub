import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products,setProducts] = useState([]);
    const [cart,SetCart] = useState([]);
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    const handleAddToCart = (product)=>{
        console.log(product);
        //cart.push(product);
        const newCart = [...cart, product];
        SetCart(newCart);
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product=><Product key={product.id} product={product} handleAddToCart={handleAddToCart}>
                    
                    </Product>)
                }
            </div>
            <div className="cart-container">
                <h4>Order Summary</h4>
                <p>selected items: {cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;