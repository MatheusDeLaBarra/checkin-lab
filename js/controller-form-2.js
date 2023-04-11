import ehUmCPF from "./valida-cpf.js";
import ehMaiorDeIdade from "./valida-idade.js";

const camposDoFormulario = document.querySelectorAll('[required]');
const formulario = document.querySelector("[data-formulario]");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const listaRespostas = {
        "nome": e.target.elements["nome"].value,
        "cpf": e.target.elements["cpf"].value,
        "aniversario": e.target.elements["aniversario"].value,
        "email": e.target.elements["email"].value,
        "telefone": e.target.elements["telefone"].value
    }
    
    localStorage.setItem("cadastro", JSON.stringify(listaRespostas));

    window.location.href = '../pages/cadastro-form-3.html';
})

camposDoFormulario.forEach((campo) => {
    campo.addEventListener("blur", () => verificaCampo(campo));
    campo.addEventListener("invalid", evento => evento.preventDefault());
})

// const tiposDeErro = [
//     'valueMissing'- quando o valor do input está vazio!
//     'typeMismatch' - quando o valor digitado do input é diferente do type definido! 
//     'patternMismatch' - quando o valor digitado não obedece a Regex definida no input!
//     'tooShort' - quando o valor não obedece a quantidade de carecteres definido no input!
//     'customError' - erro costumizado definido no algoritmo implementado! 
// ];

const tiposDeErro = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'tooShort',
    'customError'
];

const mensagens = {
    nome: {
        valueMissing: "O campo de nome não pode estar vazio.",
        patternMismatch: "Por favor, preencha um nome válido.",
        tooShort: "Por favor, preencha um nome válido."
    },
    email: {
        valueMissing: "O campo de e-mail não pode estar vazio.",
        typeMismatch: "Por favor, preencha um email válido.",
        tooShort: "Por favor, preencha um e-mail válido."
    },
    telefone: {
        valueMissing: "O campo de Telefone não pode estar vazio.",
        patternMismatch: "Por favor, preencha um Telefone válido.",
        tooShort: "O campo de Telefone não tem caractéres suficientes."
    },
    cpf: {
        valueMissing: 'O campo de CPF não pode estar vazio.',
        patternMismatch: "Por favor, preencha um CPF válido.",
        customError: "O CPF digitado não existe.",
        tooShort: "O campo de CPF não tem caractéres suficientes."
    },
    aniversario: {
        valueMissing: 'O campo de data de nascimento não pode estar vazio.',
        customError: 'Você deve ser maior que 18 anos para se cadastrar.'
    }
}

function verificaCampo(campo) {
    let mensagem = "";
    campo.setCustomValidity('');

    if (campo.name == "cpf" && campo.value.length >= 11) {
        ehUmCPF(campo);
    }
    if(campo.name == "aniversario" && campo.value != "") {
        ehMaiorDeIdade(campo);
    }

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