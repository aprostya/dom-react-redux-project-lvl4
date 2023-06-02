import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useHttp from "../hooks/use-http";
import { RouterNames } from "../utils/enums";

interface IContext {
    onLogout: () => any;
    onLogin: (userName: string, password: string) => any;
    authKey?: string | null;
    error?: any
}

const AuthContext = React.createContext<IContext>(({
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onLogout: () => { },
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onLogin: (userName, password) => { },
    authKey: null
}));

export const AuthContextProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    const { isLoading, error, sendRequest, data, authKey, setAuthKey } = useHttp();

    const navigate = useNavigate();

    useEffect(() => {
        if (authKey) {
            navigate(RouterNames.HOME);
        }
    }, [data, error, setAuthKey]);

    const logoutHandler = () => {
        setAuthKey(null);
        navigate(RouterNames.LOGIN);
    };

    const loginHandler = (username, password) => {
        //Todo url в константу
        sendRequest(
            { url: "/api/v1/login", body: { username, password } },
        );
    };

    const contextValues = {
        isLoading, 
        error,
        authKey,
        onLogout: logoutHandler,
        onLogin: loginHandler
    };

    return (
        <AuthContext.Provider value={contextValues}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
