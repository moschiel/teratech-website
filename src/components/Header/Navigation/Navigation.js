import React from 'react'; 

import "./Navigation.css";

function Navigation () {
    return (
        <div className="navigation">
            <nav class="desk-menu">
            <ul>
                <li><a href="index.html">home</a></li>
                <li class="autoscroll"><a href="#service">serviços</a></li>
                <li><a href="./criacao-de-sites.html">WebSite</a></li>
                <li><a href="./criacao-de-robos.html">Robotize</a></li>
            </ul>
            </nav>
    
            <img class="menu" src="images/menu.png" alt="menu" />
            
            <nav class="mobile-menu">
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