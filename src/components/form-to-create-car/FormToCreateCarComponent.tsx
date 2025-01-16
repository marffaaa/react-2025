import { useForm } from "react-hook-form";
import { ICar } from "../../models/ICar";
import { addNewCar } from "../../services/api.service";
import { joiResolver } from "@hookform/resolvers/joi";
import { carValidator } from "../../validators/car.validator";

const FormToCreateCarComponent = () => {
    const {handleSubmit, register, formState:{errors}} = useForm<ICar>({mode:"all", resolver: joiResolver(carValidator)});
    const customHandler = (data: ICar) =>{
        addNewCar(data)
    }
    return (
        <div>
            <form onSubmit={handleSubmit(customHandler)}>
                <div>
                    <input type="text" {...register('brand')}/>
                    {errors.brand && <div>{errors.brand.message}</div>}
                </div>
                <div>
                    <input type="number" {...register('year')}/>
                    {errors.year && <div>{errors.year.message}</div>}
                </div>
                <div>
                    <input type="number" {...register('price')}/>
                    {errors.price && <div>{errors.price.message}</div>}
                </div>
                <button>Create</button>
            </form>
        </div>
    );
};

export default FormToCreateCarComponent;