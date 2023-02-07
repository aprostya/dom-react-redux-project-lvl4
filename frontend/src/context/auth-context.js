import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import useHttp from '../hooks/use-http';
import { useLocalStorageState } from '../hooks/use-local-storage';
import { ROUTER_ENUMS } from '../utils/enums';

const AuthContext = React.createContext(({
    onLogout: () => { },
    onLogin: (userName, password) => { },
    authKey: null
}))

export const AuthContextProvider = props => {
    const { isLoading, error, sendRequest, data } = useHttp();
    const [authKey, setAuthKey] = useLocalStorageState('token', data);

    const navigate = useNavigate()

    useEffect(() => {
        if (data?.token || authKey) {
            setAuthKey(data?.token ?? authKey);
            navigate(ROUTER_ENUMS.HOME)
        }
    }, [data, authKey, error, navigate, setAuthKey]);

    const logoutHandler = () => {
        setAuthKey(null);
        setIsLoggedIn(false);
        navigate(ROUTER_ENUMS.LOGIN)
    };

    const loginHandler = (username, password) => {
        //Todo url в константу
        sendRequest(
            { url: "/api/v1/login", body: { username, password } },
        )
    }

    return (
        <AuthContext.Provider value={{ isLoading, error, authKey, onLogout: logoutHandler, onLogin: loginHandler }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext;
