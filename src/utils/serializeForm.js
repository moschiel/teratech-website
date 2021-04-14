// Função para serializar dados do fomularios no evento 'onsubmit'

// Essa função deve receber como parametro o evento gerado pelo 'onsubmit'
// Ex:
// var myForm = document.getElementById('seu-form-id');
// myForm.onsubmit( (event) => {
//     var data = serializeForm(event);
//     console.log(data);
// });

function serializeForm(submitEvent) {
    var elements = submitEvent.target.elements;
    var serialize = "";
    var i;

    for(i=0; i < elements.length; i++){
        if(elements[i].tagName === "INPUT" || elements[i].tagName === "TEXTAREA"){
            serialize += elements[i].name + "=" + elements[i].value; 
            if(i < (elements.length - 2))
                serialize += "&"; 
        }
    }
    return encodeURI(serialize);
}

export default serializeForm;