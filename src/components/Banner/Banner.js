import React from 'react';
import BannerHome from './BannerHome/BannerHome';
import BannerServices from './BannerServices/BannerServices';

//RETORNA O BANNER ESCOLHIDO
function Banner(props) {
    if(props.route === "/")
        return ( <BannerHome /> );
    else {
        return ( <BannerServices route={props.route}/>)
    }
}

export default Banner;