import axios from "axios";


export const getAuthToken = (): string | null => {
    return localStorage.getItem("accessToken");
};

// Створення екземпляру axios з авторизацією
export const getAuthAxios = () => {
    const token = getAuthToken();
    return axios.create({
        headers: {
            "Content-Type": "application/json",
            "Authorization": token ? `Bearer ${token}` : "",
        },
    });
};
