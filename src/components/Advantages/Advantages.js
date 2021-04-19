import React from 'react';
import './Advantages.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { responsiveBreaks, routes } from '../Shared/constants';

import { ReactComponent as SvgRentabilidade } from './images/analytics.svg';
import { ReactComponent as SvgCredibilidade } from './images/aperto-de-mao.svg';
import { ReactComponent as SvgPraticidade } from './images/database.svg';
import { ReactComponent as SvgVisibilidade } from './images/luminaria.svg';
import { ReactComponent as SvgCustomizacao } from './images/plan.svg';
import { ReactComponent as SvgSeguranca } from './images/shield.svg';
import { ReactComponent as SvgAgilidade } from './images/speedometer.svg';

const carouselBreakpoints = {
    forDesktop: {
      breakpoint: {
        max: responsiveBreaks.forExtraLargeDesktop.max,
        min: responsiveBreaks.forDesktop.min
      },
      items: 4,
      slidesToSlide: 0
      //   partialVisibilityGutter: 40,
    },
    forTableLandscape: {    
        breakpoint: responsiveBreaks.forTabletLandscape,
        items: 3,
        slidesToSlide: 1
    },
    forTabletPortrait: {
        breakpoint: responsiveBreaks.forTabletPortrait,
        items: 2,
        slidesToSlide: 2
    },
    forPhonePortrait: {
        breakpoint: responsiveBreaks.forPhonePortrait,
        items: 1,
        slidesToSlide: 1
    }
}
const carouselProps = {
    responsive: carouselBreakpoints,
    // autoPlay: true, //esse parametro sera usado com React.useState
    autoPlaySpeed: 3000,
    infinite: true,
    arrows: false,
    additionalTransfrom: 0, //mostra pedaço do proximo item de acordo com valor inserido
    centerMode: false,
    draggable: true,
    minimumTouchDrag:80, //relacionado ao dragable
    focusOnSelect: false,
    keyBoardControl: false, //usuario pode trocar paginas usando o teclado direcional 
    showDots: true,
    swipeable: true,
    // slidesToSlide={2} // ja estamos setando isso na responsividade
    className: "",
    containerClass: "",
    dotListClass: "vantagens-react-dots",
    itemClass: "",
    sliderClass: "",
    renderButtonGroupOutside: false,
    renderDotsOutside: true
}
const htmlAdvantagesContent = {
    sites: [
        (
            <div className="vantagem-box" key="vantagem-box-1" >
                <SvgVisibilidade />
                <h2>Visibilidade</h2>
                <p>
                    Seu negócio é encontrado mais facilmente nas pesquisas do Google.
                </p>
            </div> 
        ),
        (
            <div className="vantagem-box" key="vantagem-box-2">
                <SvgRentabilidade />
                <h2>Rentável</h2>
                <p>
                    Aumente suas vendas com um canal online 24 horas por dia para
                    todos os seus clientes.
                </p>
            </div> 
        ),
        (
            <div className="vantagem-box" key="vantagem-box-2">
                <SvgCredibilidade />
                <h2>Credibilidade</h2>
                <p>
                    Sua empresa ganha mais credibilidade quando sabem que seu negócio
                    tem um website.
                </p>
            </div> 
        ),
        (
            <div className="vantagem-box" key="vantagem-box-3">
                <SvgSeguranca />
                <h2>Segurança</h2>
                <p>
                    Nos adaptamos as regras de compliance e segurança de sua empresa.
                </p>
            </div> 
        )
    ],
    robots: [
        (
            <div className="vantagem-box" key="vantagem-box-1">
                <SvgAgilidade />
                <h2>Agilidade</h2>
                <p>
                    Otimize tempo e recursos operacionais automatizando processos.
                </p>
            </div> 
        ),
        (
            <div className="vantagem-box" key="vantagem-box-2">
                <SvgPraticidade />
                <h2>Praticidade</h2>
                <p>
                    Integre fontes de dados confiáveis com os sistemas de sua empresa.
                </p>
            </div> 
        ),
        (
            <div className="vantagem-box" key="vantagem-box-3">
                <SvgCustomizacao />
                <h2>Customização</h2>
                <p>
                    Criamos soluções adaptadas para o seu negócio.
                </p>
            </div> 
        ),
        (
            <div className="vantagem-box" key="vantagem-box-4">
                <SvgSeguranca />
                <h2>Segurança</h2>
                <p>
                    Nos adaptamos as regras de compliance e segurança de sua empresa.
                </p>
            </div> 
        )
    ]
}

function Advantages(props) {
    const [stateAutoPlay, setStateAutoPlay] = React.useState(true);

    React.useEffect(()=>{
        //atualiza modo autoPlay do componente de acordo com tamanho da tela
        function handleResize() {
            if((window.innerWidth < responsiveBreaks.forDesktop.min) && !stateAutoPlay){
                setStateAutoPlay(true);
            }else if((window.innerWidth >= responsiveBreaks.forDesktop.min) && stateAutoPlay){
                setStateAutoPlay(false);
            }
        }

        //chama função na primeira inicialização
        handleResize();
        //configura para chamar função handleSize se a tela mudar de tamanho
        window.addEventListener('resize', handleResize);
        //no segundo retorno remove evento, para não acumular na memoria muitos EventListeners
        return _ => {
            window.removeEventListener('resize', handleResize);
        }
    });

    //determina quais vantagens serem renderizadas de acordo com a rota
    var htmlAdvantages;
    if(props.route === routes.criacaoDeSites)
        htmlAdvantages = htmlAdvantagesContent.sites;
    else if (props.route === routes.criacaoDeRobos)
        htmlAdvantages = htmlAdvantagesContent.robots;

    return(
        <section className="vantagens">
            <div className="vantagens-container center">
                <h2>Vantagens</h2>
                <div className="vantagem-boxes vantagem-custom-dots">
                    <Carousel {...carouselProps} autoPlay={stateAutoPlay}>
                        { htmlAdvantages }
                    </Carousel>
                </div>
            </div>
        </section>
    );
}

Advantages.defaultProps = {
    route: routes.criacaoDeSites
};

export default Advantages;