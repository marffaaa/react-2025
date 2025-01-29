import { useContext } from "react";
import { Context } from "../context/Provider";
import '../styles/ThemeStyle.css'

const BA = () => {
    const {theme}= useContext(Context)
    return (
        <div className='flex justify-center content-center mt-6'>
            <div className={theme}>
               <h1 className='text-6xl font-semibold'> BA Component</h1>
            </div>
        </div>

    );
};

export default BA;
