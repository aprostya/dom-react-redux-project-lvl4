import React, {useContext} from "react";
import {Route, Routes, Navigate} from "react-router-dom";
import {ROUTER_ENUMS} from "./utils/enums";
import {AuthPage} from "./pages/AuthPage";
import {ErrorPage} from "./pages/ErrorPage";
import AuthContext from "./context/auth-context";
import Chat from "./modules/Chat/Chat";

const HomePage = () => {
  const {authKey} = useContext(AuthContext);

  return authKey ? (
    <Chat />
  ) : (
    <Navigate to={ROUTER_ENUMS.LOGIN} replace={true} />
  );
};

const App = () => {
  return (
    <>
      <Routes>
        <Route
          path={ROUTER_ENUMS.REGISTER}
          element={<AuthPage pageState="register" />}
        />
        <Route
          path={ROUTER_ENUMS.LOGIN}
          element={<AuthPage pageState="login" />}
        />
        <Route path={ROUTER_ENUMS.HOME} element={<HomePage />} />
        <Route path={ROUTER_ENUMS.NOT_FOUND} element={<ErrorPage />} />
      </Routes>
    </>
  );
};

export default App;
