import { useState } from "react";
import { Context } from "../context/Provider";
import A from "./A";
import B from "./B";


const Root = () => {

    const [themeStyle, setThemeStyle] = useState<string>('light')
    return (
        <div>
            <Context.Provider value = {{
                theme:themeStyle,
                changeTheme: (themeStyle: string) => setThemeStyle(themeStyle)
            }}>
            <A/>
            <B/>
            </Context.Provider>
        </div>
    );
};

export default Root;
