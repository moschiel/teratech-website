import React from 'react'; 
// style
import './Header.css';
// components
import Logo from './Logo/Logo';
import Navigation from './Navigation/Navigation';

function Header() {
    return (
        <header className="header">
            <div className="head-container center">
                <Logo />
                <Navigation />
            </div>
        </header>
    );
}

export default Header;