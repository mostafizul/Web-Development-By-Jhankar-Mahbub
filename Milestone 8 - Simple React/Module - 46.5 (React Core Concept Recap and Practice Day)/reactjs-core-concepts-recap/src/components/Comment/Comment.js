import React from 'react';
import './Comment.css'

const Comment = (props) => {
    return (
        <div className='comment'>
            <h2>Comment Name:{props.name}</h2>
        </div>
    );
};

export default Comment;