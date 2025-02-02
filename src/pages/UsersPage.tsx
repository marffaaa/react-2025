import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../redux/hooks/useAppDispatch";
import { useAppSelector } from "../redux/hooks/useAppSelector";
import { useEffect } from "react";
import { userSliceAction } from "../redux/slices/userSlice/userSlice";
import SearchComponent from "../components/search/SearchComponent";
import UsersComponent from "../components/users/UsersComponent";

const UsersPage = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { loadState } = useAppSelector(state => state.userSlice);

    useEffect(() => {
        const token = localStorage.getItem("accessToken");
        if (!token) {
            navigate("/");
        }
    }, [navigate]);

    useEffect(() => {
        dispatch(userSliceAction.loadUsers());
    }, [dispatch]);

    return (
        <div>
            <SearchComponent />
            {loadState ? <UsersComponent /> : <p>Loading...</p>}
        </div>
    );
};

export default UsersPage;
