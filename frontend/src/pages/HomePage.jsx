import {useContext} from "react";
import {Navigate} from "react-router-dom";
import {ROUTER_ENUMS} from "../utils/enums";
import AuthContext from "../context/auth-context";
import Chat from "../modules/Chat/Chat";

const HomePage = () => {
  const {authKey} = useContext(AuthContext);

  return authKey ? (
    <Chat />
  ) : (
    <Navigate to={ROUTER_ENUMS.LOGIN} replace={true} />
  );
};

export {HomePage};
