import { useDispatch } from "react-redux";
import UsersComponent from "../components/users/UsersComponent";
import { useAppSelector, userSliceAction } from "../main";
import { useEffect } from "react";

const UsersPage = () => {

    const {users} = useAppSelector(({userSlice})=> userSlice)

    const dispatch = useDispatch()

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(value => value.json())
            .then(value => {
                dispatch(userSliceAction.loadUsers(value))
            })
    }, []);
    return (
            <div >
                {users.map(user => {
                    return <div key={user.id}>{user.name}</div>
                })}
            </div>
    );
};

export default UsersPage;
