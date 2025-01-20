import { useEffect } from "react";
import { login } from "../services/api.service";


const LoginPage = () => {
    useEffect(() => {
        login({
            username: 'emilys',
            password: 'emilyspass',
            expiresInMins: 30
        })

    }, []);
    return (
        <div>

        </div>
    );
};

export default LoginPage;
