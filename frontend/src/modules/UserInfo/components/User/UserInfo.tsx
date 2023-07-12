import React from "react";

export const UserInfo = () => {
    return (
        <section className="flex flex-row items-center w-full p-4 border-b border-slate-300">
            <div className="w-8 h-8 mr-2 rounded-full bg-white overflow-hidden">
                <img src="https://robohash.org/stefan-one" alt="Avatar" className="h-full w-full"/>
            </div>
            <article className="user-info-block flex flex-col self-center">
                <span className="text-sm font-bold text-lime-950 mb-1">Mr Nobody</span>
                <div className="user-status flex flex-row items-center">
                    <span className="text-sm font-semibold text-lime-950 w-2 h-2 inline-block rounded-full bg-green-600 mr-1"></span>
                    <span className="text-xs text-lime-950">
                        Frontender
                    </span>
                </div>
            </article>
        </section>
    );
};
