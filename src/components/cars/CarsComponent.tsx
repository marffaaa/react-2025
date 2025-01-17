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
            <div className=" columns-3 my-8">
                <div className="flex flex-col justify-center justify-self-center">
                    {cars && cars.map(car => <CarComponent car={car} key={car.id}/>)}
                </div>
            </div>

    );
};

export default CarsComponent;