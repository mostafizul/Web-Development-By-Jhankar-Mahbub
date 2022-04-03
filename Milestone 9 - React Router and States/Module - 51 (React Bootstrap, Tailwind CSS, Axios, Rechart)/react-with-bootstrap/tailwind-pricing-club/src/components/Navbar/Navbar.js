import React from 'react';
import Link from '../Link/Link';
import { MenuIcon, XIcon } from '@heroicons/react/solid'
import { useState } from 'react';

const Navbar = () => {
    const [open,setOpen] = useState(false);
    const routes = [
        {id:1,name:'Home',link:'/home'},
        {id:1,name:'Shop',link:'/shop'},
        {id:1,name:'Deals',link:'/deals'},
        {id:1,name:'Contact',link:'/contact'}
    ]
    return (
       <nav className='bg-indigo-200'>
           <div onClick={()=> setOpen(!open)} className='w-6 h-6 md:hidden'>
               {open? <XIcon></XIcon>:<MenuIcon></MenuIcon>}
           </div>
           <ul className={`md:flex justify-center absolute duration-500 bg-indigo-200 md:static w-full ease-in ${open ? 'top-6': 'top-[-120px]'}`}>
               {
                   routes.map(route=><Link key={route.id} route={route}></Link>)
               }
           </ul>
       </nav>
    );
};

export default Navbar;