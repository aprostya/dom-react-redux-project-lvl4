import React, { useEffect, useState, useContext} from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { MessageItem } from "./MessageItem";
import { MessagesInfo } from "./MesssagesInfo";
import { IMessage } from "../types/types";
import AuthContext from "../../../context/auth-context";
import { Button } from "../../../components/ui/Button";
import { BUTTON_TYPES } from "../../../shared/utils/enums";

export const MessageLayout = () => {
    const {list: messages} = useSelector((state: RootState) => state.messages);
    const {currChannel, list:channels} = useSelector((state: RootState) => state.channels);
    const {username} = useContext(AuthContext);
    
    const initialState: IMessage = {
        body: "",
        channelId: currChannel?.id,
        id: 1,
        username,
    };

    const [value, setMessage] = useState("");
    
    useEffect(() =>{
        console.log(channels);
        console.log(username);
    });
  
    return (
        <div className="flex justify-between flex-col h-full">
            <MessagesInfo/>
            <div className="flex flex-col">
                <MessageItem />
                <div className="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4">
                    <div className="flex-grow ml-4">
                        <div className="relative w-full">
                            <input value={value} onChange={e=> setMessage(e.target.value)} type="text" className="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"/>
                            <Button type={BUTTON_TYPES.SEND} text=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

