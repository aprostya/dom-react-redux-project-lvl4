import React from "react";
import { UserInfo } from "../UserInfo/UserInfo";
import { ChannelsList } from "../ChannelsList/ChannelsList";

export const Chat = () => {
    return (
        <div className="flex h-screen antialiased text-gray-800 w-full">
            <div className="flex flex-col bg-green-200 flex-shrink-0 w-1/5">
                <UserInfo/>
                <ChannelsList />
            </div>
            <div className="flex flex-col flex-auto w-4/5 p-6"></div>
        </div>
    );
};
