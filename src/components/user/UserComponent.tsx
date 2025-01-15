import { FC } from "react";
import { IUser } from "../../models/IUser";
import { Link, useNavigate } from "react-router-dom";

type UserTypeProps={
    item: IUser
}

const UserComponent:FC<UserTypeProps> = ({item}) => {

    const navigate = useNavigate()// для перенесення інформації через кнопку
    const handelOnClick = ()=>{
        navigate('posts/'+ item.id, {state:item})
    }
    return (
        <div>
            <Link to={'details'} state={
                item// те саме, що {{data:item}
            }>{item.username}</Link>
            {/*або через <button onClick={()=>{}}></button>*/}

            <button onClick={handelOnClick}>go to details</button>


        </div>
    );
};

export default UserComponent;