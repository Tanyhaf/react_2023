import React from 'react';

const Simpson = ({simpson}) => {
    const {name, img} = simpson;
    return (
        <div>
            <div>{name}</div>
            <div>{<img src={img} alt=""/>} </div>
        </div>
    );
};

export {Simpson};
