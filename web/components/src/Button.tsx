import React from "react"

export const Button = ({ text = "" }) => {
    return (
        <button className="p-2 pl-5 pr-5 bg-red-500 text-gray-100 text-lg rounded-lg focus:border-4 border-blue-300" >
            {text}
        </button>
    )
}