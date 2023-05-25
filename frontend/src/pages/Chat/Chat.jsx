import {useContext} from "react";
import AuthContext from "../../context/auth-context";

const Chat = () => {
  const authCtx = useContext(AuthContext);
  return (
    <div>
      Chat page <button onClick={authCtx.onLogout}>Logout</button>
    </div>
  );
};

export default Chat;
