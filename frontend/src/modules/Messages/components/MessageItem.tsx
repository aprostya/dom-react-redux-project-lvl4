import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";

export const MessageItem = () => {  
    return (
        <div className="grid grid-cols-5 gap-y-2 fit-content(20%)">
            <div className="col-start-1 col-end-8 p-3 rounded-lg">
                <div className="flex flex-row items-center">
                    <div className="relative ml-3 text-sm bg-white py-2 px-4 drop-shadow rounded-xl">
                        <span className="message-text">Приветики</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
