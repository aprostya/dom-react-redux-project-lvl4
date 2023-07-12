import React, { useEffect, useContext } from "react";
import { ChannelItem } from "./ChannelItem";
import { useSelector, useDispatch } from "react-redux";
import { fetchChatData } from "../../slices/channelsSlice";
import { AppDispatch } from "../../../../shared/slices/type";
import AuthContext from "../../../../context/auth-context";
import { RootState } from "../../../../store/store";
import { IChannel } from "../../types/types";
import { changeCurrentChannel } from "../../slices/channelsSlice";

export const ChannelsList = () => {
    const dispatch = useDispatch<AppDispatch>();
    const authCtx = useContext(AuthContext);   
    const {currChannel, list:channels} = useSelector((state: RootState) => state.channels);
    const channelClass = "channels-item flex flex-row mt-2 cursor-pointer pl-4 pr-4 pt-1 pb-1";
    const selectedChannelClass = `${channelClass} bg-teal-600 font-semibold text-white`;

    useEffect(() => { 
        dispatch(fetchChatData(authCtx.authKey));
    }, []);

    useEffect(() => { 
        dispatch(changeCurrentChannel(channels[0]));
    }, [channels]);

    const handleItemClicked = (channel: IChannel) => {
        dispatch(changeCurrentChannel(channel));
    };

    const getClassName = (item: IChannel): string => {
        if(currChannel?.id === item.id) {
            return selectedChannelClass;
        }
        return channelClass;
    };

    return (
        <section className="flex flex-row items-center w-full border-b border-slate-300 w-full pb-4">
            <article className="channel-list-block flex flex-col self-center w-full">
                <h2 className="text-sm font-bold text-lime-950 pl-4 pr-4 pt-4">Channels List</h2>
                <ul className="list-none">
                    {channels.length > 0 &&
                         channels.map((item) => <li key={item.id} onClick={()=>handleItemClicked(item)}>
                             <ChannelItem name={item.name} channelClassName={getClassName(item)} />
                         </li>)}
                </ul>
            </article>
        </section>
    );
};
