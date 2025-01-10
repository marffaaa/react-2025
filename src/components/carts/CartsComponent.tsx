import { useParams } from "react-router-dom";
import CartComponent from "../cart/CartComponent";
import useCarts from "./useFetchCarts";

const CartsComponent = () => {
    const { id } = useParams();
    const carts = useCarts(id);

    return (
        <div>
            <div>
                {carts.map((cart) => (<CartComponent key={cart.id} cart={cart} />))}
            </div>
        </div>
    );
};

export default CartsComponent;
