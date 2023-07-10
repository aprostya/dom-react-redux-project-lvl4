import React from "react";

type Button = {
    text: string;
  };

export const Button = ({text}: Button) => {
    return (
        <button
            type="submit"
            className="w-full p-3 mt-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded shadow"
        >
            {text}
        </button>
    );
};
