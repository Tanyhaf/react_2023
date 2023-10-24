import React, {useEffect, useState} from 'react';
import {axiosService} from "../services/axiosService";
import {baseURL} from "../constants/URLS";
import {Flight} from "./Flight";

const Flights = () => {

    const [flights, setFlights] = useState([])

    useEffect(() => {
        axiosService.get(baseURL).then(({data}) => setFlights(data))
    }, []);
    return (
        <div>
            {flights.map(flight => <Flight key={flights.mission_id} flight={flight}/> )}
        </div>
    );
};

export {Flights};
