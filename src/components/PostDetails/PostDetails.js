import React from 'react';

const PostDetails = ({postDetails}) => {
    const {userId, id, title, body} = postDetails
    return (
        <div>
            userId: {userId},
            id: {id},
            title: {title},
            body: {body}
        </div>
    );
};

export {PostDetails};
