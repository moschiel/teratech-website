import React from 'react';
import './Advantages.css';
import { ReactComponent as SvgRentabilidade } from './images/analytics.svg';
import { ReactComponent as SvgCredibilidade } from './images/aperto-de-mao.svg';
import { ReactComponent as SvgPraticidade } from './images/database.svg';
import { ReactComponent as SvgVisibilidade } from './images/luminaria.svg';
import { ReactComponent as SvgCustomizacao } from './images/plan.svg';
import { ReactComponent as SvgSeguranca } from './images/shield.svg';
import { ReactComponent as SvgAgilidade } from './images/speedometer.svg';


const htmlAdvantageSites = [
    (
        <div className="vantagem-box">
            <SvgVisibilidade />
            <h2>Visibilidade</h2>
            <p>
                Seu negócio é encontrado mais facilmente nas pesquisas do Google.
            </p>
        </div> 
    ),
    (
        <div className="vantagem-box">
            <SvgRentabilidade />
            <h2>Rentável</h2>
            <p>
                Aumente suas vendas com um canal online 24 horas por dia para
                todos os seus clientes.
            </p>
        </div> 
    ),
    (
        <div className="vantagem-box">
            <SvgCredibilidade />
            <h2>Credibilidade</h2>
            <p>
                Sua empresa ganha mais credibilidade quando sabem que seu negócio
                tem um website.
            </p>
        </div> 
    ),
    (
        <div className="vantagem-box">
            <SvgSeguranca />
            <h2>Segurança</h2>
            <p>
                Nos adaptamos as regras de compliance e segurança de sua empresa.
            </p>
        </div> 
    )
];

const htmlAdvantageRobots = [
    (
        <div className="vantagem-box">
            <SvgAgilidade />
            <h2>Agilidade</h2>
            <p>
                Otimize tempo e recursos operacionais automatizando processos.
            </p>
        </div> 
    ),
    (
        <div className="vantagem-box">
            <SvgPraticidade />
            <h2>Praticidade</h2>
            <p>
                Integre fontes de dados confiáveis com os sistemas de sua empresa.
            </p>
        </div> 
    ),
    (
        <div className="vantagem-box">
            <SvgCustomizacao />
            <h2>Customização</h2>
            <p>
                Criamos soluções adaptadas para o seu negócio.
            </p>
        </div> 
    ),
    (
        <div className="vantagem-box">
            <SvgSeguranca />
            <h2>Segurança</h2>
            <p>
                Nos adaptamos as regras de compliance e segurança de sua empresa.
            </p>
        </div> 
    )
];

function Advantages(props) {
    var htmlAdvantages;
    
    if(props.route === '/criacao-de-sites')
        htmlAdvantages = htmlAdvantageSites;
    else if (props.route === '/criacao-de-robos')
        htmlAdvantages = htmlAdvantageRobots;

    return(
        <section className="vantagens">
            <div className="vantagens-container center">
                <h2>Vantagens</h2>
                <div className="vantagem-boxes">
                    {htmlAdvantages}
                </div>
            </div>
            
        </section>
    );
}

export default Advantages;