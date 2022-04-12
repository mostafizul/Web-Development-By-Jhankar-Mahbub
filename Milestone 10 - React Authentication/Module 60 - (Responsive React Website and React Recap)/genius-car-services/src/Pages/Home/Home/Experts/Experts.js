import React from 'react';
import expert1 from '../../../../images/repair1.jpg';
import expert2 from '../../../../images/repair2.jpg';
import expert3 from '../../../../images/repair3.jpg';
import expert4 from '../../../../images/repair4.jpg';
import Expert from '../Expert/Expert';

const experts=[
    {id:1,name:'will smith',img:expert1},
    {id:1,name:'will smith',img:expert2},
    {id:1,name:'will smith',img:expert3},
    {id:1,name:'will smith',img:expert4},
]
const Experts = () => {
    return (
        <div className='container'>
            <h2 className='text-primary'>Our Experts</h2>
            <div className="row">
                {
                    experts.map(expert=><Expert expert={expert} key={expert.id}></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;