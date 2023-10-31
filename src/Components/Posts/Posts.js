import React, {useEffect, useState} from 'react';
import axios from "axios";

import css from './Posts.module.css'
import Post from "../Post/Post";
import {axioService} from "../../Services/axioService";
import {postService} from "../../Services/postService";
import PostDetails from "../PostDetails/PostDetails";

const Posts = () => {
    const [posts, setposts] = useState([]);
    const [postDetails,setpostDetails] = useState(null);

    const click = async(postid) =>  {
        const {data} = await postService.getbyId(postid);
        console.log(data);
        setpostDetails(data);

    }


    useEffect(() => {
        // fetch('https://jsonplaceholder.typicode.com/posts') 1
        //     .then(response=> response.json())
        //     .then(value => setposts(value))
        // axios.get('https://jsonplaceholder.typicode.com/posts')  2
        //     // .then(res => res.data)
        //     // .then(value => setposts(value))
        //     .then(({data})=>setposts(data))
        // axioService.get('/posts').then(({data})=>setposts(data)) 3
        postService.getAll().then(({data})=>setposts(data))
    })
    return (
        <div>
            <div className={css.Posts}>
                {posts.map(post=><Post key={post.id} post={post} click={click}/>)}
            </div>
            {postDetails && <PostDetails postDetails={postDetails}/>}

        </div>

    );
};

export default Posts;