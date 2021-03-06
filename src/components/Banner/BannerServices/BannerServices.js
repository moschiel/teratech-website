import React from 'react';
import '../Banner.css';
import bannerImgCriacaoDeRobos from './images/capa.png';
import bannerImgCriacaoDeSites from './images/desenvolvedor-1100.jpg';

//BANNER SERVICE FUNCTIONS
const htmlServiceText = {
    robot: (
        <>
            <h2>Criamos Robôs Inteligentes </h2>
            <p>
                Desenvolvemos sistemas que fazem a automatização de tarefas repetidas, 
                e também realizam a coleta em massa dos
                dados importantes para o seu negócio.
            </p>
        </>
    ),
    sites: (
        <>
            <h2>Criamos Sites Profissionais</h2>
            <p>
                Posicione sua marca digitalmente.<br />
                Tenha um site projetado para o seu negócio.
            </p>
        </>
    )
};

function BannerServices(props) {

    let bannerImg, htmlContent;
    if(props.route === '/criacao-de-robos') {
        bannerImg = bannerImgCriacaoDeRobos;
        htmlContent = htmlServiceText.robot;
    }
    else if(props.route === '/criacao-de-sites'){
        bannerImg = bannerImgCriacaoDeSites;
        htmlContent = htmlServiceText.sites;
    }
    else {
        console.log('Erro: rota desconhecida');
        return;
    }

    return (
        <div 
            className="banner-services" 
            style={{ backgroundImage: `url(${bannerImg})`}} 
        >
            <div className="banner-service-text center">
                {htmlContent}
            </div>
        </div>
    );
}


export default BannerServices;