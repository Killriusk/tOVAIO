


document.querySelectorAll('.poll-btn').forEach(botao => {
  botao.addEventListener('click', () => {
    document.querySelectorAll('.poll-btn').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
  });
});


function respostas(status) {
    if (status === 'correta') {
        document.body.style.background = "rgb(28, 176, 28)";

        setTimeout(() => {
            document.body.style.background = "linear-gradient(180deg, #1e3a5f 0%, #0b1522 100%)"
        }, 1000);

    } else {
        document.body.style.background = "rgb(189, 25, 25)";

        setTimeout(() => {
            document.body.style.background = "linear-gradient(180deg, #1e3a5f 0%, #0b1522 100%)";
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


const botaoRun = document.getElementById('botaorun');

botaoRun.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - botaoFujao.offsetWidth);
    const y = Math.random() * (window.innerHeight - botaoFujao.offsetHeight);
    
    
    botaoRun.style.position = 'absolute';
    botaoRun.style.left = `${x}px`;
    botaoRun.style.top = `${y}px`;
});


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