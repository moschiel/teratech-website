import React from 'react';
import './ContactForm.css';
import { routes } from '../Shared/constants';

const htmlContactTextContent = {
    robot: (
        <div>
            <p>Quer potencializar o seu negócio reduzindo tempo e dinheiro gasto em tarefas repetidas?</p>
            <p>Quer automatizar a coleta e analise de dados para sua empresa?</p>
            <p>Conte com a TERATECH e solicite um contato!</p>
        </div>
    ),
    sites: (
        <div>
            <p>Quer ter um site para seu negócio?</p>
            <p>Quer alcançar mais pessoas e vender seu produto online?</p>
            <p>Conte com a TERATECH e solicite um contato!</p>
        </div>
    )
}


function ContactForm (props) {

    let htmlContactText;
    if(props.route === routes.criacaoDeRobos)
        htmlContactText = htmlContactTextContent.robot;
    else if (props.route === routes.criacaoDeSites)
        htmlContactText = htmlContactTextContent.sites;
    
    return (
        <section className='contact-section'>
            <div className="center">
                <div className="contact-container">
                    <div className="contact-text">
                        <h2>Contato</h2>
                        {htmlContactText}
                    </div>
                    <div className="contact-form-container">
                        <form id="contact-form">
                            <div className="input-infos">
                                <label>
                                    <input type="text" name="name" placeholder="Escreva seu nome" />
                                </label>
                                <label>
                                    <input name="email" placeholder="Escreva seu e-mail" />
                                </label>
                                <label>
                                    <input type="tel" name="cel" placeholder="Escreva seu telefone" />
                                </label>
                            </div>
                            <label class="label-textarea">
                                <textarea name="message" placeholder="Diga em que possamos te ajudar"></textarea>
                            </label>
                        </form>
                        <div class="button-form">
                            <button form="contact-form" type="submit">
                                Enviar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactForm;