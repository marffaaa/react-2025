import { useState } from "react";
import useAuth from "../components/auth/useAuth";
import AuthComponent from "../components/auth/AuthComponent";


const AuthPage = () => {
    const { isAuthenticated } = useAuth();
    const [isLoginSuccessful, setIsLoginSuccessful] = useState(false);

    const handleLoginSuccess = () => {
        setIsLoginSuccessful(true);
    };

    return (
        <div className="auth-page flex justify-center items-center h-screen bg-red-50 p-10 border-t-2 border-red-950">
            <div className="auth-component bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h1 className="text-3xl font-semibold text-center mb-6">Login to Your Account</h1>

                {isAuthenticated && isLoginSuccessful ? (
                    <p className="text-green-500 text-center">You have successfully logged in!</p>
                ) : (
                    <AuthComponent onLoginSuccess={handleLoginSuccess} />
                )}
            </div>
        </div>
    );
};

export default AuthPage;
