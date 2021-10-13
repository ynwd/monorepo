import React from "react"
import { Button } from "./stories/Button.jsx"

const Header = ({ text = "" }) => {
    return (
        <h1>Shared header library {text}</h1>
    )
}

export {
    Button,
    Header
}