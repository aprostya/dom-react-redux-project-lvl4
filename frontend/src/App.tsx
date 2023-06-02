import React, {useContext} from "react";
import {Route, Routes, Navigate} from "react-router-dom";
import {RouterNames} from "./utils/enums";
import { AuthPage } from "./pages/Auth/Auth";
import ErrorPage from "./components/Error/404";
import AuthContext from "./context/auth-context";
import Chat from "./pages/Chat/Chat";

const HomePage = () => {
    const {authKey} = useContext(AuthContext);

    return authKey ? (
        <Chat />
    ) : (
        <Navigate to={RouterNames.LOGIN} replace={true} />
    );
};

const App = () => {
    return (
        <>
            <Routes>
                <Route
                    path={RouterNames.REGISTER}
                    element={<AuthPage pageState="register" />}
                />
                <Route
                    path={RouterNames.LOGIN}
                    element={<AuthPage pageState="login" />}
                />
                <Route path={RouterNames.HOME} element={<HomePage />} />
                <Route path={RouterNames.NOT_FOUND} element={<ErrorPage />} />
            </Routes>
        </>
    );
};

export default App;
