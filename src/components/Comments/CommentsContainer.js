import React, {useEffect, useState} from 'react';
import {commentService} from "../../servises/commentService";
import {Comments} from "./Comments";
import {CommentsForm} from "./CommentsForm";

const CommentsContainer = () => {

    const [comments, setComments]=useState([]);

    useEffect(() => {
        commentService.getAll().then(({data})=> setComments(data))
    }, []);

    return (
        <div>
            <CommentsForm setComments={setComments}/>
            <Comments comments={comments}/>
        </div>
    );
};

export {CommentsContainer};
