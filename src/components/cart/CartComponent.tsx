import { FC } from "react";
import { ICart } from "../../models/ICart";
import ProductComponent from "../product/ProductComponent";

type CartTypeProps={
    cart: ICart;
}
const CartComponent:FC<CartTypeProps> = ({cart}) => {
    return (
        <div className="flex justify-center w-screen my-8">
            <div className="flex flex-col w-1/3 h-auto bg-slate-300 rounded-xl gap-y-2.5 justify-center p-4">
                <h2 className="font-semibold text-lg">Products list:</h2>
                <p>{cart.products.map((product) => <ProductComponent key={product.id} item={product}/>)}</p>
                <p>Total products: {cart.totalProducts}</p>
                <p>Total quantity: {cart.totalQuantity}</p>
                <p>Total: {cart.total}</p>
                <p>Discounted total: {cart.discountedTotal}</p>
            </div>
        </div>

    );
};

export default CartComponent;