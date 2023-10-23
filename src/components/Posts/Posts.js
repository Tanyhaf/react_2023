import React, {useEffect, useState} from 'react';
import {postService} from "../../services/postService";
import {Post} from "./Post";
import {PostDetails} from "../PostDetails/PostDetails";

const Posts = () => {
    const [posts, setPosts] = useState([])
    const [postDetails, setPostDetails] = useState([])
    const  click = async (id) =>{
       const {data} = await postService.getById(id);
       setPostDetails(data)
    }

    useEffect(() => {
        postService.getAll().then(({data})=> setPosts(data))
    }, []);
    return (
        <div>
            <div>
            {posts.map(post => <Post key={post.id} post={post} click={click} />)}
            </div>
            {postDetails && <PostDetails postDetails={postDetails}/>}
        </div>
    );
};

export {Posts};
