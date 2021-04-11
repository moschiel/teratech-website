import React from 'react'; 
import $ from 'jquery';
import menuIconImg from './menu.png';
import "./Navigation.css";

//eventos do icone de menu
function handleMenuIconClick () {
    $(".mobile-menu").slideToggle();
}
function handleMenuIconOnMouseEnter () {
    $(".mobile-menu").slideDown();
}
//eventos para todo o menu inteiro
function handleNavOnMouseLeave () {
    $(".mobile-menu").slideUp();
}

function Navigation () {
    return (
        <div className="navigation"  onMouseLeave={handleNavOnMouseLeave}>
            <nav className="desk-menu">
                <ul>
                    <li><a href="/">home</a></li>
                    <li className="autoscroll"><a href="#service">serviços</a></li>
                    <li><a href="/criacao-de-sites">WebSite</a></li>
                    <li><a href="/criacao-de-robos">Robotize</a></li>
                </ul>
            </nav>
    
            <img 
                className="menu" 
                src={menuIconImg} 
                alt="menu" 
                onClick={handleMenuIconClick} 
                onMouseEnter={handleMenuIconOnMouseEnter}
            />
            
            <nav className="mobile-menu" >
                <ul>
                    <li><a href="/">home</a></li>
                    <li className="autoscroll"><a href="#service">serviços</a></li>
                    <li><a href="/criacao-de-sites">WebSite</a></li>
                    <li><a href="/criacao-de-robos">Robotize</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navigation;