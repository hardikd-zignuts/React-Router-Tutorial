import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {

    const [userName, setUserName] = useState(null)

    const Login = (userName) => {
        setUserName(userName)
        
    }

    const Logout = () => {
        setUserName(null)
    }

    return (
        <AuthContext.Provider value={{ userName, Login, Logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}