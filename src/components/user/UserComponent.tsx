import { FC} from "react";
import { IUser } from "../../models/user/IUser";

type UserTypeProps = {
    item: IUser;
};

const UserComponent: FC<UserTypeProps> = ({item }) => {

    return (
        <div className="flex justify-center w-screen my-8">
            <div className="flex flex-col w-1/3 h-auto bg-slate-300 rounded-xl gap-y-2.5 justify-center p-4 shadow-md">
                <h2 className="font-bold text-lg">
                    {item.id}. {item.firstName} {item.lastName}
                </h2>
                <p>Username: {item.username}</p>
                <p>Email: {item.email}</p>
                <p>Phone: {item.phone}</p>
                <p>Age: {item.age}</p>
                <p>Gender: {item.gender}</p>
                <p>Birthday date: {item.birthDate}</p>
                <p>Address: {item.address.country}, {item.address.city}</p>
            </div>
        </div>
    );
};

export default UserComponent;
