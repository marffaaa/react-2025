import { useParams } from "react-router-dom";

import { useEffect, useState } from "react";
import { ICart } from "../../models/ICart";
import { ICartResponse } from "../../models/ICartResponse";
import CartComponent from "../cart/CartComponent";


const CartsComponent = () => {
    const {id} = useParams();
    const [carts, setCarts] = useState<ICart[]>([])
    useEffect(() => {
        fetch('https://dummyjson.com/carts/user/'+ id)
            .then(respons => respons.json())
            .then(({carts}: ICartResponse)=>{
                setCarts(carts)
            } )

    }, [id]);
    return (
        <div>
            <div>
                    {carts.map((cart) => (<CartComponent key={cart.id} cart={cart}/>))}
            </div>
        </div>
    );
};

export default CartsComponent;