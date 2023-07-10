import React from "react";
import { useContext } from "react";
import AuthContext from "../../context/auth-context";
import { Chat } from "../../modules/Chat";


const ChatPage = () => {
    const authCtx = useContext(AuthContext);    
    return (
        <div>
            <button onClick={authCtx.onLogout}>Logout</button>
            <Chat/>
        </div>
    );
};

export default ChatPage;
