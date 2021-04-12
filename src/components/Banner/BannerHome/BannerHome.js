import React from 'react';
import '../Banner.css';
import typeAnimation from './typeAnimation';

function BannerHome() {
    //useEffect runs code inside it, after component is rendered on screen
    React.useEffect(() => {
        window.addEventListener('load', () => {
            typeAnimation();
        });
        console.log('load');
    });

    return (
        <div className="banner-home" >
            <div className="animate-container center">
                <h1 id="animate-text-1">LINHA 1</h1>
                <h1 id="animate-text-2">LINHA 2</h1>
            </div>
        </div>
    );
}

export default BannerHome;