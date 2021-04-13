import React from 'react';
import { routes } from '../../components/Shared/constants';

// import basic style
import '../../components/BaseStyle/Base.css'
// import components
import Header from '../../components/Header/Header';
import Banner from '../../components/Banner/Banner';
import Advantages from '../../components/Advantages/Advantages';
import DescriptionServices from '../../components/DescriptionServices/DescriptionServices';


function WebSites() {
    return (
        <div>
            <Header />
            <Banner route={routes.criacaoDeSites}/>
            <Advantages route={routes.criacaoDeSites}/>
            <DescriptionServices route={routes.criacaoDeSites} />
        </div>
    );
}

export default WebSites;