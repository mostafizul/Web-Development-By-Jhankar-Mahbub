import React from 'react';
import './Service.css'
const Service = (props) => {
    const {name,img,description,price} = props.service;
    return (
        <div className='service'>
            <h2>this is service: {name}</h2>
            <img src={img} alt="" />
            <p>{price}</p>
            <p><small>{description}</small></p>
            <button>BOOK: {name}</button>
        </div>
    );
};

export default Service;