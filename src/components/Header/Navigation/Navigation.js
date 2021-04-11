import React from 'react'; 
import $ from 'jquery';
import menuIconImg from './menu.png';
import "./Navigation.css";

//evento de clique do menu, que executa o slideToogle
function handleMenuIconClick () {
    $(".mobile-menu").slideToggle();
}
//evento acionado quando mouse entra no icone do menu-mobile, que executa o slideDown
function handleMenuIconOnMouseEnter () {
    $(".mobile-menu").slideDown();
}
//evento acionado quando o mouse sai da elemento '.navigation', que executa o slideUp
function handleNavOnMouseLeave () {
    $(".mobile-menu").slideUp();
}

//troca o modo do menu, de acordo com o tamanho atual da tela
function setMenuMode() {
    if($(window).width() < 768){
        $('#nav-menu').removeClass('desk-menu');
        $('#nav-menu').addClass('mobile-menu');
    }else {
        $('#nav-menu').removeClass('mobile-menu');
        $('#nav-menu').addClass('desk-menu');
    }
}
//evento acionado quando a tela muda de tamanho 
$(window).resize(() => {
    setMenuMode();
});



function Navigation () {
    //useEffect executa depois do elemento ser renderizado na tela
    React.useEffect( () => {
        setMenuMode();
    });

    return (
        <div className="navigation"  onMouseLeave={handleNavOnMouseLeave}>
            <img 
                className="menu" 
                src={menuIconImg} 
                alt="menu" 
                onClick={handleMenuIconClick} 
                onMouseEnter={handleMenuIconOnMouseEnter}
            />

            <nav id="nav-menu">
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