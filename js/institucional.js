var fotos = ["../img/img_institucional/card_0.png",
    "../img/img_institucional/card_1.png",
    "../img/img_institucional/card_2.png",
    "../img/img_institucional/card_3.png",
    "../img/img_institucional/card_4.png",
    "../img/img_institucional/card_5.png",
    "../img/img_institucional/card_6.png",
    "../img/img_institucional/card_7.png",
    "../img/img_institucional/card_8.png",
    "../img/img_institucional/card_9.png",
    "../img/img_institucional/card_10.png",
    "../img/img_institucional/card_11.png",
    "../img/img_institucional/card_12.png",
    "../img/img_institucional/card_13.png",
    "../img/img_institucional/card_14.png"]


var titulos = ["Carol Shaw",
    "Ellie",
    "Nicolle 'Cherrygumms' Merhy",
    "Amy Briggs",
    "Doris Self",
    "Zelda",
    "Juliana 'Showliana' Maransaldi",
    "Dona Bailey",
    "Nyvi Estephan",
    "Max Caulfield e Chloe Price",
    "Aloy",
    "Samira Close",
    "Brenda Laurel",
    "Gabriela 'Harumi' Gonçalves",
    "Samus Aran"];


var subtitulos = ["Primeira programadora e desenhista de jogo",
    "The Last Of Us",
    "De pro player à CEO",
    "Criadora do primeiro jogo de aventura para meninas.",
    "Primeira competidora feminina",
    "The Legend of Zelda",
    "Primeira proplayer BR no exterior",
    "Especialista em Interação Humano-Computador",
    "Dos games para os palcos",
    "Life Is Strange",
    "Horizon: Zero Down",
    "Streamer de games",
    "A primeira mulher a projetar um jogo de arcade",
    "Pioneirismo no LOL",
    "Metroid"];

var descricoes = ["Em 1978, Carol deixou seu nome na história dos games como a primeira mulher a programar e criar um jogo de vídeo, o 3D Tic-Tac-Toe para o Atari 2600. Ao longo dos anos, Carol criou vários outros títulos famosos na década de 80, como River Raid e Happy Trails.",
    "Enquanto The Last of Us nos apresentou uma Ellie pequena com os reflexos do cenário em que cresceu, a parte 2 do game serviu para coroar essa personagem, estrela principal de um dos melhores jogos dos últimos anos.",
    "Iniciou sua carreira nos esports aos 7 anos. Atualmente, anunciou sua aposentadoria como pro player e tornou-se a CEO da organização Black Dragons (BD), uma das maiores orgs de esports do Brasil.",
    "Amy Briggs foi a primeira criadora de game de aventura desenvolvido para meninas. O jogo Plundered Hearts foi criado em 1983 e tornou-se um grande sucesso entre o público feminino.",
    "Doris Self foi a primeira jogadora mulher a competir. Em 1983 ela entrou na Video Game Masters Tournament e quebrou o recorde mundial de alta pontuação.",
    "Uma coisa em comum entre todas as versões de Zelda é sua coragem e delicadeza. A personagem é de grande importância dentro da série, não é à toa que seu nome, não o de Link, é que está no título da franquia.",
    "Em 2020, tornou-se a primeira pro player brasileira a fazer parte de uma line up estrangeira de CS:GO.",
    "Enquanto trabalhava na Atari, na década de 80, foi co-criadora de jogos clássicos de Arcade. Após o sucesso, ficou 26 anos longe ",
    "Gamer e streamer, Nyvi tornou- se uma das apresentadoras mais presentes em eventos do universo gamer, com destaque para o Prêmio eSports Brasil",
    "Um dos melhores exemplos de narrativa que coloca o papel feminino em uma posição igualitária, Life is Strange lida com a empatia e como tratamos outras pessoas.",
    "Aloy é uma jovem caçadora, que busca respostas sobre sua vida enquanto vive em um mundo pós-apocalíptico dominado por enormes robôs.",
    "Com mais de 40 milhões de visualizações e mais de 400 mil seguidores no YouTube, Samira Close vem renovando o mundo dos jogos com protagonismo e representatividade LGBTQIAP+.",
    "Na década de 90, Laurel foi considerada uma das vozes mais fortes em realidade virtual. Também foi cofundadora da Purple Moon, uma das primeiras empresas de software a se especializar no desenvolvimento de jogos para meninas.",
    "Em 2020, se tornou a primeira mulher a disputar um campeonato oficial da Riot Games desde a concepção do cenário nacional, em 2012",
    "Considerada a 'mãe' das protagonistas femininas nos games. Surgiu em 1986 em Metroid para NES. Trouxe a discussão de gênero à tona quando anunciado que por trás da armadura e canhão havia uma mulher."]

function abrirPagina() {
    $(".fundoMulheres").hide()
}

function mudarCard(i) {
    document.querySelector(".card-img").src = fotos[i];
    document.querySelector(".card-title").innerHTML = titulos[i];
    document.querySelector(".card-subtitle").innerHTML = subtitulos[i];
    document.querySelector(".card-desc").innerHTML = descricoes[i];
    document.querySelector(".fundoMulheres").scrollIntoView();
}

$(document).ready(function () {

    var a = document.querySelector(".card-title");
    var b = document.querySelector(".card-subtitle");
    var c = document.querySelector(".card-desc");
    var d = document.querySelector(".fundoMulheres")

    // Função para selecionar os cards das mulheres e: 1.aparecer nome; 2.aparecer seta e 3.aparecer card explicativo abaixo do quadro maior e descer a página - Utilizando jQuery
    var nomes = $(".ico-nome");
    var setas = $(".seta");
    var cards = $(".fundoMulheres");

    $(".ico-mulheres").each(function (i) {
        var cadaNome = nomes.eq(i);
        var cadaSeta = setas.eq(i);
        var cadaCard = cards.eq(i);

        $(this).on({
            mouseover: function () {
                cadaNome.show(); cadaSeta.css({
                    visibility: "visible"
                })
            },
            mouseout: function () {
                cadaNome.hide(); cadaSeta.css({
                    visibility: "hidden"
                })
            },
            click: function () {
                cadaCard.show();
            },
        });
    });

    // Função para navegar entre as duas partes do card - botão esquerdo - utilizando DOM
    document.querySelector(".botao1").addEventListener("click", function trocarCard() {
        c.style.display = "none";
        a.style.display = "inline-block";
        b.style.display = "flex";
        this.disabled = true;
        document.querySelector(".botao2").disabled = false;
    });

    // Função para navegar entre as duas partes do card - botão direito - utilizando DOM
    document.querySelector(".botao2").addEventListener("click", function trocarCard() {
        c.style.display = "flex";
        a.style.display = "none";
        b.style.display = "none";
        this.disabled = true;
        document.querySelector(".botao1").disabled = false;
    });

    // Função para subir para as linhas de ícones das mulheres quando clicar no botão - utilizando DOM
    document.querySelector(".btn-primary").addEventListener("click", function () {
        document.querySelector(".player-card:nth-of-type(5)").scrollIntoView();
    });

    // Função para ocultar os cards de mulheres quando clicar no botão - utilizando jQuery. Também é resetado o efeito disabled dos botões de navegação do card.
    $(".btn-primary").on("click", () => {
        $(".fundoMulheres").slideUp();
        $(".botao1").prop("disabled", false);
        $(".botao2").prop("disabled", false);
    })

    $(".ico-mulheres").on("click", () => {
        $(".fundoMulheres").slideDown();
    })
})