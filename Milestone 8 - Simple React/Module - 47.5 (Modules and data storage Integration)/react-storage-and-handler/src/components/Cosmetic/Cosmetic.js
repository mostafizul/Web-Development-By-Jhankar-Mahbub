import React from 'react';
import { addtoDb, removeFromDB } from '../../utilities/fakedb';
import './Cosmetic.css'

const Cosmetic = (props) => {
    const {name,price,id} = props.cosmetic;
    const addToCart = (id) =>{
        addtoDb(id);
    }
    const removeFromCart = id =>{
        removeFromDB(id);
    }
   // const addtoPara = () =>  addToCart(id) 
    return (
        <div className='product'>
           <h2>Buy This:{name}</h2> 
           <p>Only for: ${price}</p>
           <p>ID:{id}</p>
           <button onClick={()=>addToCart(id)}>add to Cart</button>
           <button onClick={()=>removeFromCart(id)}>Remove</button>
        </div>
    );
};

export default Cosmetic;