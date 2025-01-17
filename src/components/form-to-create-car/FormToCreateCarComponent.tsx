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
        <div className="flex justify-center items-center w-screen h-screen">
            <form onSubmit={handleSubmit(customHandler)} className="w-3/6 rounded-2xl bg-slate-300 flex flex-col shadow-md h-3/4 justify-center mr-48">
                <div className="ml-12">
                    <h1 className="py-8 text-4xl font-bold text-slate-800 ">Create new car</h1>
                    <div className="h-20 my-5">
                        <div className="flex flex-row gap-x-4 h-12 justify-between items-center w-3/5">
                            <p className="font-medium text-lg">Brand: </p>
                            <input className="h-10 w-80 shadow-sm rounded-lg" type="text" {...register('brand')}/>
                        </div>
                        {errors.brand && <div>{errors.brand.message}</div>}
                    </div>
                    <div className="h-20 my-5">
                        <div className="flex flex-row gap-x-4 h-12 justify-between items-center w-3/5">
                            <p className="font-medium text-lg">Year: </p>
                            <input className="h-10 w-80 shadow-sm rounded-lg" type="number" {...register('year')}/>
                        </div>

                        {errors.year && <div>{errors.year.message}</div>}
                    </div>
                    <div className="h-20 my-5">
                        <div className="flex flex-row gap-x-4 h-10 justify-between items-center w-3/5">
                            <p className="font-medium text-lg">Price: </p>
                            <input className="h-10 w-80 shadow-sm rounded-lg" type="number" {...register('price')}/>
                        </div>

                        {errors.price && <div>{errors.price.message}</div>}
                    </div>
                    <button className="rounded-xl font-semibold shadow-sm bg-slate-800 text-slate-50 w-28 h-10">Create</button>
                </div>
            </form>
        </div>
    );
};

export default FormToCreateCarComponent;