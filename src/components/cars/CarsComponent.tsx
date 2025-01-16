import { useEffect, useState } from "react";
import { getAllCars } from "../../services/api.service";
import { ICar } from "../../models/ICar";
import CarComponent from "../car/CarComponent";


const CarsComponent = () => {
    const [cars, setCars] = useState<ICar[]>([])
    useEffect(() => {

        getAllCars().then(cars => setCars(cars))

    }, []);
    return (
        <div>
            {cars && cars.map(car => <CarComponent car={car} key={car.id}/>)}
        </div>
    );
};

export default CarsComponent;