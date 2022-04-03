import React from 'react';
import Card from '../Card/Card';

const CardGroup = () => {
    const products = [
        {id:1, name:'laptop',price:14000},
        {id:1, name:'mobile',price:14000},
        {id:1, name:'tablet',price:14000},
    ]
    return (
        <div>
            <h2>This is my card group</h2>
            <div className="card-group">
                {
                    products.map(product=><Card key={product.id} product={product}></Card>)
                }
            </div>
        </div>
    );
};

export default CardGroup;