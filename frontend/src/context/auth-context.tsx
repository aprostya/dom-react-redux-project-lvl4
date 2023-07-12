import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useHttp from "../shared/hooks/use-http";
import { PAGE_ROUTES } from "../shared/utils/enums";


//todo fix IContext
interface IContext {
    onLogout: () => any;
    onLogin: (userName: string, password: string) => any;
    authKey?: string | null;
    error?: any;
    username: string | null;
}

const AuthContext = React.createContext<IContext>(({
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onLogout: () => { },
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onLogin: (userName: string, password: string) => { },
    authKey: null,
    username: null
}));

export const AuthContextProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    const { isLoading, error, sendRequest, data, authKey, setAuthKey, username } = useHttp();

    const navigate = useNavigate();

    useEffect(() => {
        if (authKey) {
            navigate(PAGE_ROUTES.HOME);
        }
    }, [data, error, setAuthKey]);

    const logoutHandler = () => {
        setAuthKey(null);
        navigate(PAGE_ROUTES.LOGIN);
    };

    const loginHandler = (username: string, password: string) => {
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
        onLogin: loginHandler,
        username
    };

    return (
        <AuthContext.Provider value={contextValues}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
