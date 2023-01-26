import {Link, Route, Routes} from "react-router-dom";
import AuthPage from "./components/Auth";
import ErrorPage from "./components/Error";

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
