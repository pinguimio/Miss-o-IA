const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você é Elara, uma aprendiz de cartógrafa em uma vila isolada nas Montanhas Nebulosas. Sua missão é traçar um mapa da Floresta Sussurrante para encontrar a lendária Pedra-Estrela, que dizem ter o poder de acalmar as tempestades mágicas que assolam sua vila 
A trilha que leva à floresta é estreita e sinuosa. Você decide adentrar na mata fechada. A luz do sol mal consegue passar pelas copas das árvores, e o silêncio é tão profundo que você ouve o som dos seus próprios passos. De repente, a trilha termina em uma encruzilhada. À sua frente, há uma antiga estátua de pedra coberta de musgo, e à sua direita, um rio de águas escuras corre com força.",
        alternativas: [
            {
                texto: "Seguir a estátua de pedra. Você acredita que símbolos antigos como esse podem ser a chave para encontrar a Pedra-Estrela.",
                afirmacao: "Ela acredita em coisas antigas que podem ajudar. "
            },
            {
                texto: "Atravessar o rio. A água corre para o coração da floresta, e você tem a sensação de que o rio a levará mais perto de seu destino.",
                afirmacao: "Quis saber como usar IA no seu dia a dia."
            }
        ]
    },
    {
        enunciado: "Você segue o caminho da estátua e, após alguns minutos, encontra uma clareira com um lago de águas cristalinas. No centro do lago, uma pequena ilha com uma árvore dourada brilha. Ao se aproximar, você vê uma criatura mística, um Grifo majestoso, descansando sob a árvore. Ele parece agitado, e um amuleto brilhante está em seu pescoço.",
        alternativas: [
            {
                texto: "Tenta acalmar o Grifo oferecendo-lhe um fruto raro que você trouxe para sua jornada.",
                afirmacao: "Conseguiu utilizar a IA para buscar informações úteis."
            },
            {
                texto: "Tenta roubar o amuleto do pescoço do Grifo sem que ele perceba, pois você sente que ele é a chave para a Pedra-Estrela.",
                afirmacao: "Sentiu mais facilidade em utilizar seus próprios recursos para escrever seu trabalho."
            }
        ]
    },
    {
        enunciado: "Após a elaboração do trabalho escrito, a professora realizou um debate entre a turma para entender como foi realizada a pesquisa e escrita. Nessa conversa também foi levantado um ponto muito importante: como a IA impacta o trabalho do futuro. Nesse debate, como você se posiciona?",
        alternativas: [
            {
                texto: "Defende a ideia de que a IA pode criar novas oportunidades de emprego e melhorar habilidades humanas.",
                afirmacao: "Vem impulsionando a inovação na área de IA e luta para abrir novos caminhos profissionais com IA."
            },
            {
                texto: "Me preocupo com as pessoas que perderão seus empregos para máquinas e defendem a importância de proteger os trabalhadores.",
                afirmacao: "Sua preocupação com as pessoas motivou a criar um grupo de estudos entre trabalhadores para discutir meios de utilização de IA de forma ética."
            }
        ]
    },
    {
        enunciado: "Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",
        alternativas: [
            {
                texto: "Criar uma imagem utilizando uma plataforma de design como o Paint.",
                afirmacao: "Notou também que muitas pessoas não sabem ainda utilizar as ferramentas tradicionais e decidiu compartilhar seus conhecimentos de design utilizando ferramentas de pintura digital para iniciantes."
            },
            {
                texto: "Criar uma imagem utilizando um gerador de imagem de IA.",
                afirmacao: "Acelerou o processo de criação de trabalhos utilizando geradores de imagem e agora consegue ensinar pessoas que sentem dificuldades em desenhar manualmente como utilizar também!"
            }
        ]
    },
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

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
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

mostraPergunta();
