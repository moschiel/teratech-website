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
            <nav class="desk-menu">
                <ul>
                    <li><a href="index.html">home</a></li>
                    <li class="autoscroll"><a href="#service">serviços</a></li>
                    <li><a href="./criacao-de-sites.html">WebSite</a></li>
                    <li><a href="./criacao-de-robos.html">Robotize</a></li>
                </ul>
            </nav>
    
            <img 
                class="menu" 
                src={menuIconImg} 
                alt="menu" 
                onClick={handleMenuIconClick} 
                onMouseEnter={handleMenuIconOnMouseEnter}
            />
            
            <nav class="mobile-menu" >
                <ul>
                    <li><a href="#home">home</a></li>
                    <li class="autoscroll"><a href="#service">serviços</a></li>
                    <li><a href="./criacao-de-sites.html">WebSite</a></li>
                    <li><a href="./criacao-de-robos.html">Robotize</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navigation;