import React from 'react';
import './Advantages.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { responsiveBreaks } from '../Shared/constants';

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
let carouselProps = {
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

const htmlAdvantageSites = [
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
];

const htmlAdvantageRobots = [
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
];


function Advantages(props) {
    //configura estado do Carousel
    const [autoPlayState, setAutoPlayState] = React.useState(true);
    
    //-useEffect é chamado pela primeira vez depois do componente ser renderizado na tela
    //-funções para atualização de estado do componente devem ser escritas dentro do useEffect
    React.useEffect(()=>{
        //redesenha componente se modo autoPlay mudar de estado
        //pois é necessario refazer o componente do zero para a alteração de autoPlay funcionar
        //OBS: verificar como desligar o autoPlay de acordo com o tamanho da tela, assim
        //não vai mais precisa desse codigo loko.
        function handleResize() {
            if((window.innerWidth < responsiveBreaks.forDesktop.min) && !autoPlayState){
                setAutoPlayState(true); //redesenha componente
                // console.log('set autoPlay: ', autoPlayState);
            }else if((window.innerWidth >= responsiveBreaks.forDesktop.min) && autoPlayState){
                setAutoPlayState(false); //redesenha componente
                // console.log('unset autoPlay: ', autoPlayState);
            }
        }

        //chama função na primeira inicialização
        handleResize();

        //configura para chamar função handleSize se a tela mudar de tamanho
        window.addEventListener('resize', handleResize);

        //no retorno remove evento, para não acumular na memoria muitos EventListeners
        return _ => {
            window.removeEventListener('resize', handleResize);
        }
    });

    //determina quais vantagens serem renderizadas de acordo com a rota
    var htmlAdvantages;
    if(props.route === '/criacao-de-sites')
        htmlAdvantages = htmlAdvantageSites;
    else if (props.route === '/criacao-de-robos')
        htmlAdvantages = htmlAdvantageRobots;

    return(
        <section className="vantagens">
            <div className="vantagens-container center">
                <h2>Vantagens</h2>
                <div className="vantagem-boxes vantagem-custom-dots">
                    <Carousel {...carouselProps} autoPlay={autoPlayState}>
                        { htmlAdvantages }
                    </Carousel>
                </div>
            </div>
            
        </section>
    );
}

export default Advantages;