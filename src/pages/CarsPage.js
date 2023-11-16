import React from 'react';
import {Cars} from "../components";
import {CarForm} from "../components";

const CarsPage = () => {
    return (
        <div>
            <CarForm/>
            <hr/>
            <Cars/>
        </div>
    );
};

export {CarsPage};
