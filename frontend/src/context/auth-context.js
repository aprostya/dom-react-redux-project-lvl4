import React, { useEffect } from 'react';
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

    const navigate = useNavigate();

    useEffect(() => {
        if (data?.token) {
            console.log('trigger');
            setAuthKey(data?.token);
            navigate(ROUTER_ENUMS.HOME)
        }
    }, [data, error, setAuthKey]);

    const logoutHandler = () => {
        setAuthKey(null);
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
