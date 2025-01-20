import {useCallback, useEffect, useState} from "react";
import UserComponent from "../user/UserComponent";


const UsersComponent = () => {
    const [users, setUsers] = useState([])
    console.log('users')
    const foo = useCallback(() => {
        console.log('test')
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
            <UserComponent foo={foo}/>
        </div>
    );
};

export default UsersComponent;
