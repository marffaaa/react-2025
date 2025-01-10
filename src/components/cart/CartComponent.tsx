import { FC } from "react";
import { ICart } from "../../models/ICart";
import ProductComponent from "../product/ProductComponent";

type CartTypeProps={
    cart: ICart;
}
const CartComponent:FC<CartTypeProps> = ({cart}) => {
    return (
        <div>
            <p>{cart.products.map((product)=><ProductComponent key={product.id} item={product}/>)}</p>
            <p>{cart.total}</p>
            <p>{cart.totalProducts}</p>
            <p>{cart.totalQuantity}</p>
            <p>{cart.discountedTotal}</p>
        </div>
    );
};

export default CartComponent;