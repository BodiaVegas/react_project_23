import React from 'react';

import css from './Post.module.css';

const Post = ({post,click}) => {
    const {id, title, body, userId} = post;


    return (
        <div className={css.Post}>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <button onClick={()=>click(id)}>Details</button>
            {/*<div>body: {body}</div>*/}
        </div>
    );
};
export default Post;
