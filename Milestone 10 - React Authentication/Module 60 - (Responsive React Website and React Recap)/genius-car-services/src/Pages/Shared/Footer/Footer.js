import React, { useEffect, useState } from 'react';
import "./Footer.css"
const Footer = () => {
    const [year,setYear] = useState();
    const getYear = () =>  setYear(new Date().getFullYear())

    useEffect(()=>{
        getYear();
    },[])
    return (
        <footer>
            <p><small>copyright @{year}</small></p>
        </footer>
    );
};

export default Footer;