$(document).ready(() => {

    /* -------------------- ** CRIANDO VARIÁVEIS ** ----------------------- */

    /* TODAS AS PERGUNTAS FEITAS */

    var perguntasFeitas = []

    var feitas = $('#perguntasFeitas').html(perguntasFeitas.length)

    /* CRIANDO TODAS AS PERGUNTAS DO JOGO */

    var perguntas = [

        // 1

        { pergunta: "Qual a dureza e o traço, respectivamente, da Calcita?",

            respostas: ['2; Preto', '3; Branco', '4; Não possui traço', '1; Cinza'],

            acerto: "resp1",

            imagem: "<img class='imagem' src='https://didatico.igc.usp.br/wp-content/uploads/2017/04/calcita-6.jpg' alt='Calcita'>",

        },

        // 2

        { pergunta: "Qual o brilho e diafaneidade, respectivamente, da Calcita?",

            respostas: ['Nacarado e/ou Vítreo; Opaco e/ou Transparente', 'Metálico e/ou Fosco; Translúcido e/ou Transparente', 'Gorduroso e/ou Vítreo; Opaco e/ou Translúcido', 'Resinoso e/ou Sedoso; Nenhuma'],

            acerto: "resp0",

            imagem: "<img class='imagem' src='https://images.tcdn.com.br/img/img_prod/630090/calcita_optica_pedra_natural_bruta_6585_7013_1_eccb34242667c59b1bf0e4383d51888c.jpg' alt='Calcita'>",

        },  

        // 3

        { pergunta: "Qual a fórmula química da Calcita?",

            respostas: ['CaCO3', 'CaCO4', 'Ca2CO3', 'Cu2(CO3)(OH)2'],

            acerto: "resp0",

            imagem: "<img class='imagem' src='https://img.elo7.com.br/product/original/319F835/calcita-otica-cristal.jpg' alt='Calcita'>",

        },

        // 4

        { pergunta: "Qual a classe da Calcita?",

            respostas: ['Sulfetos', 'Nitratos', 'Silicatos', 'Carbonatos'],

            acerto: "resp3",

            imagem: "<img class='imagem' src='https://didatico.igc.usp.br/wp-content/uploads/2017/04/calcita-2-1024x683.jpg' alt='Calcita'>",

        },

        // 5

        { pergunta: "Qual o hábito da Calcita?",

            respostas: ['Lamelar, Colunar e/ou Prismático', 'Granular, Prismático e/ou Criptocristalino', 'Prismático, Romboédrico e/ou Escalenoédrico', 'Botrioidal, Coralóide e/ou Dentrico'],

            acerto: "resp2",

            imagem: "<img class='imagem' src='https://img.elo7.com.br/product/zoom/31DEAC9/calcita-azul-pedra-natural-bruta-5105-seguranca.jpg' alt='Calcita'>",

        },


        // 6
        
        { pergunta: "Qual a clivagem da Calcita?",

            respostas: ['Perfeita e Romboédrica', 'Não possui Clivagem', 'Imperfeita', 'Perfeita e Prismática'],

            acerto: "resp0",

            imagem: "<img class='imagem' src='https://static3.tcdn.com.br/img/img_prod/768811/calcita_verde_4_6_cm_51059_1_a5e9a36d975a4289e0bd090c725e9e09_20211006112617.jpg' alt='Calcita'>",

        },  

        // 7
        
        { pergunta: "Quais as cores mais comuns da Calcita?",

            respostas: ['Vermelho', 'Azul', 'Branco', 'Cinza'],

            acerto: "resp2",

            imagem: "<img class='imagem' src='https://pedrasecristais.com/wp-content/uploads/2018/06/Pedra-Calcita-1-900x500.jpg' alt='Calcita'>",

        },  

        // 8
        
        { pergunta: "Quais os usos da Calcita?",

            respostas: ['Fabricação de telhas, cimento e cal', 'Fabricação de cimentos, cal, argamassa e corretor de PH do solo', 'Fabricação de telhas e cerâmicas em geral', 'Não possui uma utilização eficiente'],

            acerto: "resp1",

            imagem: "<img class='imagem' src='https://museuhe.com.br/site/wp-content/uploads/2019/02/Calcita-23-850x567.jpg' alt='Calcita'>",

        },  

    ]

    var total = $('#qtdMax').html(perguntas.length)

    /* TODAS AS PERGUNTAS DO JOGO */

    var qtdPerguntas = perguntas.length - 1

    var indiceACerto = $('#indiceAcerto').html('0')

    var acertos = []

    var indiceErro = $('#indiceErro').html('0')

    var erros = []


    /* ------------------------------------------------------------------------------- */

    /* -------------------- ** CRIANDO FUNÇÕES ** ----------------------- */

    /* FUNÇÃO DE GERAR PERGUNTAS */

    gerarPergunta(qtdPerguntas);

    function gerarPergunta(maxPerguntas) {

        console.log('_________________________________________________________________________________________')

        console.log('Chamando a função de gerar perguntas')

        console.log(`O a quantidade máxima de perguntas é ${maxPerguntas}`)

        console.log('-----------------------')

        // Gerar um número aleatório que é o indice da pergunta que será feita

        let aleatorio = Number((Math.random() * maxPerguntas).toFixed())

        console.log(`O número aleatório gerado é ${aleatorio}`)

        // Indicar qual foi a pergunta selecionada

        var perguntaSelecionada = perguntas[aleatorio].pergunta
        var perguntaImagem = perguntas[aleatorio].imagem

        console.log(`A pergunta selecionada é ......... ${perguntaSelecionada}`)
        
        console.log('-----------------------')

        // Verificar se a pergunta já foi feita

        if (!perguntasFeitas.includes(aleatorio)) { // Caso a pergunta ainda não foi feita

            // Incluir indice da pergunta dentro do array perguntasFeitas

            perguntasFeitas.push(aleatorio)

            // Escrever no HTML

            $('#textQuiz').html(perguntaSelecionada)
            $('#figure').html(perguntaImagem)
            $('#textQuiz').attr('data-indice', aleatorio)

            // Preencher as respostas com um laço

            for (var i = 0; i < 4; i++) {

                $('#resp' + i).html(perguntas[aleatorio].respostas[i]);

            };

            // Chamando a função para embaralhar as respostas

            embaralharRespostas ();

            console.log('As respostas acabaram de serem embaralhadas')

            console.log('-----------------------')

        } else {

            if (perguntasFeitas.length < qtdPerguntas + 1) { // Caso a pergunta já foi feita

                // Chamando a função gerar perguntas

                return gerarPergunta(maxPerguntas);
                
            } 
            
            if (perguntasFeitas.length >= qtdPerguntas + 1) { // Caso todas as perguntas já ter sido feitas

                setTimeout(function () {

                    // Chamando a função para terminar o jogo caso todas as perguntas tenham sido feitas

                    fimJogo ();

                    resetaBotoes ();

                    console.log('Fim de jogo.')

                    console.log('-----------------------')

                }, 1500);

            }; 

        };

    };

    /* FUNÇÃO DE EMBARALHAR RESPOSTAS */

    function embaralharRespostas () {

        console.log('Chamando a função de embaralhar respostas')

        // Acessar a div HTML que contém todas as respostas

        var containerRespostas = $('#respostas');

        // Dizer que as respostas são filhas do containerRespostas

        var btns = containerRespostas.children()

        // Criar um laço que embaralha as respostas

        for (var i = 0; i < btns.length; i++) {

            containerRespostas.append(btns.eq(Math.floor(Math.random() * btns.length)))

        };

    };

    /* FUNÇÃO DE RESETAR OS BOTÕES */

    function resetaBotoes () {

        console.log('Chamando a função de resetar botões')

        // Percorrendo toda a div com a classe 'resposta'

        $('.resposta').each(function () {

            if ($(this).hasClass('selecionada')) { // Caso a div esteja com a classe 'selecionada'

                $(this).removeClass('selecionada') // Removendo a classe 'selecionada'

                console.log('Foi removido a classe > selecionada < ')

                console.log('-----------------------')

            };

            if ($(this).hasClass('correta')) { // Caso a div esteja com a classe 'correta

                $(this).removeClass('correta') // Removendo a classe 'correta'

                console.log('Foi removido a classe > correta < ')

                console.log('-----------------------')

            };

            if ($(this).hasClass('errada')) { // Caso a div esteja com a classe 'errada'

                $(this).removeClass('errada') // Removendo a classe 'errada'

                console.log('Foi removido a classe > errada < ')

                console.log('-----------------------')

            };

        });

    };

    /* FUNÇÃO DE VERIFICAR A RESPOSTA */

    verificarResposta ();

    function verificarResposta () {

        // Adicionando o evento de clique no botão #verific

        $('#verific').click(function () {

            console.log('O botão de VERIFICAR RESPOSTA foi clicado')

            console.log('-----------------------')

            // Criando uma variável que recebe o índice da pergunta

            var indice = $('#textQuiz').attr('data-indice');

            console.log(`O índice da pergunta é ${indice}`)

            console.log('-----------------------')

            // Criando uma variável que recebe a resposta certa da pergunta em questão

            var respCerta = perguntas[indice].acerto;

            console.log(`A resposta certa é ${respCerta}`)

            console.log('-----------------------')

            // Percorrendo toda a div com a classe 'resposta'

            $('.resposta').each(function () {

                if ($(this).hasClass('selecionada')) { // Caso a div esteja com a classe 'selecionada'

                    var respEscolhida = $(this).attr('id') // Atribuindo o atribudo id no elemento

                    if (respCerta == respEscolhida) { //TODA VEZ QUE ACERTAR

                        console.log('Você acertou. Parabéns!')

                        console.log('-----------------------')

                        // Adicionar um ponto ao Array que está apontando para o placar de acertos

                        acertos.push(1)

                        // Adicionar um ponto ao Array que está apontando para o placar de feitas

                        feitas.push(1)

                        // Seleciona o placar de feitas com a quantidade que está dentro do array

                        $('#perguntasFeitas').html(perguntasFeitas.length)

                        // Seleciona o placar de acertor com a quantidade que está dentro do array

                        $('#indiceAcerto').html(acertos.length)

                        // Chamando a função para ir à próxima pergunta
    
                        proximaPergunta ();

                    } else { //TODA VEZ QUE ERRAR

                        console.log('Ohh, não! Você errou.')

                        console.log('-----------------------')

                        // Adicionar um ponto ao Array que está apontando para o placar de erros

                        erros.push(1)

                        // Adicionar um ponto ao Array que está apontando para o placar de feitas

                        feitas.push(1)

                        // Seleciona o placar de feitas com a quantidade que está dentro do array

                        $('#perguntasFeitas').html(perguntasFeitas.length)

                        // Seleciona o placar de erros com a quantidade que está dentro do array

                        $('#indiceErro').html(erros.length)

                        // Adicionando o atributo 'travado' a div #quiz

                        $('.quiz').attr('data-status', 'travado')

                        // Adicionando a classe 'oculto' do botão #verific

                        $('#verific').addClass('oculto')

                        // Adicionando a classe 'correta' ao id # que contém a resposta correta

                        $('#' + respCerta).addClass('correta')

                        // Removendo a classe 'selecionada' ao id # que contém a resposta escolhida

                        $('#' + respEscolhida).removeClass('selecionada')

                        // Adicionando a classe 'errada' ao id # que contém a resposta escolhida

                        $('#' + respEscolhida).addClass('errada')

                        // Definindo um time para agir

                        if (perguntasFeitas.length < qtdPerguntas + 1) { // Caso o número de perguntas for menor que o número total de perguntas

                            setTimeout(function () {

                                // Chamando a função para ir à próxima pergunta
            
                                proximaPergunta();

                                console.log('Vamos para a próxima pergunta')

                                console.log('-----------------------')
            
                            }, 1800);
    
                        };
                                    
                        if (perguntasFeitas.length >= qtdPerguntas + 1) { // Caso as perguntas tiverem acabado
                        
                            setTimeout(function () {
                            
                                // Chamando a função para terminar o jogo caso todas as perguntas tenham sido feitas
                            
                                fimJogo ();
                            
                                console.log('Fim de jogo.')
                            
                                console.log('-----------------------')
                            
                            }, 1000);
                        
                        }; 

                    };
                    
                };

            });

        });

    };

    /* FUNÇÃO FIM DE JOGO*/

    function fimJogo () {

        // Sumindo com o quiz

        $('.quiz').addClass('oculto')

        // Zerando o Placar

        $('#perguntasFeitas').html('0')

        // Escrevendo mensagem no HTML

        $('#mensagem').html('O jogo acabou!')

        // Definindo variáveis para o cálculo de desempenho

        var acertosConv = Number.parseInt(acertos.length)

        var razao = acertosConv / (qtdPerguntas + 1)

        // Condições em função do resultado para fixar um GIF no final do jogo

        if (acertos.length <= 5) {

            $('#imgDesempenho').html("<img src='https://i.pinimg.com/originals/a2/42/20/a242206ce688c2234c2d5ed4e98a1573.gif' alt=''>")

            $('#desempenho').html(`Tem certeza que você está estudando direito? Seu desempenho foi de ${razao*100}%`)

        } else if (acertos.length <= 10) {

            $('#imgDesempenho').html("<img src='https://thumbs.gfycat.com/EminentCharmingAustraliancattledog-size_restricted.gif' alt=''>")

            $('#desempenho').html(`Convenhamos... Poderia ser melhor, né. Seu desempenho foi de ${razao*100}%`)

        } else if (acertos.length <= 15) {

            $('#imgDesempenho').html("<img src='https://i.pinimg.com/originals/c1/af/2b/c1af2b8bd355006014ac1b11a06904c6.gif' alt=''>")

            $('#desempenho').html(`Você foi incrível! Seu desempenho foi de ${razao*100}%`)

        } else if (acertos.length = 20) {

            $('#imgDesempenho').html("<img src='https://c.tenor.com/kVJlKG9tUm8AAAAC/leonardo-dicaprio-leo-dicaprio.gif' alt=''>")

            $('#desempenho').html(`Perfeito! Sê é o bixão mesmo em doido! Seu desempenho foi de ${razao*100}%`)

        };

        // Aparecendo com o painel no fim do jogo

        $('#status').removeClass('oculto')

        // Resetando o placar

        erros = []

        acertos = []

        var indiceErro = $('#indiceErro').html('0')

        var indiceAcerto = $('#indiceAcerto').html('0')

    };

    /* FUNÇÃO DE IR PARA A PRÓXIMA PERGUNTA */
    
    function proximaPergunta () {

        // Removendo a classe 'oculto' do botão #verific

        $('#verific').removeClass('oculto')

        // Chamando a função para resetar os botões

        resetaBotoes();

        // Destravando o quiz

        $('.quiz').attr('data-status', 'ok')

        // Chamando a função para carregar novas perguntas
    
        gerarPergunta(qtdPerguntas);
    
    };

    /* FUNÇÃO DE TRAVAR OS BOTÕES */

    travar();

    function travar () {

        // Percorrendo toda a div com a classe 'resposta'

        $('.resposta').click(function () {

            if ($('.quiz').attr('data-status') != 'travado') { // Caso a div não esteja com o atributo 'travado'

                // Chamando a função para resetar os botões

                resetaBotoes ();

                // Adicionando ao elemento a classe 'selecionada'
    
                $(this).addClass('selecionada')
        
            };
    
        });

    };

    /* FUNÇÃO PARA COMEÇAR UM NOVO JOGO */

    function novoJogo() {

        // Aparecendo com o botão VERIFICAR RESPOSTA no novo jogo 

        $('#verific').removeClass('oculto')

        // Adicionando o atributo 'ok' em 'data-status' 

        $('.quiz').attr('data-status', 'ok')

        // Resetando o número de perguntas feitas 
    
        perguntasFeitas = []

        // Chamando a função para resetar os botões 

        resetaBotoes();

        // Chamando a função de gerar perguntas

        gerarPergunta(qtdPerguntas);
    
        $('.quiz').removeClass('oculto')
        $('#status').addClass('oculto')

        verificarResposta ()

    };

    // Ativando a função para começar um novo jogo

    $('#novoJogo').click(function() {

        novoJogo();

    });
            
})