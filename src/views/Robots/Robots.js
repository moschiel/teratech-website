import React from 'react';
import { routes } from '../../components/Shared/constants';

// import basic style
import '../../components/BaseStyle/Base.css'
// import components
import Header from '../../components/Header/Header';
import Banner from '../../components/Banner/Banner';
import Advantages from '../../components/Advantages/Advantages';
import DescriptionServices from '../../components/DescriptionServices/DescriptionServices';
import Footer from '../../components/Footer/Footer'

function Robots() {
    return (
        <>
            <Header />
            <Banner route={routes.criacaoDeRobos} />
            <Advantages route={routes.criacaoDeRobos} />
            <DescriptionServices route={routes.criacaoDeRobos} />
            <Footer />
        </>
    );
}

export default Robots;