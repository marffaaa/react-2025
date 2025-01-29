import { createContext } from "react";

type ContextType= {
    theme : string,
    changeTheme : (theme:string)=> void
}

export const defaultValue = {
    theme:'light',
    changeTheme: (theme: string) => console.log(theme)
}

export const Context = createContext<ContextType>(defaultValue)