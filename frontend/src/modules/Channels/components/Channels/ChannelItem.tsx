import React from "react";

interface IProps {
    channelClassName: string,
    name: string
}

export const ChannelItem = ({channelClassName, name}: IProps) => {
    return (
        <>
            <div className={channelClassName}>
                <span className="text-sm text-lime-950 mr-1 self-center">#</span>
                <span className="text-sm text-lime-950">{name}</span>
            </div>
        </>
    );
};
