import React from 'react'; 
import $ from 'jquery';
import { routes, responsiveBreaks } from '../../Shared/constants';
import menuIconImg from './menu.png';
import "./Navigation.css";
import { Link } from 'react-router-dom';

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

//resolve o bug do menu não desaparecer ao aumentar a tela com o menu baixado.
window.addEventListener('resize', ()=> {
    if( $(window).width() > responsiveBreaks.forTabletPortrait.max ) {
        if($(".mobile-menu").css('display') !== 'none') {
            $(".mobile-menu").css('display', 'none');
        }
    }
});

function NavigationList() {
    return (
        <ul>
            <li><Link to={routes.home}>home</Link></li>
            <li className="autoscroll"><Link to="#service">serviços</Link></li>
            <li><Link to={routes.criacaoDeSites}>WebSite</Link></li>
            <li><Link to={routes.criacaoDeRobos}>Robotize</Link></li>
        </ul>
    );
}

function Navigation () {
    return (
        <div className="navigation">
            <div className="menuIcon">
                <img 
                    
                    src={menuIconImg} 
                    alt="menu" 
                    onClick={handleMenuIconClick} 
                    onMouseEnter={handleMenuIconOnMouseEnter}
                />
            </div>

            <nav id="nav-menu" className="desk-menu">
                < NavigationList />
            </nav>
            <nav id="nav-menu" className="mobile-menu" 
                onMouseLeave={handleNavOnMouseLeave}
                onClick={handleNavOnMouseLeave}>
                < NavigationList />
            </nav>
        </div>
    );
}

export default Navigation;