import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const AuthContext = React.createContext(({
    isLoggedIn: true,
    onLogout: () => { },
    onLogin: () => { }
}))

export const AuthContextProvider = props => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const navigate = useNavigate()

    useEffect(() => {
        const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');

        if (storedUserLoggedInInformation === '1') {
            setIsLoggedIn(true);
        }
    }, [isLoggedIn]);

    const logoutHandler = () => {
        localStorage.removeItem('isLoggedIn');
        setIsLoggedIn(false);
    };

    const loginHandler = () => {
        alert('login')
        localStorage.setItem('isLoggedIn', '1');
        setIsLoggedIn(true);
        navigate('/home')
    }

    return (
        <AuthContext.Provider value={{ isLoggedIn: isLoggedIn, onLogout: logoutHandler, onLogin: loginHandler }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext;
