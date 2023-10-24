import React from 'react';

const Flight = ({flight}) => {
    const {mission_name, launch_year, links: {mission_patch_small} } = flight;

    return (
        <div>
           <div>Name: {mission_name}</div>
            <div>Year: {launch_year}</div>
            <img src={mission_patch_small} alt=""/>
        </div>
    );
};

export {Flight};
