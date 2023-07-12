import React from "react";
import { useContext } from "react";
import AuthContext from "../../context/auth-context";
import { UserInfo } from "../../modules/UserInfo/index";
import { ChannelsList } from "../../modules/Channels/index";
import { MessageLayout } from "../../modules/Messages";


const ChatPage = () => {
    const authCtx = useContext(AuthContext);    
    return (
        <div>
            <button onClick={authCtx.onLogout}>Logout</button>
            <div className="flex h-screen antialiased text-gray-800 w-full">
                <div className="flex flex-col bg-green-200 flex-shrink-0 w-1/5">
                    <UserInfo/>
                    <ChannelsList />
                </div>
                <div className="flex flex-col flex-auto w-4/5 flex mb-4">
                    <MessageLayout/>
                    <div className="flex flex-col flex-auto w-4/5 flex mb-4 justify-end">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatPage;
