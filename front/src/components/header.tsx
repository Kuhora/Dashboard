import React, { useState } from 'react';
import '../styles/header.css';
import Relogin from './clock';

function Header() {
    const [timeInt, setTimeInt] = useState('monthly');
    const [showTimeOptions, setShowTimeOptions] = useState(false);
    const [userMenuOpen, setUserMenuOpen] = useState(false);

    const handleTimeChange = (newTime) => {
        setTimeInt(newTime);
        setShowTimeOptions(false);
    };

    const toggleUserMenu = () => {
        setUserMenuOpen(!userMenuOpen);
    };

    return (
        <header>
            <div className="noir">
                <h1>NOIR FINANCE</h1>
                <p>Corporate Dashboard</p>
            </div>
                <nav className="links">
                    <a href="/">Overview</a>
                    <a href="transactions">Transactions</a>
                    <a href="reports">Reports</a>
                    <a href="goals">Goals</a>
                    <a href="settings">Settings</a>
                </nav>
            <div className="interaction">
                <div className="ConteinerTimer" onMouseEnter={() => setShowTimeOptions(true)} onMouseLeave={() => setShowTimeOptions(false)}>
                    <div className="currentTime">
                        {timeInt.charAt(0).toUpperCase() + timeInt.slice(1)} <span>▼</span> 
                        </div>
                    {showTimeOptions && (
                        <div className="yearAnalysis">
                            <div className="timeOption" onClick={() => handleTimeChange('monthly')}>Monthly</div>
                            <div className="timeOption" onClick={() => handleTimeChange('quarterly')}>Quarterly</div>
                            <div className="timeOption" onClick={() => handleTimeChange('annual')}>Annual</div>
                        </div>
                    )}
                </div>
                <div className="userSettings" onMouseEnter={() => setUserMenuOpen(true)} onMouseLeave={() => setUserMenuOpen(false)}>
                    <button className="userButton" onClick={toggleUserMenu}> User </button>
                    {userMenuOpen && (
                        <div className="userDropdown">
                            <a href="profile">Profile</a>
                            <button className="ButtonLogout" onClick={() => setUserMenuOpen(false)}> Logout </button>
                        </div>
                    )}
                </div>
                <Relogin />
            </div>
        </header>
    );
}

export default Header;
