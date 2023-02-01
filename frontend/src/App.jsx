import {Route, Routes} from "react-router-dom";
import AuthPage from "./modules/AuthForm/components/Form/Form";
import ErrorPage from "./components/Error";
import AuthContext from "./context/auth-context";

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
        <Route path="/login" element={<AuthPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};

export default App;
