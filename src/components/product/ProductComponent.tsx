import { FC } from "react";
import { IProduct } from "../../models/IProduct";

type ProductTypeProps ={
    item: IProduct;
}
const ProductComponent: FC<ProductTypeProps> = ({item}) => {
    return (
        <div>
            <h2>{item.id}{item.title}</h2>
            <p>{item.price}</p>
            <p>{item.quantity}</p>
            <p>{item.total}</p>
            <p>{item.discountPercentage}</p>
            <p>{item.discountedTotal}</p>
            <img src={item.thumbnail} alt={item.title}/>
        </div>
    );
};

export default ProductComponent;