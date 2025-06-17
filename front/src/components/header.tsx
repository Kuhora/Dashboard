import React, { useState } from 'react';
import '../styles/header.css';
import Relogin from './clock';

function Header() {
    const [userMenuOpen, setUserMenuOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleUserMenu = () => {
        setUserMenuOpen(!userMenuOpen);
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <header className={mobileMenuOpen ? 'menuOpen' : ''}>
            <div className="noir">
                <h1>NOIR FINANCE</h1>
                <p>Corporate Dashboard</p>
            </div>
            
            <button className="menuToggle" onClick={toggleMobileMenu}>
                ☰
            </button>
            
            <nav className="links">
                <a href="/">Overview</a>
                <a href="transactions">Transactions</a>
                <a href="reports">Reports</a>
                <a href="goals">Goals</a>
                <a href="settings">Settings</a>
            </nav>
            
            <div className="interaction">
                <div className="userSettings" 
                        onMouseEnter={() => setUserMenuOpen(true)} 
                        onMouseLeave={() => setUserMenuOpen(false)}>
                    <button className="userButton" onClick={toggleUserMenu}>
                        User
                    </button>
                    {userMenuOpen && (
                        <div className="userDropdown">
                            <a href="profile">Profile</a>
                            <button className="ButtonLogout" onClick={() => setUserMenuOpen(false)}>
                                Logout
                            </button>
                        </div>
                    )}
                </div>
                <Relogin />
            </div>
        </header>
    );
}

export default Header;