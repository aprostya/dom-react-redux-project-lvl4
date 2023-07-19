import React, { useEffect, useState, useContext} from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { MessageItem } from "./MessageItem";
import { MessagesInfo } from "./MesssagesInfo";
import { IMessage } from "../types/types";
import AuthContext from "../../../context/auth-context";
import { Button } from "../../../components/ui/Button";
import {addNewMessage} from  "../slices/messagesSlice";
import { BUTTON_TYPES } from "../../../shared/utils/enums";
import { AppDispatch } from "../../../shared/slices/type";

export const MessageLayout = () => {
    const {list: messages} = useSelector((state: RootState) => state.messages);
    const {currChannel} = useSelector((state: RootState) => state.channels);
    const [message, setMessage] = useState("");
    const {username} = useContext(AuthContext);
    const dispatch = useDispatch<AppDispatch>();
    
    const initialState: IMessage = {
        body: "",
        channelId: currChannel?.id,
        id: 1,
        username,
    };

    const sendMessage = () => {
        dispatch(addNewMessage({
            ...initialState,
            body: message
        }));
        setMessage("");
    };

    useEffect(() => {
        const keyDownHandler = event => {
            setMessage(event.target.value);
    
            if (event.key === "Enter") {
                event.preventDefault();
                sendMessage();
            }
        };
    
        document.addEventListener("keydown", keyDownHandler);
    
        return () => {
            document.removeEventListener("keydown", keyDownHandler);
        };
    }, [message]);
  
    return (
        <div className="flex justify-between flex-col h-full">
            <MessagesInfo/>
            <div className="flex flex-col">
                {messages.map((message, index) => <MessageItem text={message.body} key={index}/>)}
                <div className="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4">
                    <div className="flex-grow ml-4">
                        <div className="relative w-full">
                            {/* //TODO input в ui */}
                            <input value={message} onChange={e=> setMessage(e.target.value)} type="text" className="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"/>
                            <Button type={BUTTON_TYPES.SEND} text="" onClick={() => sendMessage()}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

