import React from 'react';
import logoSVG from './logo_teratech_branco_linha.svg';
import './Logo.css';
import { routes } from '../../Shared/constants';
import { Link } from 'react-router-dom';

/* no arquivo svg, viewBox é usado para cortar o SVG: 
   1 - pos x dentro dentro da view, 
   2 - pos y dentro da view, 
   3 - tamanho do counteudo interno da view, 
   4 - altura da view */

function Logo() {
    return (
        <div className="logo" >
            <Link to={routes.home} >
                <img src={logoSVG} alt="logo" />
            </Link>
        </div>
    );
}

export default Logo;
