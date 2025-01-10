import { FC} from "react";
import { IUser } from "../../models/IUser";
import { useNavigate } from "react-router-dom";

type UserTypeProps = {
    item: IUser;
};

const UserComponent: FC<UserTypeProps> = ({ item }) => {
    const navigation = useNavigate()
    const buttonHandler = ()=>{
        navigation('/users/'+ item.id+ '/carts')
    }
    return (
        <div className="flex justify-center w-screen my-8">
            <div className="flex flex-col w-1/3 h-auto bg-slate-300 rounded-xl gap-y-2.5 justify-center p-7">
                <h2 className="font-bold text-lg">
                    {item.id}. {item.firstName} {item.lastName}
                </h2>
                <p>Username: {item.username}</p>
                <p>Email: {item.email}</p>
                <p>Phone: {item.phone}</p>
                <p>Age: {item.age}</p>
                <p>Gender: {item.gender}</p>
                <p>Birthday date: {item.birthDate}</p>
                <p>
                    Address: {item.address.country}, {item.address.city}
                </p>

                <button onClick={buttonHandler} className="my-3 self-center bg-slate-100 rounded-xl p-1.5 w-36">show carts</button>
            </div>
        </div>
    );
};

export default UserComponent;