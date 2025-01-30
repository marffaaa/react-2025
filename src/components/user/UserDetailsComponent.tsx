import { FC } from "react";
import { IUser } from "../../models/IUser";

type PropsType ={
    user: IUser
}

const UserDetailsComponent:FC<PropsType> = ({user}) => {
    return (
        <div>
            <h2>{user.id}: {user.firstName} {user.lastName}</h2>
            <p>Gender: {user.gender}</p>
            <p>Age: {user.age}</p>
            <p>Birth date: {user.birthDate}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Address: {user.address.country}, {user.address.city}</p>
            <p>University: {user.university}</p>
            <p>Blood group: {user.bloodGroup}</p>
            <p>Eye color: {user.eyeColor}</p>
            <p>Hair color: {user.hair.color}</p>
            <p>Height: {user.height}</p>
            <p>Weight: {user.weight}</p>
        </div>
    );
};

export default UserDetailsComponent;
