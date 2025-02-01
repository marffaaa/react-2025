export const handleLogin = async (
    username: string,
    password: string,
    onLoginSuccess: () => void,
    setErrorMessage: React.Dispatch<React.SetStateAction<string | null>>,
    setSuccessMessage: React.Dispatch<React.SetStateAction<string | null>>
) => {
    setErrorMessage(null);
    setSuccessMessage(null);

    if (!username || !password) {
        setErrorMessage("Please enter both username and password.");
        return;
    }

    try {
        const response = await fetch("https://dummyjson.com/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                username,
                password,
                expiresInMins: 30,
            }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            setErrorMessage(errorData.message || "Login failed. Please try again.");
            return;
        }

        const data = await response.json();
        console.log("Login successful:", data);

        const accessToken = data.accessToken;
        localStorage.setItem("accessToken", accessToken);
        onLoginSuccess();

        setSuccessMessage("Login successful! Welcome, " + data.username);

    } catch (err) {
        console.error(err);
        setErrorMessage("An error occurred during login.");
    }
};
