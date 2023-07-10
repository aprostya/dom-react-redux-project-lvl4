import React, {useContext} from "react";
import {Route, Routes, Navigate} from "react-router-dom";
import {PAGE_ROUTES} from "./shared/utils/enums";
import { AuthPage } from "./pages/Auth/Auth";
import ErrorPage from "./components/Error/404";
import AuthContext from "./context/auth-context";
import ChatPage from "./pages/Chat/Chat";

const HomePage = () => {
    const {authKey} = useContext(AuthContext);

    return authKey ? (
        <ChatPage />
    ) : (
        <Navigate to={PAGE_ROUTES.LOGIN} replace={true} />
    );
};

const App = () => {
    return (
        <>
            <Routes>
                <Route
                    path={PAGE_ROUTES.REGISTER}
                    element={<AuthPage pageState="register" />}
                />
                <Route
                    path={PAGE_ROUTES.LOGIN}
                    element={<AuthPage pageState="login" />}
                />
                <Route path={PAGE_ROUTES.HOME} element={<HomePage />} />
                <Route path={PAGE_ROUTES.NOT_FOUND} element={<ErrorPage />} />
            </Routes>
        </>
    );
};

export default App;
