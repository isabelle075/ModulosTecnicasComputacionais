const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "A unidade básica de Saúde de Quatro Barras, atende como deveria?",
        alternativas: [
            {
                texto: "sim.",
                afirmação: "Porque dependendo do caso de emergência é atendido rapidamente.",
                ""
            },
            {
                texto: "nao",
                afirmação: "Pois é uma estrutura pequena para tantos habitantes"
            }
        ]
    },
    {
        enunciado: "Quais é a visão dos religiosos com a festa junina?",

        alternativas: [
            {
                texto: "Católica é Atranquila.",
                afirmacao: "A festa junina pertence a igreja católica."
            },
            {
                texto: "Em outras nao tanto.",
                afirmacao: "pois a festa junina é considerado festa de santos católicos."

            }
        ]
    },
    {
        enunciado: "quais os principais benefícios da reciclagem?",

        alternativas: [
            {
                texto: "evita agressões ao solo, água e ar",
                afirmacao: "ajuda no meio ambiente."
            },
            {
                texto: "proporciona melhor qualidade de vida",
                afirmacao: "sem lixo acumulado."
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }

    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();

}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

function aleatoria(lista){
    const posicao = Math.random()*lista.length;
}
    
mostraPergunta();

