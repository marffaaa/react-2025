import { useContext } from "react";
import { Context } from "../context/Provider";


const AA = () => {
    const {theme, changeTheme} = useContext(Context)
    
    function handlerOnClick() {
        changeTheme(theme === "light" ? "dark" : "light");
    }

    return (
        <div>
            <button onClick={handlerOnClick}>
                {theme === "light" ? <img src='https://img.icons8.com/?size=100&id=15352&format=png&color=000000'/> :
                    <img src='https://img.icons8.com/?size=100&id=64342&format=png&color=000000'/>}
            </button>
        </div>
    );
};

export default AA;
