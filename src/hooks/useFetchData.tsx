import { useEffect, useState } from "react";


export const useFetchData = <T, >(url:string) => {
    const [data, setData] = useState<T>();

    useEffect(() => {
       fetch(url)
           .then(value => value.json())
           .then(data => setData(data))
    }, []);
    return data;
};