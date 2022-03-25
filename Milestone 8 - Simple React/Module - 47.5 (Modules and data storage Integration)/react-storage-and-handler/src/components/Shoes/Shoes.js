import React from 'react';
import { add, multiply } from '../../utilities/calculate';

const Shoes = () => {
    const first = 55;
    const second = 66;
    const result = multiply(first,second);
    const sum = add(first,second)
    return (
        <div>
            <h3>This is Shoes Compo</h3>
            <h3>Multiply: {result}</h3>
            <h3>Sum: {sum}</h3>
        </div>
    );
};

export default Shoes;