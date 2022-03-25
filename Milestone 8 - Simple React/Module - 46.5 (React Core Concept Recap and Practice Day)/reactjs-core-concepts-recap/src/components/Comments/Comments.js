import React, { useEffect, useState } from 'react';
import Comment from '../Comment/Comment';

const Comments = () => {
    const [comments,setComment] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res=>res.json())
        .then(data=>setComment(data));
    },[])
    return (
        <div>
            {
                comments.map(comment=><Comment name={comment.name}></Comment>)
            }
        </div>
    );
};

export default Comments;