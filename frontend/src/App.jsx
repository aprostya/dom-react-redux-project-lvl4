import {Route, Routes} from "react-router-dom";
import {ROUTER_ENUMS} from "./utils/enums";
import {AuthPage} from "./pages/AuthPage";
import {ErrorPage} from "./pages/ErrorPage";
import {HomePage} from "./pages/HomePage";

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
