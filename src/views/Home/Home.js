import React from 'react';

// import basic style
import '../../components/BaseStyle/Base.css'
// import components
import Header from '../../components/Header/Header';
import Banner from '../../components/Banner/Banner';

function Home() {
    return (
        <div>
            <Header />
            <Banner route="/"/>
        </div>
    );
}

export default Home;