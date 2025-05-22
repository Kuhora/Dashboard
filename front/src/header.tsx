import React from "react"
import '../styles/header.css' 
import Clock from './clock'

function Header() {
    return (
    <header>
        <div className="marca">
            <h1>NOIR FINANCE</h1>
            <p>Corporate Dashboard</p>
        </div>
        <div id="timer">
            <Clock />
        </div>
    </header>
    )
}

export default Header

