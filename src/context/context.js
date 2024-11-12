import { createContext , useState } from "react";
export const Store = createContext({})
export default function ModeProvider({children}){
    const value = localStorage.getItem('mode') ? localStorage.getItem('mode') : 'dark';
    const [mode , setMode] = useState(value)
    return(
        <Store.Provider value={{mode , setMode}}>
             {children}
        </Store.Provider>
    )
}