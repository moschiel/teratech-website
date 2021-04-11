import React from 'react';

// import basic style
import '../../components/BaseStyle/Base.css'
// import components
import Header from '../../components/Header/Header';
import Banner from '../../components/Banner/Banner';

function WebSites() {
    return (
        <div>
            <Header />
            <Banner route="/criacao-de-sites"/>
        </div>
    );
}

export default WebSites;