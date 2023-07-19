import React from "react";
import { BUTTON_TYPES } from "../../shared/utils/enums";

type Button = {
    text: string;
    type?: BUTTON_TYPES;
    onClick?: () => void;
  };


const getBtnClassName = (type = BUTTON_TYPES.DEFAULT) => {
    let className: string;
    if(type===BUTTON_TYPES.DEFAULT) {
        return className = "w-full p-3 mt-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded shadow";
    } else {
        return className = "absolute flex items-center justify-center h-full w-12 right-0 top-0 text-gray-400 hover:text-gray-600";
    }
};

export const Button = ({text,type, onClick}: Button) => {
    return (
        <button
            type="submit"
            className={getBtnClassName(type)}
            onClick={onClick}

        >
            {type === BUTTON_TYPES.SEND ?
                <div className="icon-container -rotate-90">
                    {/* //todo svg отдельно все */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="rgb(6 95 70)">
                        <g>
                            <path d="M12,2A10,10,0,1,0,22,12,10.011,10.011,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,12,20Z"/>
                            <polygon points="13 13.586 13 8 11 8 11 13.586 8.707 11.293 7.293 12.707 12 17.414 16.707 12.707 15.293 11.293 13 13.586"/>
                        </g>
                    </svg>
                </div> : null}
            {text}
        </button>
    );
};
