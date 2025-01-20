import {useCallback, useEffect, useMemo, useState} from "react";
import UserComponent from "../user/UserComponent";


const UsersComponent = () => {
    const [users, setUsers] = useState([])
    console.log('users')
    const foo = useCallback(() => {
        console.log('test')
    }, [])

    const arr:number[] = useMemo(()=>{
        return[11, 22, 33]
    }, [])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                setUsers(value)
                console.log(users)
            })
    }, []);
    console.log('users')
    return (
        <div>
           users component
            <UserComponent foo={foo} arr={arr}/>
        </div>
    );
};

export default UsersComponent;
