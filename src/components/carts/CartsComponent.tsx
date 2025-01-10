import { useParams } from "react-router-dom";
import CartComponent from "../cart/CartComponent";
import useCarts from "./useFetchCarts";

const CartsComponent = () => {
    const { id } = useParams();
    const carts = useCarts(id);

    return (
        <div>
            {carts && carts.length > 0 ? (
                <div>
                    {carts.map((cart) => (
                        <CartComponent key={cart.id} cart={cart} />
                    ))}
                </div>
            ) : (
                <div className="w-screen h-screen flex justify-center "><p className="bg-slate-300 rounded-3xl place-content-center self-center text-center w-4/6 h-2/6 text-6xl">Shopping cart is empty</p></div>
            )}
        </div>
    );
};

export default CartsComponent;
