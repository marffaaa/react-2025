import { useEffect, useState } from "react";
import {cartService} from "../../services/api.services";
import { ICart } from "../../models/ICart";

export const useFetchCarts = (id:string) => {
    const [carts, setCarts] = useState<ICart>();

    useEffect(() => {
        const fetchCarts = async () => {
            const allCarts = await cartService.getUserCarts(id);
            setCarts(allCarts);
        };
        fetchCarts();
    }, []);
    return { carts };
};