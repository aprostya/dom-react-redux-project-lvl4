import React from "react";


//todo types
export const FormContainer = (props:any) => {
    return (
        <div className="bg-gray-200 font-sans text-gray-700 w-full mx-auto h-screen">
            <div className="max-w-md w-full mx-auto p-8">
                <h1 className="text-4xl text-center mb-8 font-thin">Login page</h1>
                <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
                    <section className="p-8">{props.children}</section>
                </div>
            </div>
        </div>
    );
};
