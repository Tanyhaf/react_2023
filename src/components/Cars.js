import React, {useEffect} from 'react';
import { useSelector} from "react-redux";
import {Car} from "./Car";
import {useDispatch} from "react-redux";
import {carService} from "../services";
import {carActions} from "../redux/slices/carSlice";

const Cars = () => {

const {cars, trigger} =useSelector(state => state.cars);
const dispatch = useDispatch();



    useEffect(() => {
        carService.getAll().then(({data})=>dispatch(carActions.setCars(data)))
    }, [trigger, dispatch]);

    return (
        <div>
            {cars.map(car=><Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};
