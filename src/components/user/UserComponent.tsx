import { memo } from "react";


const UserComponent = memo(() => {
    console.log('user')
    return (
        <div>
            user
        </div>
    );
})

export default UserComponent;
