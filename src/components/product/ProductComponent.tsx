import { FC } from "react";
import { IProduct } from "../../models/IProduct";

type ProductTypeProps ={
    item: IProduct;
}
const ProductComponent: FC<ProductTypeProps> = ({item}) => {
    return (
        <div className="bg-slate-100 my-5 rounded-xl">
            <div className="flex flex-col justify-center h-5/6 text-center gap-3 ">
                <h2 className="font-semibold text-lg mt-7">{item.id}. {item.title}</h2>
                <img className="w-72 mx-20 content-center rounded-xl" src={item.thumbnail} alt={item.title}/>
                <p>Price: {item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Total: {item.total}</p>
                <p>Discount percentage :{item.discountPercentage}</p>
                <p className='mb-7'>Discount total :{item.discountedTotal}</p>
            </div>


        </div>
    );
};

export default ProductComponent;