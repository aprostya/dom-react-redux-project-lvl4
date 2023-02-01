import React, {useContext} from "react";
import {Route, Routes, Navigate} from "react-router-dom";
import AuthPage from "./modules/AuthForm/components/Form/Form";
import ErrorPage from "./components/Error/Error";
import AuthContext from "./context/auth-context";
import Chat from "./modules/Chat/Chat";

const HomePage = () => {
  const {isLoggedIn} = useContext(AuthContext);

  return isLoggedIn ? <Chat /> : <Navigate to="/login" replace={true} />;
};

const App = () => {
  return (
    <>
      {/* <nav>
        <div className="text-3xl font-bold underline">
          <Link to="/404">Error Page</Link>
        </div>
        <div>
          <Link to="/login">Auth Page</Link>
        </div>
      </nav> */}
      <Routes>
        <Route path="/register" element={<AuthPage pageState="register" />} />
        <Route path="/login" element={<AuthPage pageState="login" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};

export default App;
