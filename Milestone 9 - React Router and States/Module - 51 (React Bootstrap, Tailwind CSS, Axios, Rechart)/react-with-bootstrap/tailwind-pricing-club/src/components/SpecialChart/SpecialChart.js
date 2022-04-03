import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const SpecialChart = () => {
    const [phones,setPhones] = useState([]);
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(data=>{
            const loadedData = data.data;
            const phoneData = loadedData.map(phone =>{
                const parts = phone.email.split('@');
                const ph={
                    name: parts[0],
                    value: parts[1]
                };
                 return ph;
            })
        });
    },[])
    return (
        <div>
            
        </div>
    );
};

export default SpecialChart;