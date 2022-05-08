$(document).ready(() => {

    /* -------------------- ** CRIANDO VARIÁVEIS ** ----------------------- */

    /* TODAS AS PERGUNTAS FEITAS */

    var perguntasFeitas = []

    var feitas = $('#perguntasFeitas').html(perguntasFeitas.length)

    /* CRIANDO TODAS AS PERGUNTAS DO JOGO */

    var perguntas = [

    /* -------------------- ** Turmalina ** ----------------------- */

    {

        pergunta: "Qual a DUREZA e o TRAÇO, respectivamente, de Turmalina?",
        respostas: ["7; Não possui traço","7; Branco","6; Branco","6; Não possui traço"],
        acerto: "resp0",
        imagem: "<img src='https://cdn.shopify.com/s/files/1/0448/5156/0612/products/127b_9da1902d-7f06-4357-ad18-7e4447bdfcc4_530x@2x.jpg?v=1629891057' width='55%' height='18%' alt='Turmalina'>",
    
    },
    
    {
    
        pergunta:"Qual o BRILHO e DIAFANEIDADE, respectivamente, de Turmalina?",
        respostas: ["Resinoso e/ou Vítreo; Transparente e/ou Translúcido","Nacarado e/ou Gorduroso; Transparente e/ou Translúcido","Vítreo e/ou Gorduroso; Opaco e/ou Translúcido","Sedoso e/ou Nacarado; Opaco e/ou Translúcido"],
        acerto: "resp0",
        imagem: "<img src='https://loja.simbolika.com.br/media/catalog/product/cache/37a9a8f3002fee25759059124a331b12/t/u/turmalina-bruta-150g.jpg' width='55%' height='18%' alt='Turmalina'>",
    
    },

    {
    
        pergunta: "Qual a CLASSE de Turmalina?",
        respostas: ["Silicatos","Carbonatos","Haletos","NItratos"],
        acerto: "resp0",
        imagem: "<img src='https://st2.depositphotos.com/4041005/6868/i/450/depositphotos_68689721-stock-photo-shorl-black-tourmaline.jpg' width='55%' height='18%' alt='Turmalina'>",
    
    },

    {
    
        pergunta: "Qual o HÁBITO e CLIVAGEM, respectivamente de Turmalina?",
        respostas: ["Prismático; Sem Clivagem","Columar; Sem Clivagem","Laminado; Sem Clivagem","Lamelar; Sem Clivagem"],
        acerto: "resp0",
        imagem: "<img src='https://museuhe.com.br/site/wp-content/uploads/2019/05/Turmalina-37-850x568.jpg' width='55%' height='18%' alt='Turmalina'>",
    
    },
    
    {
    
        pergunta: "Quais os USOS e OCORRÊNCIAS, respectivamente, de Turmalina?",
        respostas: ["Usada gema, mas também é usada na manufatura de medidores de pressão piezoelétricos; Encontrada nos pegmatitos graníticos","Usada como comsbustível de energia nuclear; Encontrada nos pegmatitos graníticos","Usada em construções civis; Encontrada em bacias sedimentares","Usada como matéria prima em fábricas de automóveis; Encontrada em bacias sedimentares"],
        acerto: "resp0",
        imagem: "<img src='http://evolucoaching.com.br/wp-content/uploads/2019/06/turmalina-negra-direto-do-garimpo-1000-kg-D_NQ_NP_631745-MLB29120692237_012019-F.jpg' width='55%' height='18%' alt='Turmalina'>",
    
    },
    
    {
    
        pergunta: "Qual a FRATURA e TENACIDADE, respectivamente de Turmalina?",
        respostas: ["Conchoidal; Quebradiço","Irregular; Flexível","Fibroso; Quebradiço","Serrilhada; Maleável"],
        acerto: "resp0",
        imagem: "<img src='https://img.elo7.com.br/product/original/2C9CDCB/pedra-grande-turmalina-negra-bruta-1239-harmonizar.jpg' width='55%' height='18%' alt='Turmalina'>",
    
    },
    
    /* -------------------- ** Quartzo ** ----------------------- */
    
    {
    
        pergunta: "Qual a DUREZA e o TRAÇO, respectivamente, de Quartzo?",
        respostas: ["7; Não possui traço","7; Branco","8; Não possui traço","8; Branco"],
        acerto: "resp0",
        imagem: "<img src='https://museuhe.com.br/site/wp-content/uploads/2018/02/Quartzo-9-850x567.jpg' width='55%' height='18%' alt='Quartzo'>",
    
    },
    
    {
    
        pergunta:"Qual o BRILHO e DIAFANEIDADE, respectivamente, de Quartzo?",
        respostas: ["Vítreo e/ou Gorduroso; Opaco e/ou Transparente","Vítreo e/ou Gorduroso; Translúcido e/ou Transparente","Resinoso e/ou Nacarado; Opaco e/ou Transparente","Resinoso e/ou Nacarado; Translúcido e/ou Transparente"],
        acerto: "resp0",
        imagem: "<img src='https://www.globalminerio.com.br/wa_images/quartzo.jpg?v=1d8bith' width='55%' height='18%' alt='Quartzo'>",
    
    },
    
    {
    
        pergunta: "Qual a fórmula QUÍMICA e a CLASSE, respectivamente, de Quartzo?",
        respostas: ["SiO2; Silicatos","SiO2; Carbonatos","CaCO3; Fosfatos","CaCO3; Haletos"],
        acerto: "resp0",
        imagem: "<img src='https://museuhe.com.br/site/wp-content/uploads/2018/02/Quartzo2-7-850x567.jpg' width='55%' height='18%' alt='Quartzo'>",
    
    },
    
    {
    
        pergunta: "Qual o HÁBITO e CLIVAGEM, respectivamente de Quartzo?",
        respostas: ["Prismático; Sem Clivagem","Colunar; Sem Clivagem","Prismático;","Colunar; Prismática"],
        acerto: "resp0",
        imagem: "<img src='https://blog.mbastosjoias.com.br/wp-content/uploads/2020/01/pedra-ametista.png' width='55%' height='18%' alt='Quartzo'>",
    
    },
    
    {
    
        pergunta: "Quais os USOS e OCORRÊNCIAS, respectivamente, de Quartzo?",
        respostas: ["Usado nas industrias de argamassa, vidro e tijolos e ornamentação; Constituinte de rochas ígneas ácidas","Usado na produção de telhas e amianto; Constituinte de rochas ígneas ácidas ou recristalização de soluções ricas em silíca","Usado como combustível nuclear; Encontrado em bacias sedimentares","Usado na produção de pisos de cerâmica; Encontrado em bacias sedimentares"],
        acerto: "resp0",
        imagem: "<img src='https://www.vivernatural.com.br/wp-content/uploads/2019/10/ametista1-min.jpg' width='55%' height='18%' alt='Quartzo'>",
    
    },
    
    {
    
        pergunta: "Qual a FRATURA e TENACIDADE, respectivamente de Quartzo?",
        respostas: ["Conchoidal; Quebradiço","Serrilhada; Quebradiço","Conchoidal; Dúctil","Serrilhada; Dúctil"],
        acerto: "resp0",
        imagem: "<img src='https://1.bp.blogspot.com/-ydeHH2FzpgU/YH9FjIGddaI/AAAAAAAABPw/5Oi1f4BZWdchtRGb10SmIzeWa8l4zUosgCLcBGAsYHQ/w1200-h630-p-k-no-nu/QUARTZO%2BTANGERINA%2B-%2B20.04.png' width='55%' height='18%' alt='Quartzo'>",
    
    },
    
    /* -------------------- ** Gipsita ** ----------------------- */
    
    {
    
        pergunta: "Qual a DUREZA e o TRAÇO, respectivamente, de Gipsita?",
        respostas: ["Entre 1,5 e 2; Branco","Entre 2 e 2,5; Não possui traço","Entre 2 e 3; Branco","Entre 2,5 e 3,5; Não possui traço"],
        acerto: "resp0",
        imagem: "<img src='https://museuhe.com.br/site/wp-content/uploads/2019/02/Gipsita-14-850x567.jpg' width='55%' height='18%' alt='Gipsita'>",
    
    },
    
    {
    
        pergunta:"Qual o BRILHO e DIAFANEIDADE, respectivamente, de Gipsita?",
        respostas: ["Nacarado e/ou Sedoso; Transparente e/ou Translúcido","Resinoso e/ou Sedoso; Translúcido e/ou Opaco","Vítreo e/ou Gorduroso; Transparente e/ou Translúcido","Vítreo e/ou Resinoso; Translúcido e/ou Opaco"],
        acerto: "resp0",
        imagem: "<img src='https://didatico.igc.usp.br/wp-content/uploads/2017/04/gipsita-3.jpg' width='55%' height='18%' alt='Gipsita'>",
    
    },
    
    {
    
        pergunta: "Qual a fórmula QUÍMICA e a CLASSE, respectivamente, de Gipsita?",
        respostas: ["CaSO4.2H2O; Sulfatos","CaCO3.2H2O; Hidróxidos","CaSO4.2H2O; Fosfatos","CaCO3.2H2O, Nitratos"],
        acerto: "resp0",
        imagem: "<img src='https://img.elo7.com.br/product/original/37FA950/gipsita-sobre-matriz-de-quartzo-fonstones-transparente.jpg' width='55%' height='18%' alt='Gipsita'>",
    
    },
    
    {
    
        pergunta: "Qual o HÁBITO e CLIVAGEM, respectivamente de Gipsita?",
        respostas: ["Maciço, Lamelar e/ou Granular; Quatro direções","Maciço; Quatro direções","Lamelar; Quatro direções","Granular; Quatro direções"],
        acerto: "resp0",
        imagem: "<img src='https://static3.tcdn.com.br/img/img_prod/768811/gipsita_fibrosa_laranja_6_2_cm_52186_1_6bfbea94bf4eceb0677c6bbbd617cb27_20211006114614.jpg' width='55%' height='18%' alt='Gipsita'>",
    
    },
    
    {
    
        pergunta: "Quais os USOS e OCORRÊNCIAS, respectivamente, de Gipsita?",
        respostas: ["Produção de gesso, fertilizantes e fins ornamentais; Formado pela alteração de Anidrita","Produção de tijolos e argamassa; Formado pela alteração de Anidrita","Produção de telhas e amianto; Formado pela alteração da Calcita","Uso decorativo e ornamental; Formado pela alteração da Calcita"],
        acerto: "resp0",
        imagem: "<img src='https://http2.mlstatic.com/D_NQ_NP_647293-MLB29458038048_022019-O.webp' width='55%' height='18%' alt='Gipsita'>",
    
    },
    
    {
    
        pergunta: "Qual a FRATURA e TENACIDADE, respectivamente de Gipsita?",
        respostas: ["Conchoidal; Flexível","Fibrosa; Flexível","Desigual; Fibrosa","Desigual; Flexível"],
        acerto: "resp0",
        imagem: "<img src='https://img.elo7.com.br/product/original/334D101/gipsita-sobre-calcita-em-bruto-1kg-gipsita.jpg' width='55%' height='18%' alt='Gipsita'>",
    
    },
    
    /* -------------------- ** Galena ** ----------------------- */
    
    {
    
        pergunta: "Qual a DUREZA e o TRAÇO, respectivamente, de Galena?",
        respostas: ["Entre 2,5 e 3; Cinza","Entre 3 e 3,5; Cinza","Entre 1 e 2; Branco","Entre 3 e 4; Branco"],
        acerto: "resp0",
        imagem: "<img src='https://m.media-amazon.com/images/I/81PSYzLXmcL._SL1500_.jpg' width='55%' height='18%' alt='Galena'>",

    },
    
    {
    
        pergunta:"Qual o BRILHO e DIAFANEIDADE, respectivamente, de Galena?",
        respostas: ["Metálico; Opaco","Resinoso; Opaco","Nacarado; Opaco","Sedoso; Opaco"],
        acerto: "resp0",
        imagem: "<img src='https://didatico.igc.usp.br/wp-content/uploads/2017/04/galena-1.jpg' width='55%' height='18%' alt='Galena'>",
    
    },
    
    {
    
        pergunta: "Qual a fórmula QUÍMICA e a CLASSE, respectivamente, de Galena?",
        respostas: ["PbS; Sulfetos","FeS2; Sulfetos","CaCO3; Carbonatos","SiO2; Silicatos"],
        acerto: "resp0",
        imagem: "<img src='https://media.gettyimages.com/photos/galena-mineral-picture-id546417257?s=612x612' width='55%' height='18%' alt='Galena'>",
    
    },
    
    {
    
        pergunta: "Qual o HÁBITO e CLIVAGEM, respectivamente de Galena?",
        respostas: ["Granular e/ou Maciço; Perfeita e Cúbica","Botrioidal e/ou Maciço; Perfeita e Cúbica","Acicular e/ou Arborescente; Sem  Clivagem","Granular e/ou Maciço; Sem Clivagem"],
        acerto: "resp0",
        imagem: "<img src='https://thumbs.dreamstime.com/b/galeno-cru-galenite-de-cristal-no-branco-134143788.jpg' width='55%' height='18%' alt='Galena'>",
    
    },
    
    {
    
        pergunta: "Quais os USOS e OCORRÊNCIAS, respectivamente, de Galena?",
        respostas: ["Principal fonte de chumbo; Encontrada em veios e depósitos de calcários","Usada como combustível nuclear; Encontrada em veios e depósitos de calcários","Usada na industria para produção de cimento; Encontrada em bacias sedimentares"," Usada com fins  ornamentais; Encontrada próximo à vulcões"],
        acerto: "resp0",
        imagem: "<img src='https://2.bp.blogspot.com/-nfgskBEZeRA/UfGyYc30aDI/AAAAAAAAA6Q/27fRxw1U8NY/s1600/galena.jpg' width='55%'     height='18%' alt='Galena'>",
    
    },
    
    {
    
        pergunta: "Qual a FRATURA e TENACIDADE, respectivamente de Galena?",
        respostas: ["Subconchoidal; Quebradiço","Subconchoidal; Maleável","Serrilhada; Maleável","Fibrosa; Quebradiço"],
        acerto: "resp0",
        imagem: "<img src='https://media.istockphoto.com/photos/piece-of-galena-on-white-background-picture-id103965583' width='55%' height='18%' alt='Galena'>",
    
    },
    
    /* -------------------- ** Calcita ** ----------------------- */
    
    {
    
        pergunta: "Qual a DUREZA e o TRAÇO, respectivamente, de Calcita?",
        respostas: ["3; Branco","2; Branco","4; Não possui traço","5; Não possui traço"],
        acerto: "resp0",
        imagem: "<img src='https://didatico.igc.usp.br/wp-content/uploads/2017/04/calcita-6.jpg' width='55%' height='18%' alt='Calcita'>",
    
    },
    
    {
    
        pergunta:"Qual o BRILHO e DIAFANEIDADE, respectivamente, de Calcita?",
        respostas: ["Nacarado e/ou Vítreo; Opaco e/ou Transparente","Nacarado e/ou Vítreo; Translúcido e/ou Transparente","Gorduroso e/ou Vítreo; Opaco e/ou Transparente", "Gorduroso e/ou Vítreo; Translúcido e/ou Transparente"],
        acerto: "resp0",
        imagem: "<img src='https://img.elo7.com.br/product/original/319F835/calcita-otica-cristal.jpg' width='55%' height='18%' alt='Calcita'>",

    },
    
    {
    
        pergunta: "Qual a fórmula QUÍMICA e a CLASSE, respectivamente, de Calcita?",
        respostas: ["CaCO3; Carbonatos","CaCO3; Sulfetos","CaSO4; Carbonatos","CaSO4; Sulfetos"],
        acerto: "resp0",
        imagem: "<img src='https://didatico.igc.usp.br/wp-content/uploads/2017/04/calcita-2-1024x683.jpg' width='55%' height='18%' alt='Calcita'>",
    
    },
    
    {
    
        pergunta: "Qual o HÁBITO e CLIVAGEM, respectivamente de Calcita?",
        respostas: ["Prismático, Romboédrico e/ou Escalenoédrico; Clivagem Romboédrica perfeita","Prismático, Romboédrico e/ou Escalenoédrico; Sem Clivagem","Colunar, Prismático e/    ou Lamelar; Sem clivagem","Colunar, Prismático e/ou Lamelar; Clivagem Romboédrica perfeita"],
        acerto: "resp0",
        imagem: "<img src='https://img.elo7.com.br/product/original/350D215/bloco-de-calcita-branca-436g-pedra-bruta-natural-calcita-branca-bruta.jpg' width='55%' height='18%' alt='Calcita'>",
    
    },
    
    {
    
        pergunta: "Quais os USOS e OCORRÊNCIAS, respectivamente, de Calcita?",
        respostas: ["Usa-se na fabricação de cimentos e argamassa; Predominante de calcários, margas, mármores e carbonatitos","Principal fonte de chumbo; Encontrada em veios e depósitos de calcários","Produção de tijolos e argamassa; Formado pela alteração de Anidrita","Usado nas industrias de argamassa, vidro e tijolos e ornamentação;  Constituinte de rochas ígneas ácidas"],
        acerto: "resp0",
        imagem: "<img src='https://images.tcdn.com.br/img/img_prod/630090/calcita_azul_pedra_natural_bruta_5105_1_20200810102341.jpg' width='55%' height='18%' alt='Calcita'>",
    
    },
    
    {
    
        pergunta: "Qual a FRATURA e TENACIDADE, respectivamente de Calcita?",
        respostas: ["Conchoidal; Quebradiço","Conchoidal; Maleável","Serrilhada; QUebradiça","Serrilhada; Maleável"],
        acerto: "resp0",
        imagem: "<img src='https://pedrasecristais.com/wp-content/uploads/2018/06/Pedra-Calcita-1-900x500.jpg' width='55%' height='18%' alt='Calcita'>",
    
    },
    
    /* -------------------- ** Magnetita ** ----------------------- */
    
    {
    
        pergunta: "Qual a DUREZA e o TRAÇO, respectivamente, de Magnetita?",
        respostas: ["Entre 5,5 e 6,5; Preto","Entre 6,5 e 7,5; Preto","Entre 3 e 4; Cinza","Entre 6 e 7; Não possui traço"],
        acerto: "resp0",
        imagem: "<img src='https://nossaciencia.com.br/wp-content/uploads/2018/10/Magnetita.jpg' width='55%' height='18%' alt='Magnetita'>",
    
    },
    
    {
    
        pergunta:"Qual o BRILHO e DIAFANEIDADE, respectivamente, de Magnetita?",
        respostas: ["Metálico; Opaco e/ou Translúcido","Metálico; Translúcido e/ou Transparente","Resinoso e/ou Nacarado; Transparente e/ou Translúcido","Gorduroso e/ou Vítreo; Transparente e/ou Translúcido"],
        acerto: "resp0",
        imagem: "<img src='https://didatico.igc.usp.br/wp-content/uploads/2017/04/magnetita-4.jpg' width='55%' height='18%' alt='Magnetita'>",
    
    },
    
    {
    
        pergunta: "Qual a fórmula QUÍMICA e a CLASSE, respectivamente, de Magnetita?",
        respostas: ["Fe2+Fe2O4; Óxidos","Fe2+Fe2O4; Haletos","CaCO3; Sulfetos","CaCO3; Carbonatos"],
        acerto: "resp0",
        imagem: "<img src='https://thumbs.dreamstime.com/b/magnetite-em-bruto-min%C3%A9rio-de-ferro-isolada-branco-colagem-amostras-minerais-naturais-cole%C3%A7%C3%A3o-geol%C3%B3gica-cru-isolado-sobre-170797714.jpg' width='55%' height='18%' alt='Magnetita'>",
    
    },
    
    {
    
        pergunta: "Qual o HÁBITO e CLIVAGEM, respectivamente de Magnetita?",
        respostas: ["Octaédrico e/ou Maciça granular; Sem Clivagem","Maciça e/ou Botrioidal; Sem Clivagem","Octaédrico e/ou Maciça granular; Clivagem perfeita","Maciça e/ou    Botrioidal; Clivagem Perfeita"],
        acerto: "resp0",
        imagem: "<img src='https://mct.ufop.br/sites/default/files/styles/os_files_xlarge/public/mct/files/imagem_1_4.png?m=1634943672&itok=W2saziLT' width='55%' height='18%'  alt='Magnetita'>",
    
    },
    
    {
    
        pergunta: "Quais os USOS e OCORRÊNCIAS, respectivamente, de Magnetita?",
        respostas: ["Importante minério de ferro; Mineral acessório em muitas rochas magmáticas","Principal fonte de chumbo; Encontrada em veios e depósitos de calcários","Usado nas industrias de argamassa, vidro e tijolos e ornamentação; Constituinte de rochas ígneas ácidas","Usa-se na fabricação de cimentos e argamassa; Predominante de calcários, margas, mármores e carbonatitos"],
        acerto: "resp0",
        imagem: "<img src='https://wikiimg.tojsiabtv.com/wikipedia/commons/thumb/8/8b/Chalcopyrite-Magnetite-cktsr-10c.jpg/1280px-Chalcopyrite-Magnetite-cktsr-10c.jpg' width='55%' height='18%' alt='Magnetita'>",
    
    },
    
    {
    
        pergunta: "Qual a FRATURA e TENACIDADE, respectivamente de Magnetita?",
        respostas: ["Irregular; Quebradiço","Irregular; Maleável","Conchoidal; Quebradiço","Conchoidal; Maleável"],
        acerto: "resp0",
        imagem: "<img src='https://terrabrasilisdidaticos.com.br/wp-content/uploads/2021/12/geo413-mineral-magnetita.png' width='55%' height='18%' alt='Magnetita'>",
    
    },
    
    /* -------------------- ** Berilo ** ----------------------- */
    
    {
    
        ergunta: "Qual a DUREZA e o TRAÇO, respectivamente, de Berilo?",
        espostas: ["Entre 7,5 e 8; Não possui traço","Maior que 8; Não possui traço","Entre 6 e 7; Não possui traço","Entre 5,5 e 6,5; Branco"],
        certo: "resp0",
        magem: "<img src='https://www.cristaisdecurvelo.com.br/product_images/uploaded_images/berilo_mineral.jpg' width='55%' height='18%' alt='Berilo'>",
    
    },
    
    {
    
        pergunta:"Qual o BRILHO e DIAFANEIDADE, respectivamente, de Berilo?",
        respostas: ["Resinoso e/ou Vítreo; Transparente e/ou Translúcido","Resinoso e/ou Vítreo; Opaco e/ou Translúcido","Nacarado e/ou Gorduroso; Transparente e/ou Translúcido", "Nacarado e/ou Gorduroso; Transparente e/ou Translúcido"],
        acerto: "resp0",
        imagem: "<img src='http://2.bp.blogspot.com/_2jqRJ-Jj7-Y/R7vr3-u9zZI/AAAAAAAAAj8/pr1O4mGlhBo/w1200-h630-p-k-no-nu/emerald2.jpg' width='55%' height='18%' alt='Berilo'>",
    
    },
    
    {
    
        pergunta: "Qual a fórmula QUÍMICA e a CLASSE, respectivamente, de Berilo?",
        respostas: ["Be3Al2Si6O18; Silicatos","Fe2+Fe2O4; Óxidos","CaCO3; Carbonatos","CaSO4; Sulfetos"],
        acerto: "resp0",
        imagem: "<img src='https://tecnicoemineracao.com.br/wp-content/uploads/2015/03/Hist%C3%B3ria-e-extra%C3%A7%C3%A3o-do-Berilo.jpg' width='55%' height='18%' alt='Berilo'>",
    
    },
    
    {
    
        pergunta: "Qual o HÁBITO e CLIVAGEM, respectivamente de Berilo?",
        respostas: ["Prismático, Estriado, Colunar e/ou Granular; Uma direção imperfeita","Lamelar e/ou Botrioidal; Sem Clivagem","Lamelar e/ou Botrioidal; Clivagem Perfeita", "Prismático, Estriado, Colunar e/ou Granular; Sem Clivagem"],
        acerto: "resp0",
        imagem: "<img src='https://didatico.igc.usp.br/wp-content/uploads/2017/04/berilo-4.jpg' width='55%' height='18%' alt='Berilo'>",
    
    },
    
    {
    
        pergunta: "Quais os USOS e OCORRÊNCIAS, respectivamente, de Berilo?",
        respostas: ["Usado como gema e é fonte do elemento berilo; Encontrado em cavidades de granitos e granitos pegmatíticos","Importante minério de ferro; Mineral acessório em muitas rochas magmáticas","Usado nas industrias de argamassa, vidro e tijolos e ornamentação; Constituinte de rochas ígneas ácidas","Encontrado em rochas sedimentares como  arenitos imaturos; É utilizada no fabrico de porcelanas e como constituinte de pós abrasivos."],
        acerto: "resp0",
        imagem: "<img src='https://www.vivernatural.com.br/wp-content/uploads/2018/10/2601a-1-720x426-min.jpg' width='55%' height='18%' alt='Berilo'>",
    
    },
    
    {
    
        pergunta: "Qual a FRATURA e TENACIDADE, respectivamente de Berilo?",
        respostas: ["Conchoidal; Quebradiço","Conchoidal; Dúctil","Serrilhada; Maleável","Serrilhada; Quebradiço"],
        acerto: "resp0",
        imagem: "<img src='http://sgbeduca.cprm.gov.br/media/adultos/pedras_preciosas_semi2.jpg' width='55%' height='18%' alt='Berilo'>",
    
    },
    
    /* -------------------- ** Ortoclasio ** ----------------------- */
    
    {
    
        pergunta: "Qual a DUREZA e o TRAÇO, respectivamente, de Ortoclásio?",
        respostas: ["Entre 6 e 6,5; Branco","Entre 6,5 e 7; Não possui traço","Entre 5 e 6; Branco","Entre 3 e 4; Branco"],
        acerto: "resp0",
        imagem: "<img src='https://museuhe.com.br/site/wp-content/uploads/2019/02/Ortocl%C3%A1sio-23-850x568.jpg' width='55%' height='18%' alt='Ortoclásio'>",
    
    },
    
    {
    
        pergunta:"Qual o BRILHO e DIAFANEIDADE, respectivamente, de Ortoclásio?",
        respostas: ["Nacarado e/ou Vítreo; Transparente e/ou Translúcido","Resinoso e/ou Sedoso; Transparente e/ou Translúcido","Vítreo e/ou Gorduroso; Transparente e/ou Opaco", "Terroso e/ou Metálico; Opaco e/ou Translúcido"],
        acerto: "resp0",
        imagem: "<img src='https://www.cristaisdecurvelo.com.br/product_images/uploaded_images/ortoclasio28.jpg' width='55%' height='18%' alt='Ortoclásio'>",
    
    },
    
    {
    
        pergunta: "Qual a fórmula QUÍMICA e a CLASSE, respectivamente, de Ortoclásio?",
        respostas: ["KAlSi3O8; Silicatos","Be3Al2Si6O18; Silicatos","KAlSi3O8; Sulfetos","Be3Al2Si6O18; Carbonatos"],
        acerto: "resp0",
        imagem: "<img src='https://upload.wikimedia.org/wikipedia/commons/f/fc/Ortoklaz2_Benono%2C_Madagaskar.JPG' width='55%' height='18%' alt='Ortoclásio'>",
    
    },
    
    {
    
        pergunta: "Qual o HÁBITO e CLIVAGEM, respectivamente de Ortoclásio?",
        respostas: ["Prismático, Granular e/ou Maciço; Duas direções de clivagem perfeitas","Prismático, Estriado, Colunar e/ou Granular; Uma direção imperfeita","Lamelar e/ou Botrioidal; Clivagem Perfeita","Prismático, Estriado, Colunar e/ou Granular; Sem Clivagem"],
        acerto: "resp0",
        imagem: "<img src='http://skywalker.cochise.edu/wellerr/mineral/orthoclase/6pegmatite5139.jpg' width='55%' height='18%' alt='Ortoclásio'>",
    
    },
    
    {
    
        pergunta: "Quais os USOS e OCORRÊNCIAS, respectivamente, de Ortoclásio?",
        respostas: ["Utilizada no fabrico de porcelanas e como constituinte de pós abrasivos; Encontrado em rochas sedimentares como arenitos imaturos","Usado como gema e é fonte do elemento berilo; Encontrado em cavidades de granitos e granitos pegmatíticos","Importante minério de ferro; Mineral acessório em muitas rochas magmáticas","Usa-se na fabricação de cimentos e argamassa; Predominante de calcários, margas, mármores e carbonatitos"],
        acerto: "resp0",
        imagem: "<img src='http://skywalker.cochise.edu/wellerr/mineral/orthoclase/6pegmatite5135.jpg' width='55%' height='18%' alt='Ortoclásio'>",
    
    },
    
    {
    
        pergunta: "Qual a FRATURA e TENACIDADE, respectivamente de Ortoclásio?",
        respostas: ["Conchoidal; Quebradiço","Conchoidal; Flexível","Fibrosa; Flexível","Fibrosa; Quebradiço"],
        acerto: "resp0",
        imagem: "<img src='http://skywalker.cochise.edu/wellerr/mineral/orthoclase/6orthoclase-twin272a.jpg' width='55%' height='18%' alt='Ortoclásio'>",
    
    },
    
    /* -------------------- ** Cianita ** ----------------------- */
    
    {
    
        pergunta: "Qual a DUREZA e o TRAÇO, respectivamente, de Cianita?",
        respostas: ["Entre 5 e 7; Branco","Entre 8 e 9; Branco","Entre 1 e 2; Branco","Entre 3 e 4; Branco"],
        acerto: "resp0",
        imagem: "<img src='https://upload.wikimedia.org/wikipedia/commons/8/80/KyaniteUSGOV.jpg' width='55%' height='18%' alt='Cianita'>",
    
    },
    
    {
    
        pergunta:"Qual o BRILHO e DIAFANEIDADE, respectivamente, de Cianita?",
        respostas: ["Nacarado e/ou Vítreo; Transparente e/ou Translúcido","Nacarado e/ou Vítreo; Opaco e/ou Translúcido","Terroso e/ou Resinoso; Transparente e/ou Translúcido", "Terroso e/ou Resinoso; Opaco e/ou Translúcido"],
        acerto: "resp0",
        imagem: "<img src='https://didatico.igc.usp.br/wp-content/uploads/2017/04/cianita-1.jpg' width='55%' height='18%' alt='Cianita'>",
    
    },
    
    {
    
        pergunta: "Qual a fórmula QUÍMICA e a CLASSE, respectivamente, de Cianita?",
        respostas: ["Al2SiO5; Silicatos","KAlSi3O8; Silicatos","Be3Al2Si6O18; Silicatos","KAlSi3O8; Sulfetos"],
        acerto: "resp0",
        imagem: "<img src='https://museuhe.com.br/site/wp-content/uploads/2019/02/Cianita-29-850x567.jpg' width='55%' height='18%' alt='Cianita'>",
    
    },
    
    {
    
        pergunta: "Qual o HÁBITO e CLIVAGEM, respectivamente de Cianita?",
        respostas: ["Lamelar e/ou Colunar; Duas direções de clivagem, uma direção perfeita e uma boa","Lamelar e/ou Colunar; Sem Clivagem","Prismático e/ou Colunar; Sem Clivagem", "Prismático e/ou Colunar; Duas direções de clivagem, uma direção perfeita e uma boa"],
        acerto: "resp0",
        imagem: "<img src='http://4.bp.blogspot.com/-B3UjHu6E8bo/VqqcJbXCZZI/AAAAAAAAO7k/qfk1GstBExM/s1600/IMG_0560_1.jpg' width='55%' height='18%' alt='Cianita'>",
    
    },
    
    {
    
        pergunta: "Quais os USOS e OCORRÊNCIAS, respectivamente, de Cianita?",
        respostas: ["Usada como gema, em cerâmica e refratários; Resultado de metamorfismo regional de pelitos a altas pressões","Utilizada no fabrico de porcelanas e como constituinte de pós abrasivos; Encontrado em rochas sedimentares como arenitos imaturos","Usa-se na fabricação de cimentos e argamassa; Predominante de calcários, margas, mármores e carbonatitos","Usado como gema e é fonte do elemento berilo; Encontrado em cavidades de granitos e granitos pegmatíticos"],
        acerto: "resp0",
        imagem: "<img src='https://museuhe.com.br/site/wp-content/uploads/2019/02/Cianita-32-850x567.jpg' width='55%' height='18%' alt='Cianita'>",
    
    },
    
    {
    
        pergunta: "Qual a FRATURA e TENACIDADE, respectivamente de Cianita?",
        respostas: ["Estilhaçada; Quebradiço","Estilhaçada; Maleável","Irregular; Quebradiço","Irregular; Maleável"],
        acerto: "resp0",
        imagem: "<img src='http://1.bp.blogspot.com/-GKxOSAyx5fI/UKUVnBwc4mI/AAAAAAAAAA4/aieOWNAzAFg/s1600/Cianita+o+distena.jpg' width='55%' height='18%' alt='Cianita'>",
    
    },
    
    /* -------------------- ** Malaquita ** ----------------------- */
    
    {
    
        pergunta: "Qual a DUREZA e o TRAÇO, respectivamente, de Malaquita?",
        respostas: ["Entre 3,5 e 4; Verde claro","Entre 4 e 5; Verde claro","Entre 5 e 6; Verde escuro","Entre 2 e 3; Verde escuro"],
        acerto: "resp0",
        imagem: "<img src='https://didatico.igc.usp.br/wp-content/uploads/2017/04/malaquita-1.jpg' width='55%' height='18%' alt='Malaquita'>",
    
    },
    
    {
    
        pergunta:"Qual o BRILHO e DIAFANEIDADE, respectivamente, de Malaquita?",
        respostas: ["Nacarado, Terroso e/ou Sedoso; Opaco e/ou Transparente","Nacarado; Opaco e/ou Transparente","Terroso; Opaco e/ou Transparente","Sedoso; Opaco e/ou Transparente"],
        acerto: "resp0",
        imagem: "<img src='https://media.istockphoto.com/photos/green-malachite-mineral-stone-isolated-on-white-picture-id508103246' width='55%' height='18%' alt='Malaquita'>",
    
    },
    
    {
    
        pergunta: "Qual a fórmula QUÍMICA e a CLASSE, respectivamente, de Malaquita?",
        respostas: ["Cu2CO3(OH)2; Carbonatos","Al2SiO5; Silicatos","KAlSi3O8; Silicatos","CaCO3; Carbonatos"],
        acerto: "resp0",
        imagem: "<img src='https://ufprvirtual.ufpr.br/pluginfile.php/432565/course/overviewfiles/malaquita-e1577998862102.gif' width='55%' height='18%' alt='Malaquita'>",
    
    },
    
    {
    
        pergunta: "Qual o HÁBITO e CLIVAGEM, respectivamente de Malaquita?",
        respostas: ["Maciça, Botrioidal e/ou Granular; Três direções de clivagem, duas direções de clivagem perfeitas e uma fraca","Maciça; Três direções de clivagem, duas direções de clivagem perfeitas e uma fraca","Botrioidal; Três direções de clivagem, duas direções de clivagem perfeitas e uma fraca","Granular; Três direções de clivagem, duas direções de clivagem perfeitas e uma fraca"],
        acerto: "resp0",
        imagem: "<img src='https://www.waufen.com.br/wp-content/uploads/2020/10/malachite-2775997_1280.jpg' width='55%' height='18%' alt='Malaquita'>",
    
    },
    
    {
    
        pergunta: "Quais os USOS e OCORRÊNCIAS, respectivamente, de Malaquita?",
        respostas: ["Usada como gema e para ornamentação; Mineral supérgeno. Encontrado nas porções oxidadas dos filões de cobre","Usada como gema, em cerâmica e refratários; Resultado de metamorfismo regional de pelitos a altas pressões","Utilizada no fabrico de porcelanas e como constituinte de pós abrasivos; Encontrado em rochas sedimentares como arenitos imaturos","Usa-se na fabricação de cimentos e argamassa; Predominante de calcários, margas, mármores e carbonatitos"],
        acerto: "resp0",
        imagem: "<img src='https://2.bp.blogspot.com/-cbeX_DvIC-U/UD5oJjFzOTI/AAAAAAAAAHw/u6YSX3eX7i0/s1600/DSC04193_Malaquita+veludo.JPG' width='55%' height='18%' alt='Malaquita'>",
    
    },
    
    {
    
        pergunta: "Qual a FRATURA e TENACIDADE, respectivamente de Malaquita?",
        respostas: ["Conchoidal e/ou Irregular; Quebradiço","Serrilhada; Quebradiço","Fibrosa; Maleável","Irregular; Maleável"],
        acerto: "resp0",
        imagem: "<img src='https://1.bp.blogspot.com/-5CN6UgpVsG4/UVMrjwBz0NI/AAAAAAAAAMA/gQC4Ui9iUjU/s1600/DSC05921.JPG' width='55%' height='18%' alt='Malaquita'>",
    
    },
    
    /* -------------------- ** Fluorita ** ----------------------- */
    
    {
    
        pergunta: "Qual a DUREZA e o TRAÇO, respectivamente, de Fluorita?",
        respostas: ["4; Branco","3; Branco","5; Branco","6; Branco"],
        acerto: "resp0",
        imagem: "<img src='https://didatico.igc.usp.br/wp-content/uploads/2017/04/fluorita-6.jpg' width='55%' height='18%' alt='Fluorita'>",
    
    },
    
    {
    
        pergunta:"Qual o BRILHO e DIAFANEIDADE, respectivamente, de Fluorita?",
        respostas: ["Fosco e/ou Vítreo; Transparente e/ou Vítreo","Nacarado e/ou Resinoso; Opaco e/ou Translúcido","Gorduroso e/ou Vítreo; Transparente e/ou Vítreo","Sedoso e/ou Nacarado; Opaco e/ou Translúcido"],
        acerto: "resp0",
        imagem: "<img src='https://museuhe.com.br/site/wp-content/uploads/2017/09/Fluorita-15-850x567.jpg' width='55%' height='18%' alt='Fluorita'>",
    
    },
    
    {
    
        pergunta: "Qual a fórmula QUÍMICA e a CLASSE, respectivamente, de Fluorita?",
        respostas: ["CaF2; Haletos","Cu2CO3(OH)2; Carbonatos","Al2SiO5; Silicatos","CaCO3; Carbonatos"],
        acerto: "resp0",
        imagem: "<img src='https://upload.wikimedia.org/wikipedia/commons/0/0d/3192M-fluorite1.jpg' width='55%' height='18%' alt='Fluorita'>",
    
    },
    
    {
    
        pergunta: "Qual o HÁBITO e CLIVAGEM, respectivamente de Fluorita?",
        respostas: ["Cristais cúbicos ou octaédricos, Granular e/ou Maciço; Clivagem perfeita","Cristais cúbicos ou octaédricos, Granular e/ou Maciço; Sem Clivagem","Colunar e/ou Prismático; Clivagem perfeita","Colunar e/ou Prismático; Sem Clivagem"],
        acerto: "resp0",
        imagem: "<img src='https://museuhe.com.br/site/wp-content/uploads/2018/02/Fluorita-4-850x568.jpg' width='55%' height='18%' alt='Fluorita'>",
    
    },
    
    {
    
        pergunta: "Quais os USOS e OCORRÊNCIAS, respectivamente, de Fluorita?",
        respostas: ["Usa-se na industria química e na fabricação do aço e na manufatura de vidros; Encontra-se em veios hidrotermais","Usada como gema e para ornamentação; Mineral supérgeno. Encontrado nas porções oxidadas dos filões de cobre","Usada como gema, em cerâmica e refratários; Resultado de metamorfismo regional de pelitos a altas pressões","Utilizada no fabrico de porcelanas e como constituinte de pós abrasivos; Encontrado em rochas sedimentares como arenitos imaturos"],
        acerto: "resp0",
        imagem: "<img src='https://museuhe.com.br/site/wp-content/uploads/2019/02/Fluorita-9-850x567.jpg' width='55%' height='18%' alt='Fluorita'>",
    
    },
    
    {
    
        pergunta: "Qual a FRATURA e TENACIDADE, respectivamente de Fluorita?",
        respostas: ["irregular e/ou Subconchoidal; Quebradiço","Serrilhada; Quebradiço","Fibrosa; Maleável","Irregular; Maleável"],
        acerto: "resp0",
        imagem: "<img src='https://museuhe.com.br/site/wp-content/uploads/2019/02/Fluorita-14-850x568.jpg' width='55%' height='18%' alt='Fluorita'>",
    
    },
    
    
    /* -------------------- ** Enxofre ** ----------------------- */
    
    {
    
        pergunta: "Qual a DUREZA e o TRAÇO, respectivamente, de Enxofre?",
        respostas: ["Entre 1,5 e 2,5; Branco","Entre 3 e 4; Branco","Entre 3,5 e 4,5; Branco","Entre 1 e 2; Branco"],
        acerto: "resp0",
        imagem: "<img src='https://museuhe.com.br/site/wp-content/uploads/2018/02/Enxofre-1-850x567.jpg' width='55%' height='18%' alt='Enxofre'>",
    
    },
    
    {
    
        pergunta:"Qual o BRILHO e DIAFANEIDADE, respectivamente, de Enxofre?",
        respostas: ["Resinoso e/ou Gorduroso; Transparente e/ou Translúcido","Vítreo e/ou Gorduroso; Transparente e/ou Translúcido","Nacarado e/ou Sedoso; Opaco e/ou Translúcido","Resinoso e/ou Gorduroso; Opaco e/ou Translúcido"],
        acerto: "resp0",
        imagem: "<img src='https://museuhe.com.br/site/wp-content/uploads/2018/02/Enxofre-3-850x567.jpg' width='55%' height='18%' alt='Enxofre'>",
    
    },
    
    {
    
        pergunta: "Qual a fórmula QUÍMICA e a CLASSE, respectivamente, de Enxofre?",
        respostas: ["S; Elementos Nativos","CaF2; Haletos","Cu2CO3(OH)2; Carbonatos","Al2SiO5; Silicatos"],
        acerto: "resp0",
        imagem: "<img src='https://museuhe.com.br/site/wp-content/uploads/2018/02/Enxofre-4-850x568.jpg' width='55%' height='18%' alt='Enxofre'>",
    
    },
    
    {
    
        pergunta: "Qual o HÁBITO e CLIVAGEM, respectivamente de Enxofre?",
        respostas: ["Granular e/ou Maciço; Três direções de clivagem imperfeitas","Granular e/ou Maciço; Sem Clivagem","Botrioidal e/ou Granular; Três direções de clivagem     imperfeitas","Botrioidal e/ou Granular; Sem Clivagem"],
        acerto: "resp0",
        imagem: "<img src='https://museuhe.com.br/site/wp-content/uploads/2018/02/Enxofre-5-850x567.jpg' width='55%' height='18%' alt='Enxofre'>",
    
    },
    
    {
    
        pergunta: "Quais os USOS e OCORRÊNCIAS, respectivamente, de Enxofre?",
        respostas: ["Principal fonte do elemento enxofre; Bordas de vulcões e em rochas sedimentares associado a anidrita, gipsita e carbonatos","Usa-se na industria química e na fabricação do aço e na manufatura de vidros; Encontra-se em veios hidrotermais","Usada como gema e para ornamentação; Mineral supérgeno. Encontrado nas porções oxidadas dos filões de cobre","Usada como gema, em cerâmica e refratários; Resultado de metamorfismo regional de pelitos a altas pressões"],
        acerto: "resp0",
        imagem: "<img src='https://museuhe.com.br/site/wp-content/uploads/2018/02/Enxofre-6-850x568.jpg' width='55%' height='18%' alt='Enxofre'>",
    
    },
    
    {
    
        pergunta: "Qual a FRATURA e TENACIDADE, respectivamente de Enxofre?",
        respostas: ["Conchoidal e/ou Irregular; Séctil e/ou Frágil","Conchoidal e/ou Irregular; Fragil e/ou Quebradiço","Serrilhada e/ou Fibrosa; Séctil e/ou Frágil","Serrilhada e/ou Fibrosa; Fragil e/ou Quebradiço"],
        acerto: "resp0",
        imagem: "<img src='https://thumbs.dreamstime.com/b/rough-sulphur-sulfur-ore-cutout-white-background-172494960.jpg' width='55%' height='18%' alt='Enxofre'>",
    
    },
    
    /* -------------------- ** Pirita ** ----------------------- */
    
    {
    
        pergunta: "Qual a DUREZA e o TRAÇO, respectivamente, de Pirita?",
        respostas: ["Entre 6 e 6,5; Preto esverdeado","Entre 6,5 e 7,5; Preto esverdeado","Entre 4 e 5; Preto","Entre 3 e 4; Preto"],
        acerto: "resp0",
        imagem: "<img src='https://didatico.igc.usp.br/wp-content/uploads/2017/04/pirita-2.jpg' width='55%' height='18%' alt='Pirita'>",
    
    },
    
    {
    
        pergunta:"Qual o BRILHO e DIAFANEIDADE, respectivamente, de Pirita?",
        respostas: ["Metálico; Opaco","Metálico; Translúcido","Resinoso; Opaco","Resinoso; Translúcido"],
        acerto: "resp0",
        imagem: "<img src='https://www.iquilibrio.com/blog/wp-content/uploads/2018/04/pirita.jpg' width='55%' height='18%' alt='Pirita'>",
    
    },
    
    {
    
        pergunta: "Qual a fórmula QUÍMICA e a CLASSE, respectivamente, de Pirita?",
        respostas: ["FeS2; Sulfetos","FeS2; Haletos","FeS2; Óxidos","FeS2; Carbonatos"],
        acerto: "resp0",
        imagem: "<img src='https://img.freepik.com/fotos-gratis/a-pirita-mineral-ou-pirita-de-ferro_72967-641.jpg' width='55%' height='18%' alt='Pirita'>",
    
    },
    
    {
    
        pergunta: "Qual o HÁBITO e CLIVAGEM, respectivamente de Pirita?",
        respostas: ["Cúbico e/ou Granular; Uma direção de Clivagem indistinta","Cúbico e/ou Granular; Sem Clivagem","Arborescente e/ou Granular; Sem Clivagem","Arborescente e/ou Granular; Uma direção de Clivagem indistinta"],
        acerto: "resp0",
        imagem: "<img src='https://museuhe.com.br/site/wp-content/uploads/2018/02/Pirita-2-850x568.jpg' width='55%' height='18%' alt='Pirita'>",
    
    },
    
    {
    
        pergunta: "Quais os USOS e OCORRÊNCIAS, respectivamente, de Pirita?",
        respostas: ["Fornece enxofre para a fabricação de H2SO4 e carraposas; Ocorre como segregações magmáticas, como mineral acessório em rochas ígneas","Principal fonte do elemento enxofre; Bordas de vulcões e em rochas sedimentares associado a anidrita, gipsita e carbonatos","Usa-se na industria química e na fabricação do aço e na manufatura de vidros; Encontra-se em veios hidrotermais","Usada como gema e para ornamentação; Mineral supérgeno. Encontrado nas porções oxidadas dos filões de cobre"],
        acerto: "resp0",
        imagem: "<img src='https://museuhe.com.br/site/wp-content/uploads/2019/02/Pirita-850x567.jpg' width='55%' height='18%' alt='Pirita'>",
    
    },
    
    {
    
        pergunta: "Qual a FRATURA e TENACIDADE, respectivamente de Pirita?",
        respostas: ["Conchoidal e/ou Irregular; Friável e/ou Quebradiço","Conchoidal e/ou Irregular; Maleável e/ou Dúctil","Serrilhada e/ou Fibrosa; Friável e/ou Quebradiço","Serrilhada e/ou Fibrosa; Maleável e/ou Dúctil"],
        acerto: "resp0",
        imagem: "<img src='https://pedrasecristais.com/wp-content/uploads/2018/06/Pirita-1.jpg' width='55%' height='18%' alt='Pirita'>",
    
    },
    
    /* -------------------- ** Goethita ** ----------------------- */
    
    {
    
        pergunta: "Qual a DUREZA e o TRAÇO, respectivamente, de Goethita?",
        respostas: ["Entre 5 e 5,5; Amarelo amarronzado","Entre 6 e 7; Amarelo amarronzado","Entre 4,5 e 5,5; Preto","Entre 3,5 e 4; Preto"],
        acerto: "resp0",
        imagem: "<img src='https://museuhe.com.br/site/wp-content/uploads/2018/02/Goethita-1-850x567.jpg' width='55%' height='18%' alt='Goethita'>",
    
    },
    
    {
    
        pergunta:"Qual o BRILHO e DIAFANEIDADE, respectivamente, de Goethita?",
        respostas: ["Metálico e/ou Terroso; Opaco e/ou Transparente","Metálico e/ou Terroso; Translúcido e/ou Transparente","Resinoso e/ou Vítreo; Opaco e/ou Translúcido","Resinoso e/ou Vítreo; Opaco e/ou Transparente"],
        acerto: "resp0",
        imagem: "<img src='https://museuhe.com.br/site/wp-content/uploads/2017/09/Goethita-850x568.jpg' width='55%' height='18%' alt='Goethita'>",
    
    },
    
    {
    
        pergunta: "Qual a fórmula QUÍMICA e a CLASSE, respectivamente, de Goethita?",
        respostas: ["FeO(OH); Hidróxidos","FeS2; Sulfetos","Cu2CO3(OH)2; Carbonatos","Al2SiO5; Silicatos"],
        acerto: "resp0",
        imagem: "<img src='https://www.cristaisdecurvelo.com.br/product_images/uploaded_images/goethita-2dw.jpg' width='55%' height='18%' alt='Goethita'>",
    
    },
    
    {
    
        pergunta: "Qual o HÁBITO e CLIVAGEM, respectivamente de Goethita?",
        respostas: ["Acicular, Botrioidal e/ou Granular; Duas direções de clivagem, uma direção perfeita e uma distinta","Acicular; Duas direções de clivagem, uma direção perfeita e uma distinta","Botrioidal; Clivagem perfeita","Granular; Clivagem perfeita"],
        acerto: "resp0",
        imagem: "<img src='https://http2.mlstatic.com/D_NQ_NP_675434-MLM46422633836_062021-O.jpg' width='55%' height='18%' alt='Goethita'>",
    
    },
    
    {
    
        pergunta: "Quais os USOS e OCORRÊNCIAS, respectivamente, de Goethita?",
        respostas: ["Minério de ferro; Formado sob condições de oxidação. Também como mantos lateríticos residuais","Fornece enxofre para a fabricação de H2SO4 e carraposas; Ocorre como segregações magmáticas, como mineral acessório em rochas ígneas","Principal fonte do elemento enxofre; Bordas de vulcões e em rochas sedimentares associado a anidrita, gipsita e carbonatos","Usa-se na industria química e na fabricação do aço e na manufatura de vidros; Encontra-se em veios hidrotermais"],
        acerto: "resp0",
        imagem: "<img src='http://www.johnbetts-fineminerals.com/jhbnyc/articles/325de3.jpg' width='55%' height='18%' alt='Goethita'>",
    
    },
    
    {
    
        pergunta: "Qual a FRATURA e TENACIDADE, respectivamente de Goethita?",
        respostas: ["Irregular; Quebradiço","Irregular; Flexível","Conchoidal; Quebradiço","Conchoidal; Flexível"],
        acerto: "resp0",
        imagem: "<img src='https://3.bp.blogspot.com/-X3ebvyLUHJs/VrnFxP23tfI/AAAAAAAABhc/_YuSyp4yT8I/s1600/Goethite.JPG' width='55%' height='18%' alt='Goethita'>",
    
    },
    
    /* -------------------- ** Muscovita ** ----------------------- */
    
    {
    
        pergunta: "Qual a DUREZA e o TRAÇO, respectivamente, de Muscovita?",
        respostas: ["Entre 2,5 e 4; Branco","Entre 1 e 2; Branco","Entre 4 e 5; Cinza","Entre 4,5 e 6; Cinza"],
        acerto: "resp0",
        imagem: "<img src='https://museuhe.com.br/site/wp-content/uploads/2019/02/Muscovita-33-850x568.jpg' width='55%' height='18%' alt='Muscovita'>",
    
    },
    
    {
    
        pergunta:"Qual o BRILHO e DIAFANEIDADE, respectivamente, de Muscovita?",
        respostas: ["Nacarado, Vítreo e/ou Sedoso; Transparente e/ou Translúcido","Nacarado, Vítreo e/ou Sedoso; Opaco e/ou Translúcido","Gorduroso, Vítreo e/ou Resinoso; Transparente e/ou Translúcido","Gorduroso, Vítreo e/ou Resinoso; Opaco e/ou Translúcido"],
        acerto: "resp0",
        imagem: "<img src='https://museuhe.com.br/site/wp-content/uploads/2019/02/Muscovita-36-850x568.jpg' width='55%' height='18%' alt='Muscovita'>",
    
    },
    
    {
    
        pergunta: "Qual a fórmula QUÍMICA e a CLASSE, respectivamente, de Muscovita?",
        respostas: ["KAl2(AlSi3O10)(OH)2; Silicatos","FeO(OH); Hidróxidos","Cu2CO3(OH)2; Carbonatos","Al2SiO5; Silicatos"],
        acerto: "resp0",
        imagem: "<img src='https://museuhe.com.br/site/wp-content/uploads/2019/02/Muscovita-46-850x568.jpg' width='55%' height='18%' alt='Muscovita'>",
    
    },
    
    {
    
        pergunta: "Qual o HÁBITO e CLIVAGEM, respectivamente de Muscovita?",
        respostas: ["Micáceo; Clivagem perfeita","Micáceo; Sem Clivagem","Maciço; Clivagem perfeita","Maciço; Sem Clivagem"],
        acerto: "resp0",
        imagem: "<img src='https://museuhe.com.br/site/wp-content/uploads/2019/02/Muscovita-850x567.jpg' width='55%' height='18%' alt='Muscovita'>",
    
    },
    
    {
    
        pergunta: "Quais os USOS e OCORRÊNCIAS, respectivamente, de Muscovita?",
        respostas: ["Usado como material de isolamento na fabricação de aparelhos elétricos; Ocorre principalmente em rochas ácidas (granitos e pegmatitos)","Minério de ferro; Formado sob condições de oxidação. Também como mantos lateríticos residuais","Fornece enxofre para a fabricação de H2SO4 e carraposas; Ocorre como segregações magmáticas, como mineral acessório em rochas ígneas","Principal fonte do elemento enxofre; Bordas de vulcões e em rochas sedimentares associado a anidrita, gipsita e carbonatos"],
        acerto: "resp0",
        imagem: "<img src='https://didatico.igc.usp.br/wp-content/uploads/2017/04/muscovita-3.jpg' width='55%' height='18%' alt='Muscovita'>",
    
    },
    
    {
    
        pergunta: "Qual a FRATURA e TENACIDADE, respectivamente de Muscovita?",
        respostas: ["Micácea; Flexível e/ou Elástico","Micácea; Quebradiça","Micácea; Dúctil","Fibrosa; Flexível e/ou Elástico"],
        acerto: "resp0",
        imagem: "<img src='https://didatico.igc.usp.br/wp-content/uploads/2017/04/muscovita-1.jpg' width='55%' height='18%' alt='Muscovita'>",
    
    },

    /* -------------------- ** Sodalita ** ----------------------- */
    
    {
    
        pergunta: "Qual a DUREZA e o TRAÇO, respectivamente, de Sodalita?",
        respostas: ["Entre 5,5 e 6; Branco","Entre 6 e 7; Branco","Entre 4 e 5; Cinza","Entre 2 e 3; Cinza"],
        acerto: "resp0",
        imagem: "<img src='https://museuhe.com.br/site/wp-content/uploads/2019/01/Sodalita-9-850x568.jpg' width='55%' height='18%' alt='Sodalita'>",
    
    },
    
    {
    
        pergunta:"Qual o BRILHO e DIAFANEIDADE, respectivamente, de Sodalita?",
        respostas: ["Gorduroso e/ou Vítreo; Transparente e/ou Translúcido","Nacarado e/ou Sedoso; Transparente e/ou Translúcido","Terroso e/ou Resinoso; Opaco e/ou Translúcido","Vítreo e/ou terroso; Opaco e/ou Translúcido"],
        acerto: "resp0",
        imagem: "<img src='https://museuhe.com.br/site/wp-content/uploads/2019/01/Sodalita-12-850x568.jpg' width='55%' height='18%' alt='Sodalita'>",
    
    },
    
    {
    
        pergunta: "Qual a fórmula QUÍMICA e a CLASSE, respectivamente, de Sodalita?",
        respostas: ["Na8Al6Si6O24Cl2; Silicatos","KAl2(AlSi3O10)(OH)2; Silicatos","Cu2CO3(OH)2; Carbonatos","FeO(OH); Hidróxidos"],
        acerto: "resp0",
        imagem: "<img src='https://museuhe.com.br/site/wp-content/uploads/2019/01/Sodalita-16-850x568.jpg' width='55%' height='18%' alt='Sodalita'>",
    
    },
    
    {
    
        pergunta: "Qual o HÁBITO e CLIVAGEM, respectivamente de Sodalita?",
        respostas: ["Maciço e/ou Granular; Uma direção de Clivagem fraca","Colunar e/ou Prismático; Uma direção de Clivagem fraca","Maciço e/ou Granular; Sem Clivagem","Colunar e/ou Prismático; Sem Clivagem"],
        acerto: "resp0",
        imagem: "<img src='https://upload.wikimedia.org/wikipedia/commons/f/ff/Sodalith_-_Rohstein.jpg' width='55%' height='18%' alt='Sodalita'>",
    
    },
    
    {
    
        pergunta: "Quais os USOS e OCORRÊNCIAS, respectivamente, de Sodalita?",
        respostas: ["Não há usos bem definidos; Ocorrência mais restrita, ocorrendo em rochas subsaturadas em sílica","Usado como material de isolamento na fabricação de aparelhos elétricos; Ocorre principalmente em rochas ácidas (granitos e pegmatitos)","Minério de ferro; Formado sob condições de oxidação. Também como mantos lateríticos residuais","Fornece enxofre para a fabricação de H2SO4 e carraposas; Ocorre como segregações magmáticas, como mineral acessório em rochas ígneas"],
        acerto: "resp0",
        imagem: "<img src='https://cdn.shopify.com/s/files/1/0448/5156/0612/products/9a_ca39db41-ce59-44df-870f-241b6c474fb7_1024x1024@2x.jpg?v=1626824347' width='55%' height='18%' alt='Sodalita'>",
    
    },
    
    {
    
        pergunta: "Qual a FRATURA e TENACIDADE, respectivamente de Sodalita?",
        respostas: ["Conchoidal e/ou Irregular; Quebradiço","Fibrosa e/ou Serrilhada; Quebradiço","Conchoidal e/ou Irregular; Flexível","Fibrosa e/ou Serrilhada; Flexível"],
        acerto: "resp0",
        imagem: "<img src='http://3.bp.blogspot.com/-fQ8MbEcFBPM/T9zuWS73VGI/AAAAAAAAAx8/2NMNKTsB5Kk/s1600/sodalitee.jpg' width='55%' height='18%' alt='Sodalita'>",
    
    },
    
    /* -------------------- ** Cassiterita ** ----------------------- */
    
    {
    
        pergunta: "Qual a DUREZA e o TRAÇO, respectivamente, de Cassiterita?",
        respostas: ["Entre 6 e 7; Branco, Marrom e/ou Cinza","Entre 5 e 6; Branco, Marrom e/ou Cinza","Entre 4 e 5; Branco, Marrom e/ou Cinza","Entre 7 e 8; Branco, Marrom e/ou Cinza"],
        acerto: "resp0",
        imagem: "<img src='https://didatico.igc.usp.br/wp-content/uploads/2017/04/cassiterita.jpg' width='55%' height='18%' alt='Cassiterita'>",
    
    },
    
    {
    
        pergunta:"Qual o BRILHO e DIAFANEIDADE, respectivamente, de Cassiterita?",
        respostas: ["Metálico e/ou Adamantino; Opaco e/ou Transparente","Gorduroso e/ou Vítreo; Transparente e/ou Translúcido","Nacarado e/ou Sedoso; Transparente e/ou Translúcido","Terroso e/ou Resinoso; Opaco e/ou Translúcido"],
        acerto: "resp0",
        imagem: "<img src='https://jcbusiness.com.br/v2019/wp-content/uploads/2019/03/drusa-de-cassiterita-6-6cm-240g-e48-1.jpg' width='55%' height='18%' alt='Cassiterita'>",
    
    },
    
    {
    
        pergunta: "Qual a fórmula QUÍMICA e a CLASSE, respectivamente, de Cassiterita?",
        respostas: ["SnO2; Óxidos","Na8Al6Si6O24Cl2; Silicatos","KAl2(AlSi3O10)(OH)2; Silicatos","Cu2CO3(OH)2; Carbonatos"],
        acerto: "resp0",
        imagem: "<img src='https://museuhe.com.br/site/wp-content/uploads/2019/02/Cassiterita-2-850x567.jpg' width='55%' height='18%' alt='Cassiterita'>",
    
    },
    
    {
    
        pergunta: "Qual o HÁBITO e CLIVAGEM, respectivamente de Cassiterita?",
        respostas: ["Granular e/ou Maciço; Duas direções de clivagem, uma direção imperfeita e uma indistinta","Maciço e/ou Granular; Sem Clivagem","Colunar e/ou Prismático; Sem Clivagem","Botrioidal e/ou Acicular; Duas direções de clivagem, uma direção imperfeita e uma indistinta"],
        acerto: "resp0",
        imagem: "<img src='https://i.pinimg.com/736x/6d/3c/b9/6d3cb9b0617ed5d65a573f346929c518.jpg' width='55%' height='18%' alt='Cassiterita'>",
    
    },
    
    {
    
        pergunta: "Quais os USOS e OCORRÊNCIAS, respectivamente, de Cassiterita?",
        respostas: ["Principal minério de estanho, utilizado na fabricação de embalagens; Rochas ígneas e pegmatitos, veios hidrotermais ou próximo de rochas graníticas","Usado como material de isolamento na fabricação de aparelhos elétricos; Ocorre principalmente em rochas ácidas (granitos e pegmatitos)","Minério de ferro; Formado sob condições de oxidação. Também como mantos lateríticos residuais","Fornece enxofre para a fabricação de H2SO4 e carraposas; Ocorre como segregações magmáticas, como mineral acessório em rochas ígneas"],
        acerto: "resp0",
        imagem: "<img src='https://media.istockphoto.com/photos/ore-cassiterite-on-white-background-picture-id897447682' width='55%' height='18%' alt='Cassiterita'>",
    
    },
    
    {
    
        pergunta: "Qual a FRATURA e TENACIDADE, respectivamente de Cassiterita?",
        respostas: ["Irregular e/ou Subconchoidal; Quebradiço","Conchoidal e/ou Irregular; Quebradiço","Fibrosa e/ou Serrilhada; Quebradiço","Conchoidal e/ou Irregular; Flexível"],
        acerto: "resp0",
        imagem: "<img src='https://thumbs.dreamstime.com/b/pedra-crua-do-min%C3%A9rio-da-lata-cassiterite-no-preto-116596128.jpg' width='55%' height='18%' alt='Cassiterita'>",
    
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

        if (acertos.length <= 20) {

            $('#desempenho').html(`Tem certeza que você está estudando direito? Seu desempenho foi de ${razao*100}%`)

        } else if (acertos.length <= 40) {

            $('#desempenho').html(`Convenhamos... Poderia ser melhor, né. Seu desempenho foi de ${razao*100}%`)

        } else if (acertos.length <= 80) {

            $('#desempenho').html(`Você foi bem! Seu desempenho foi de ${razao*100}%`)

        } else if (acertos.length <= 100) {

            $('#desempenho').html(`Você foi incrível! Sê é o bixão mesmo em doido! Seu desempenho foi de ${razao*100}%`)

        } else if (acertos.length = qtdPerguntas + 1) {

            $('#desempenho').html(`Perfeito! Você acertou todas as perguntas! Seu desempenho foi de 100%`)

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