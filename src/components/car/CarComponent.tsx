import { FC } from "react";
import { ICar } from "../../models/ICar";

type CarPropsType={
    car: ICar
}

const CarComponent:FC<CarPropsType> = ({car}) => {
    return (
        <div className="flex flex-col my-10 rounded-lg bg-slate-300 w-48 h-32 justify-center items-center ">
            <h2 className="font-medium text-lg">{car.id}. {car.brand}</h2>
            <p>Year: {car.year}</p>
            <p>Price: {car.price}</p>
        </div>
    );
};

export default CarComponent;