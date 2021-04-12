import React from 'react';
import './BriefServices.css';
import robotServiceImage from './images/innovation-edit.jpg';
import sitesServiceImage from './images/sketch-edit.jpg';

const htmlServicesText = [
    (
        <div>
            <h2>RPA, Crawlers e APIs</h2>
            <p>
                RPA para automatizar as tarefas repetidas da sua empresa, otimizando
                tempo e economizando recursos.
            </p>
            <p>Crawlers para coletar dados da web relevantes para seu negócio.</p>
            <p>Desenvolvemos APIs que são integradas aos seus sistemas.</p>
        </div>
    ),
    (
        <div>
            <h2>Criação de Sites</h2>
            <p>Ter um site hoje em dia é essencial para qualquer negócio.</p>
            <p>Desenvolvemos para você websites com design personalizado.</p>
            <p>
                Seja um site simples ou uma loja virtual, transformamos sua ideia em
                realidade.
            </p>
        </div>
    )
];

const htmlImages = [
    (
        <div>
            <img src={robotServiceImage} title="Hand photo created by jcomp - www.freepik.com"/>
        </div>
    ),
    (
        <div>
            <img src={sitesServiceImage} title="Photo by Alvaro Reyes on Unsplash" />
        </div>
    )
]


function BriefServices() {
    return(
        <main className="center">
            <section id="brief-services">
                <div className="brief-container">
                    <div className="brief-text-container">
                        {htmlServicesText[0]}
                        <a href="/criacao-de-robos">
                            <button>Saiba mais</button>
                        </a>
                    </div>
                    <div class="brief-image-container">
                        {htmlImages[0]}
                    </div>
                </div>
                <div className="brief-container">
                    <div className="brief-text-container">
                        {htmlServicesText[1]}
                        <a href="/criacao-de-sites">
                            <button>Saiba mais</button>
                        </a>
                    </div>
                    <div class="brief-image-container">
                        {htmlImages[1]}
                    </div>
                </div>
            </section>

        </main>
    );
}

export default BriefServices;