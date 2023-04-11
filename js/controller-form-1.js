const camposDoFormulario = document.querySelectorAll('[required]');
const formulario = document.querySelector("[data-formulario]");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const listaRespostas = {
        "termos": e.target.elements["termos"].value,
    }
    
    window.location.href = '../pages/cadastro-form-2.html';
})

camposDoFormulario.forEach((campo) => {
    campo.addEventListener("blur", () => verificaCampo(campo));
    campo.addEventListener("invalid", evento => evento.preventDefault());
})

const tiposDeErro = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'tooShort',
    'customError'
];

// const tiposDeErro = [
//     'valueMissing'- quando o valor do input está vazio!
//     'typeMismatch' - quando o valor digitado do input é diferente do type definido! 
//     'patternMismatch' - quando o valor digitado não obedece a Regex definida no input!
//     'tooShort' - quando o valor não obedece a quantidade de carecteres definido no input!
//     'customError' - erro costumizado definido no algoritmo implementado! 
// ];

const mensagens = {
    termos: {
        valueMissing: 'Você deve aceitar nossos termos antes de continuar.',
    }
}


function verificaCampo(campo) {
    let mensagem = "";
    campo.setCustomValidity('');

    tiposDeErro.forEach(erro => {
        if(campo.validity[erro]) {
            mensagem = mensagens[campo.name][erro];
        }
    })

    const mensagemErro = campo.parentNode.querySelector('.mensagem__erro');
    const validadorDeInput = campo.checkValidity();

    if(!validadorDeInput) {
        mensagemErro.textContent = mensagem;
    } else {
        mensagemErro.textContent = "";
    }
        console.log(campo.validity)
}