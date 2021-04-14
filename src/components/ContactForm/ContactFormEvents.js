import $ from 'jquery';
import serializeForm from '../../utils/serializeForm';

var inputName;
var inputEmail;
var inputCell;
var inputMessage;

const regexName = /^[a-zA-Z ]{3,30}$/;
const regexEmail = /^(([^<>()[\]\\.,;!@#$%¨&*():\s@"]+(\.[^<>()[\]\\.,;:!@#$%¨&*()\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const regexCell = /^[(][0-9]{2}[)]?[ ]?[0-9]{4,5}[-]?[0-9]{4}$/g;
const regexMessage = /^.{10,}$/; 

function checkValue(element, regex, isSubmit) {
    if(element.value.match(regex)){
        element.classList.remove('invalid');
        element.classList.add('valid');
        return true;
    }
    else if (isSubmit) {
        element.classList.remove('valid');
        element.classList.add('invalid');
        return false;
    }
}

// Função para validar valores
// ao ser chamada, adiciona classe 'valid' se o valor do input estiver ok.
// e retorna 'true' se todos os inputs estiverem ok.
function validateFormInputs() {
    if (checkValue(inputName, regexName, true) === false) {
        alert("Erro: nome inválido");
        return false;
    }

    if (checkValue(inputEmail, regexEmail, true) === false) {
        alert("Erro: email inválido");
        return false;
    }

    if (checkValue(inputCell, regexCell, true) === false) {
        alert("Erro: Número de contato inválido");
        return false;
    }

    if (checkValue(inputMessage, regexMessage, true) === false) {
        alert("Erro: preencha a mensagem por favor");
        return false;
    }

    return true; //se chegou aqui, ta tudo ok, retorna true;
}

// Configura eventos de digitação.
// Eventos configurados:
// - se ao digitar, o valor estiver ok, a classe css 'invalid' será removida.
// - ao digitar, aplica máscara regex para o celular: (99)-99999-9999
function configFormTypingEvents() {
    inputName.oninput = ()=>{
        checkValue(inputName, regexName, false);
    }

    inputCell.oninput = ()=>{
        //le valor atual, e aplica mascara
        let formatedText = inputCell.value
          .replace(/\D/g, "")
          .replace(/(\d{2})(\d)/, "($1) $2")
          .replace(/(\d{4})(\d)/, "$1-$2")
          .replace(/(\d{4})-(\d)(\d{4})/, "$1$2-$3")
          .replace(/(-\d{4})\d+?$/, "$1");
        //escreve valor mascarado no input
        inputCell.value = formatedText;
    
        checkValue(inputCell, regexCell, false);
    }

    inputEmail.oninput = ()=>{
        checkValue(inputEmail, regexEmail, false);
    }

    inputMessage.onkeyup = ()=>{
        checkValue(inputMessage, regexMessage, false);
    }
}

// Configura evento de submissão do fomulário.
function configFormSubmitEvents() {
    var form = document.getElementById('contact-form'); 

    form.onsubmit = (event) => {
        console.log('prevent-default');
        event.preventDefault();
        
        if (validateFormInputs() === false) {
            return;
        }

        var formData = serializeForm(event);
        console.log("Ajax Request: ", formData);

        // Make AJAX request
        let script_path;
        if(process.env.NODE_ENV === 'production')
            script_path = process.env.PUBLIC_URL + "/enviar-email.php";
        else // (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test')
            script_path = "https://www.teratech.com.br/enviar-email.php";

        $.post( script_path, formData)
        .done(function () {
            //limpa formulario e envia mensagem de sucesso
            inputName.value = "";
            inputEmail.value = "";
            inputCell.value = "";
            inputMessage.value = "";
            alert("Mensagem enviada com sucesso");
         })
        .fail(function () {
            //exibe mensagem de erro
            alert("Erro no envio da mensagem!");
        });
    }
}

// Chame essa função no componente para configurar os eventos
function ContactFormEvents() {
    console.log('ContactFormEvents configured');

    //pega referências aos elementos DOM
    inputName = document.querySelector('input[name="name"]');
    inputEmail = document.querySelector('input[name="email"]');
    inputCell = document.querySelector('input[name="cell"]');
    inputMessage = document.querySelector('textarea[name="message"]');

    //configura eventos para os elementos
    configFormTypingEvents();
    configFormSubmitEvents();
}

export default ContactFormEvents;
