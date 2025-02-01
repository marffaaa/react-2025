import {useEffect} from "react";
import {useParams} from "react-router-dom";
import {useAppSelector} from "../redux/hooks/useAppSelector";
import {useAppDispatch} from "../redux/hooks/useAppDispatch";
import {userSliceAction} from "../redux/slices/userSlice/userSlice";


const UserPage = () => {

    const {id} = useParams();

    const {user, loadState} = useAppSelector(({userSlice}) => userSlice)

    const dispatch = useAppDispatch()

    useEffect(() => {
        if (id) dispatch(userSliceAction.loadUser(id))
    }, [id]);


    return (
        <div>
            {!loadState && <div>Loading....</div>}
            {user && <div>{user.id}. {user.id}</div>}
        </div>
    );
};

export default UserPage;
