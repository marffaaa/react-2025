import { FC } from "react";
import { ICar } from "../../models/ICar";

type CarPropsType={
    car: ICar
}

const CarComponent:FC<CarPropsType> = ({car}) => {
    return (
        <div>
            <h2>{car.id}. {car.brand}</h2>
            <p>Year: {car.year}</p>
            <p>Price: {car.price}</p>
        </div>
    );
};

export default CarComponent;