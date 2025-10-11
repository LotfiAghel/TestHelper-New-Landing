import { User } from "@/types";
import { VerifyCookie } from "@/utils/login";
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from "react";

const userContext = createContext<{
    user: User | null,
    setUser: Dispatch<SetStateAction<User | null>>,
}>({
    user: null,
    setUser: () => { },
});

export const getUserContext = () => useContext(userContext);

const UserContextProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    useEffect(() => {
        try {
            VerifyCookie(setUser);
        } catch (e) {
            // console.error(e)
        }
    }, []);
    return <userContext.Provider value={{ user, setUser }}>
        {children}
    </userContext.Provider>
}
export default UserContextProvider;