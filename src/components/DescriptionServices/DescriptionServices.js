import React from 'react';
import { routes } from '../Shared/constants';
import './DescriptionServices.css';
import imageRobotService from './images/teamwork-edit.jpg';
import imageSitesService from './images/development-together.jpg';

const htmlServicesContent = {
    robot: (
    <>
        <h2>desenvolvemos sistemas únicos</h2>
        <ul className="services-list">
            <li>Consulta de dados em massa: <br/>
            <p>Receita Federal,</p>
            <p>Sintegra,</p>
            <p>Serasa e muito mais</p>
            </li>
            <li>Desenvolvimento e Integração de APIs</li>
            <li>Crawlers para coleta de dados da Web.</li>
            <li>RPA para automatização de processos repetitivos.</li>
        </ul>
    </>
    ),
    sites: (
        <>
            <h2>O que desenvolvemos para você</h2>
            <ul className="services-list">
                <li>
                <b>LAYOUT CUSTOMIZADO</b>: para representar a essência da sua marca.
                </li>
                <li>
                <b>SITE RESPONSIVO</b>: permite que seu website funcione em qualquer
                dispositivo, PC, tablet ou celular.
                </li>
                <li>
                <b>MEIOS DE PAGAMENTO</b>: para seus clientes fazerem compras
                online.
                </li>
                <li>
                <b>PAINEL DE CONTROLE</b>: para você atualizar o conteúdo do seu
                site facilmente.
                </li>
            </ul>
        </>
    )
};

const imageServicesContent = {
    robot: {
        img: imageRobotService,
        title: "Photo by John Schnobrich on Unsplash"
    },
    sites: {
        img: imageSitesService,
        title: "Image by StartupStockPhotos from Pixabay"
    }
}


function DescriptionServices(props) {

    let htmlServices, imageServices;
    if(props.route === routes.criacaoDeRobos) {
        htmlServices = htmlServicesContent.robot;
        imageServices = imageServicesContent.robot;
    }
    else if (props.route === routes.criacaoDeSites) {
        htmlServices = htmlServicesContent.sites;
        imageServices = imageServicesContent.sites;
    }

    return (
        <section className="services" id="services">
            <div className="services-container">
                {htmlServices}
            </div> 
            <div className="service-image-container">
                <div className="backgroung-img-up"></div>
                <img 
                    className="service-image"
                    src={imageServices.img} 
                    title={imageServices.title} 
                    alt="" >
                </img>
            </div>
        </section>
    );
}

export default DescriptionServices;