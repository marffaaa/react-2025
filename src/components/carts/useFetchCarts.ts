import { useState, useEffect } from "react";
import { ICart } from "../../models/ICart";
import { ICartResponse } from "../../models/ICartResponse";

const useCarts = (userId: string | undefined) => {
    const [carts, setCarts] = useState<ICart[]>([]);

    useEffect(() => {
        if (userId) {
            fetch('https://dummyjson.com/carts/user/' + userId)
                .then(response => response.json())
                .then(({ carts }: ICartResponse) => {
                    setCarts(carts);
                });
        }
    }, [userId]);

    return carts;
};

export default useCarts;
