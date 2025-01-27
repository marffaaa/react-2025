import { FC} from "react";
import { IUser } from "../../models/IUser";


type UserTypeProps = {
    item: IUser;
};

const UserComponent: FC<UserTypeProps> = ({ item }) => {

    return (
        <div className="flex justify-center w-screen my-8">
            <div className="flex flex-col w-1/3 h-auto bg-slate-300 rounded-xl gap-y-2.5 justify-center p-4">
                <h2 className="font-bold text-lg">
                    {item.id}. {item.name}
                </h2>
                <p>Username: {item.username}</p>
                <p>Email: {item.email}</p>
                <p>Phone: {item.phone}</p>

            </div>
        </div>
    );
};

export default UserComponent;