import {useEffect, useState } from "react";
import UserComponent from "../user/UserComponent";


const UsersComponent = () => {
    const [users, setUsers] = useState([])
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
            <UserComponent/>
        </div>
    );
};

export default UsersComponent;
