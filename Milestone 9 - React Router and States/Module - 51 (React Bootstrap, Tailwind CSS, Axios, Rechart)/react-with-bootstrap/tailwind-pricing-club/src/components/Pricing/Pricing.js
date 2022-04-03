import React from 'react';
import PricingOption from '../PricingOption/PricingOption';

const Pricing = () => {
    const pricingOptions = [
        {id:1, name:'Free', price:0, benefits:[
            'lifetime free', 
            'unlimited deals', 
            'localized deals',
            'fantastic deals',
            'crazy deals'
        ]},
        {id:1, name:'regular', price:330,benefits:[
            'lifetime free', 
            'unlimited deals', 
            'localized deals',
            'fantastic deals',
            'crazy deals'
        ]},
        {id:1, name:'premium', price:4440,benefits:[
            'lifetime free', 
            'unlimited deals', 
            'localized deals',
            'fantastic deals',
            'crazy deals'
        ]},
    ]
    return (
        <div className='bg-indigo-300 p-4 mt-4 font-mono'>
            <h1 className='text-6xl'>Best Deal of the Town</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur obcaecati minus quibusdam sint rerum nisi ad earum libero voluptate a?</p>
            <div className='grid md:grid-cols-3 gap-3 mt-8'>
                {
                    pricingOptions.map(option=><PricingOption key={option.id} option={option}></PricingOption>)
                }
            </div>
        </div>
    );
};

export default Pricing;