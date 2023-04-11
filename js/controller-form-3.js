import ehUmCPF from "./valida-cpf.js";
import ehMaiorDeIdade from "./valida-idade.js";

const camposDoFormulario = document.querySelectorAll('[required]');
const formulario = document.querySelector("[data-formulario]");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const listaRespostas = {
        "matricula": e.target.elements["matricula"].value,
        "anoMatricula": e.target.elements["anoMatricula"].value,
        "universidade": e.target.elements["universidade"].value,
        "curso": e.target.elements["curso"].value,
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
    matricula: {
        valueMissing: "O campo de Matricula não pode estar vazio.",
        patternMismatch: "Por favor, preencha um Matricula válida.",
        tooShort: "Por favor, preencha uma Matricula válida."
    },
    anoMatricula: {
        valueMissing: "O campo Ano de Entrada não pode estar vazio.",
        typeMismatch: "Por favor, preencha o Ano de Entrada válido.",
        tooShort: "Por favor, preencha o Ano de Entrada válido."
    },
    universidade: {
        valueMissing: "O campo de Universidade não pode estar vazio.",
        patternMismatch: "Por favor, preencha um Universidade válido.",
        tooShort: "O campo de Universidade não tem caractéres suficientes."
    },
    curso: {
        valueMissing: 'O campo de Curso não pode estar vazio.',
        patternMismatch: "Por favor, preencha um Curso válido.",
        customError: "O Curso digitado não existe.",
        tooShort: "O campo de Curso não tem caractéres suficientes."
    }
}

function verificaCampo(campo) {
    let mensagem = "";
    campo.setCustomValidity('');

    if (campo.name == "cpf" && campo.value.length >= 11) {
        ehUmCPF(campo);
    }
    if (campo.name == "aniversario" && campo.value != "") {
        ehMaiorDeIdade(campo);
    }

    tiposDeErro.forEach(erro => {
        if (campo.validity[erro]) {
            mensagem = mensagens[campo.name][erro];
        }
    })

    const mensagemErro = campo.parentNode.querySelector('.mensagem__erro');
    const validadorDeInput = campo.checkValidity();

    if (!validadorDeInput) {
        mensagemErro.textContent = mensagem;
    } else {
        mensagemErro.textContent = "";
    }
    console.log(campo.validity)
}