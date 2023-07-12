import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";

export const MessagesInfo = () => {
    const {messages, currChannel} = useSelector((state: RootState) => state.channels);
  
    return (
        <div className="p-4 flex justify-between border-b-2 bg-emerald-100 flex-col">
            <span className="font-bold text-sm text-lime-950 mb-1">{`# ${currChannel?.name}`}</span>
            <span className="text-xs text-lime-950">{`Messages: ${messages.length}`}</span>
        </div>
    );
};
