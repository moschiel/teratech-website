import React from 'react';

// import basic style
import '../../components/BaseStyle/Base.css'
// import components
import Header from '../../components/Header/Header';
import Banner from '../../components/Banner/Banner';
import BriefServices from '../../components/BriefServices/BriefServices';

function Home() {
    return (
        <div>
            <Header />
            <Banner route="/"/>
            <BriefServices />
        </div>
    );
}

export default Home;