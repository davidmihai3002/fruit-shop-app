import { createContext, useState } from "react";

export interface UserContextProps {
    user: string,
    setUser: React.Dispatch<React.SetStateAction<string>>
}

export const UserContext = createContext<UserContextProps | null>(null);

export const UserContextProvider = ({children}: {children: React.ReactNode}) =>{
    const [user, setUser] = useState<string>("")
    const toExport = {
        user,
        setUser
    }
    return <UserContext.Provider value={toExport}>
        {children}
    </UserContext.Provider>
}