/* eslint-disable react/prop-types */

import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLogin, setIsLogin] = useState(()=> {
        const store = localStorage.getItem("isLogin")
        return store==="true";
    })
    //seteamos los valores//
    useEffect(() => {
        localStorage.setItem("isLogin", isLogin)
    },[isLogin]);
    return (
        <AuthContext.Provider value={{ isLogin, setIsLogin }}>
            {children}
        </AuthContext.Provider>
    );
};
