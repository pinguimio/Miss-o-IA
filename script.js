const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "A trilha que leva à floresta é estreita e sinuosa. Você decide adentrar na mata fechada. A luz do sol mal consegue passar pelas copas das árvores, e o silêncio é tão profundo que você ouve o som dos seus próprios passos. De repente, a trilha termina em uma encruzilhada. À sua frente, há uma antiga estátua de pedra coberta de musgo, e à sua direita, uma trilha escura e sombria que grita horrores desconhecidos com armadilhas",
        alternativas: [
            {
                texto: "Seguir a estátua de pedra. Você acredita que símbolos antigos como esse podem ser a chave para encontrar a Pedra-Estrela.",
                afirmacao: "ir por esse caminho lhe trouçe satisfação e pistas de ser o caminho correto para chegar ao local."
            },
            {
                texto: "Olhar para a trilha escura e ver se tem alguma pequena chance de mudar o rumo da vida e sobreviver de alguma forma e se arriscar a não encontrar nada de util."
                afirmacao: "Escolheu esse caminho e quase não saiu viva, saindo machucada e bem traumatizada."
            }
        ]
    },
    {
        enunciado: "Você segue o caminho da estátua e, após alguns minutos, encontra uma clareira com um lago de águas cristalinas. No centro do lago, uma pequena ilha com uma árvore dourada brilha. Ao se aproximar, você vê uma criatura mística, um Grifo majestoso, descansando sob a árvore. Ele parece agitado, e um amuleto brilhante está em seu pescoço.",
        alternativas: [
            {
                texto: "Tenta acalmar o Grifo oferecendo-lhe um fruto raro que você trouxe para sua jornada.",
                afirmacao: " ."
            },
            {
                texto: "Tenta roubar o amuleto do pescoço do Grifo sem que ele perceba, pois você sente que ele é a chave para a Pedra-Estrela.",
                afirmacao: "Sentiu mais facilidade em utilizar seus próprios recursos para escrever seu trabalho."
            }
        ]
    },
    {
        enunciado: "Caminho do Rio (Escolha 2)",
        alternativas: [
            {
                texto: "Prossegue com cautela, tocando as paredes para se guiar e tentando não fazer barulho para evitar um desmoronamento",
                afirmacao: "Vem impulsionando a inovação na área de IA e luta para abrir novos caminhos profissionais com IA."
            },
            {
                texto: "Corre o mais rápido que pode, acreditando que o perigo de desmoronamento é iminente e que a velocidade é sua única chance.",
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
    {
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda da IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz? ",
        alternativas: [
            {
                texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                afirmacao: "Infelizmente passou a utilizar a IA para fazer todas suas tarefas e agora se sente dependente da IA para tudo."
            },
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                afirmacao: "Percebeu que toda IA reproduz orientações baseadas na empresa que programou e muito do que o chat escrevia não refletia o que pensava e por isso sabe que os textos gerados pela IA devem servir como auxílio e não resultado final. "
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