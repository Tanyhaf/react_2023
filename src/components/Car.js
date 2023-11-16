import {carActions} from "../redux/slices/carSlice";
import {useDispatch} from "react-redux";
import {carService} from "../services";



const Car = ({car}) => {
    const{id, brand, price, year}=car
    const dispatch = useDispatch();
   const deleteCar = async ()=>{
       await carService.deleteById(id)
       dispatch(carActions.trigger())
   }

    return (
        <div>
            <div>id:{id}</div>
            <div>name:{brand}</div>
            <div>price:{price}</div>
            <div>year:{year}</div>
            <button onClick={()=> dispatch(carActions.setCarForUpdate(car))}>Update</button>
            <button onClick={deleteCar}>Delete</button>
        </div>
    );
};

export {Car};
