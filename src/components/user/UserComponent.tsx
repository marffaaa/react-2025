
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { IUser } from "../../models/IUser";

type PropsType = {
    user: IUser;
};

const UserComponent: FC<PropsType> = ({ user }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/auth/users/${user.id}`);
    };

    return (
        <div className='flex justify-center w-full h-full'>
            <div className='bg-red-200 shadow-md w-2/6 rounded-3xl flex flex-col justify-center text-red-950 p-5 pl-12 my-6'>
                <div onClick={handleClick} style={{cursor: "pointer", marginBottom: "5px"}}>
                    <h3 className='text-xl text-red-950 font-semibold'>{user.id}. {user.firstName} {user.lastName}</h3>
                </div>
                <p>Username: {user.username}</p>
                <p>Email: {user.email}</p>
                <p>Phone: {user.phone}</p>
            </div>
        </div>

    );
};

export default UserComponent;
