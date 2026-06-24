




function respostas(status) {
    if (status === 'correta') {
        alert("Aí sim sim@!2#$$");
        document.body.style.backgroundColor = "rgb(28, 176, 28)";

        setTimeout(() => {
            document.body.style.backgroundColor = "rgb(37, 66, 96)";
        }, 1000);

    } else {
        alert("errou lil bro¨&*)¨&&)");
        document.body.style.backgroundColor = "rgb(189, 25, 25)";

        setTimeout(() => {
            document.body.style.backgroundColor = "rgb(37, 66, 96)";
        }, 1000);
    }
}
const perguntas = [
    {
        pergunta: "1 - Qual é a minha cidade de nascimento?",
        opcoes: [
            {texto: "Londrina", correta: false},
            {texto: "Porecatu", correta: false},
            {texto: "Alvorada do Sul", correta: true}
        ]
    },
    {
        pergunta: "2 - Qual é o componente curricular que leciono?",
        opcoes: [
            {texto: "Geografia", correta: false},
            {texto: "Matemática", correta: true},
            {texto: "História", correta: false}
        ]
    },
    {
        pergunta: "3 - Qual é a minha idade?",
        opcoes: [
            {texto: "28 anos", correta: false},
            {texto: "39 anos", correta: false},
            {texto: "34 anos", correta: true}
        ]
    },
    {
        pergunta: "4 - Em qual mês eu nasci?",
        opcoes: [
            {texto: "Fevereiro", correta: true},
            {texto: "Dezembro", correta: false},
            {texto: "Março", correta: false}
        ]
    }
];

let indice = 0;
let pontos = 0;

function iniciarQuiz() {
    document.getElementById("btnIniciar").style.display = "none";
    mostrarPergunta();
}

function mostrarPergunta() {

    const quiz = document.getElementById("quiz");

    if (indice >= perguntas.length) {

        quiz.innerHTML = `
            <h2>Questionário Finalizado!</h2>
            <h3>Você acertou ${pontos} de ${perguntas.length} perguntas.</h3>
        `;

        return;
    }

    let html = `<h2>${perguntas[indice].pergunta}</h2>`;

    perguntas[indice].opcoes.forEach(opcao => {
        html += `
            <button onclick="responder(${opcao.correta})">
                ${opcao.texto}
            </button><br><br>
        `;
    });

    quiz.innerHTML = html;
}

function responder(correta) {

    if (correta) {
        pontos++;
        alert("Resposta correta!");
    } else {
        alert("Resposta incorreta!");
    }

    indice++;

    mostrarPergunta();
}