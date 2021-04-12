import React from 'react';

// import basic style
import '../../components/BaseStyle/Base.css'
// import components
import Header from '../../components/Header/Header';
import Banner from '../../components/Banner/Banner';
import Advantages from '../../components/Advantages/Advantages';

function WebSites() {
    return (
        <div>
            <Header />
            <Banner route="/criacao-de-sites"/>
            <Advantages route="/criacao-de-sites"/>
        </div>
    );
}

export default WebSites;