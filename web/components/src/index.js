import React from "react"

const Header = ({ text = "" }) => {
    return (
        <h1>Shared header library {text}</h1>
    )
}

export {
    Header
}