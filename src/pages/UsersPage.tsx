import {useEffect} from "react";
import {useAppSelector} from "../redux/hooks/useAppSelector";
import {userSliceAction} from "../redux/slices/userSlice/userSlice";
import {useAppDispatch} from "../redux/hooks/useAppDispatch";

const UsersPage = () => {

    const {users, loadState} = useAppSelector(({userSlice})=> userSlice)

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(userSliceAction.loadUsers())
    }, []);
    return (
            <div >
                {!loadState && <div>Loading....</div>}
                {users.map(user => {
                    return <div key={user.id}>{user.name}</div>
                })}
            </div>
    );
};

export default UsersPage;
