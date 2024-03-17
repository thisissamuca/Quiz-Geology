$(document).ready(() => {

    /* -------------------- ** CRIANDO VARIÁVEIS ** ----------------------- */

    /* TODAS AS PERGUNTAS FEITAS */

    var perguntasFeitas = []

    var feitas = $('#perguntasFeitas').html(perguntasFeitas.length)

    /* CRIANDO TODAS AS PERGUNTAS DO JOGO */

    var perguntas = [

    /* ANALISE O MINERAL */

    /* -------------------- ** ORTOCLÁSIO ** ----------------------- */

    /* 1 */  

        {
    
            pergunta: "Esse mineral provavelmente é ... ?",
            categoria: "ANALISE O MINERAL",
            respostas: [
                "Ortoclásio",
                "Plagioclásio",
                "Microclínio",
                "Anortoclásio"],
            acerto: "resp0",
            imagem: "<img src='http://microckscopic.ro/wp-content/uploads/fk_1twin_1_18-1.jpg', width='45%' height='18%' alt='Ortoclásio PPL'>",
            imagem2: "<img src='http://microckscopic.ro/wp-content/uploads/fk_1twin_1_18.jpg', width='45%' height='18%' alt='Ortoclásio XPL'>",

        },

    /* 2 */

        {
    
            pergunta: "Esse mineral provavelmente é ... ?",
            categoria: "ANALISE O MINERAL",
            respostas: [
                "Ortoclásio",
                "Plagioclásio",
                "Microclínio",
                "Anortoclásio"],
            acerto: "resp0",
            imagem: "<img src='http://microckscopic.ro/wp-content/uploads/fk_1twin_09-1.jpg', width='45%' height='18%' alt='Ortoclásio PPL'>",
            imagem2: "<img src='http://microckscopic.ro/wp-content/uploads/fk_1twin_09.jpg', width='45%' height='18%' alt='Ortoclásio XPL'>",

        },

    /* 3 */

        {
    
            pergunta: "Esse mineral provavelmente é ... ?",
            categoria: "ANALISE O MINERAL",
            respostas: [
                "Ortoclásio",
                "Plagioclásio",
                "Microclínio",
                "Anortoclásio"],
            acerto: "resp0",
            imagem: "<img src='http://microckscopic.ro/wp-content/uploads/fk_perthitic_str_3_04-1.jpg', width='45%' height='18%' alt='Ortoclásio PPL'>",
            imagem2: "<img src='http://microckscopic.ro/wp-content/uploads/fk_perthitic_str_3_04.jpg', width='45%' height='18%' alt='Ortoclásio XPL'>",

        },

    /* 4 */

        {
    
            pergunta: "Esse mineral provavelmente é ... ?",
            categoria: "ANALISE O MINERAL",
            respostas: [
                "Ortoclásio",
                "Plagioclásio",
                "Microclínio",
                "Anortoclásio"],
            acerto: "resp0",
            imagem: "<img src='http://microckscopic.ro/wp-content/uploads/fk_perthitic_str_02-1.jpg', width='45%' height='18%' alt='Ortoclásio PPL'>",
            imagem2: "<img src='http://microckscopic.ro/wp-content/uploads/fk_perthitic_str_02.jpg', width='45%' height='18%' alt='Ortoclásio XPL'>",

        },

    /* 5 */

        {
    
            pergunta: "Esse mineral provavelmente é ... ?",
            categoria: "ANALISE O MINERAL",
            respostas: [
                "Ortoclásio",
                "Plagioclásio",
                "Microclínio",
                "Anortoclásio"],
            acerto: "resp0",
            imagem: "<img src='http://microckscopic.ro/wp-content/uploads/fk_1twin_2_01.jpg', width='45%' height='18%' alt='Ortoclásio PPL'>",
            imagem2: "<img src='http://microckscopic.ro/wp-content/uploads/fk_1twin_2_01-1.jpg', width='45%' height='18%' alt='Ortoclásio XPL'>",

        },

    /* 6 */

        {
    
            pergunta: "Esse mineral provavelmente é ... ?",
            categoria: "ANALISE O MINERAL",
            respostas: [
                "Ortoclásio",
                "Plagioclásio",
                "Microclínio",
                "Anortoclásio"],
            acerto: "resp0",
            imagem: "<img src='http://microckscopic.ro/wp-content/uploads/fk_graphic_str_2_01.jpg', width='45%' height='18%' alt='Ortoclásio PPL'>",
            imagem2: "<img src='http://microckscopic.ro/wp-content/uploads/fk_graphic_str_2_01-1.jpg', width='45%' height='18%' alt='Ortoclásio XPL'>",

        },

    /* -------------------- ** PLAGIOCLÁSIO ** ----------------------- */

    /* 7 */

        {
    
            pergunta: "Esse mineral provavelmente é ... ?",
            categoria: "ANALISE O MINERAL",
            respostas: [
                "Plagioclásio",
                "Ortoclásio",
                "Microclínio",
                "Anortoclásio"],
            acerto: "resp0",
            imagem: "<img src='http://microckscopic.ro/wp-content/uploads/plagioclase_2_11.jpg', width='45%' height='18%'   alt='Plagioclásio PPL'>",
            imagem2: "<img src='http://microckscopic.ro/wp-content/uploads/plagioclase_2_11-1.jpg', width='45%' height='18%'    alt='Plagioclásio XPL'>",

        },

    /* 8 */

        {

            pergunta: "Esse mineral provavelmente é ... ?",
            categoria: "ANALISE O MINERAL",
            respostas: [
                "Plagioclásio",
                "Ortoclásio",
                "Microclínio",
                "Anortoclásio"],
            acerto: "resp0",
            imagem: "<img src='http://microckscopic.ro/wp-content/uploads/plagioclase_17_poly_06.jpg', width='45%' height='18%' alt='Plagioclásio PPL'>",
            imagem2: "<img src='http://microckscopic.ro/wp-content/uploads/plagioclase_17_poly_06-1-768x512.jpg', width='45%'   height='18%' alt='Plagioclásio XPL'>",

        },

    /* 9 */

        {

            pergunta: "Esse mineral provavelmente é ... ?",
            categoria: "ANALISE O MINERAL",
            respostas: [
                "Plagioclásio",
                "Ortoclásio",
                "Microclínio",
                "Anortoclásio"],
            acerto: "resp0",
            imagem: "<img src='http://microckscopic.ro/wp-content/uploads/plagioclase_09-1.jpg', width='45%' height='18%'   alt='Plagioclásio PPL'>",
            imagem2: "<img src='http://microckscopic.ro/wp-content/uploads/plagioclase_09.jpg', width='45%' height='18%'    alt='Plagioclásio XPL'>",

        },

    /* 10 */

        {

            pergunta: "Esse mineral provavelmente é ... ?",
            categoria: "ANALISE O MINERAL",
            respostas: [
                "Plagioclásio",
                "Ortoclásio",
                "Microclínio",
                "Anortoclásio"],
            acerto: "resp0",
            imagem: "<img src='http://microckscopic.ro/wp-content/uploads/plagioclase_3_zonar_01.jpg', width='45%' height='18%'  alt='Plagioclásio PPL'>",
            imagem2: "<img src='http://microckscopic.ro/wp-content/uploads/plagioclase_3_zonar_01-1.jpg', width='45%' height='18%' alt='Plagioclásio XPL'>",
            
        },

    /* 11 */

        {

            pergunta: "Esse mineral provavelmente é ... ?",
            categoria: "ANALISE O MINERAL",
            respostas: [
                "Plagioclásio",
                "Ortoclásio",
                "Microclínio",
                "Anortoclásio"],
            acerto: "resp0",
            imagem: "<img src='http://microckscopic.ro/wp-content/uploads/plagioclase_3_zonar_10-1.jpg', width='45%' height='18%' alt='Plagioclásio PPL'>",
            imagem2: "<img src='http://microckscopic.ro/wp-content/uploads/plagioclase_3_zonar_10.jpg', width='45%' height='18%' alt='Plagioclásio XPL'>",
            
        },

    /* 12 */

        {

            pergunta: "Esse mineral provavelmente é ... ?",
            categoria: "ANALISE O MINERAL",
            respostas: [
                "Plagioclásio",
                "Ortoclásio",
                "Microclínio",
                "Anortoclásio"],
            acerto: "resp0",
            imagem: "<img src='http://microckscopic.ro/wp-content/uploads/plagioclase_5_zonar_01.jpg', width='45%' height='18%'  alt='Plagioclásio PPL'>",
            imagem2: "<img src='http://microckscopic.ro/wp-content/uploads/plagioclase_5_zonar_01-1.jpg', width='45%' height='18%' alt='Plagioclásio XPL'>",

        },

    /* 13 */

        {

            pergunta: "Esse mineral provavelmente é ... ?",
            categoria: "ANALISE O MINERAL",
            respostas: [
                "Plagioclásio",
                "Ortoclásio",
                "Microclínio",
                "Anortoclásio"],
            acerto: "resp0",
            imagem: "<img src='http://microckscopic.ro/wp-content/uploads/plagioclase_5_zonar_12.jpg', width='45%' height='18%' alt='Plagioclásio PPL'>",
            imagem2: "<img src='http://microckscopic.ro/wp-content/uploads/plagioclase_5_zonar_12-1.jpg', width='45%' height='18%' alt='Plagioclásio XPL'>",
            
        },

    /* 14 */

        {

            pergunta: "Esse mineral provavelmente é ... ?",
            categoria: "ANALISE O MINERAL",
            respostas: [
                "Plagioclásio",
                "Ortoclásio",
                "Microclínio",
                "Anortoclásio"],
            acerto: "resp0",
            imagem: "<img src='http://microckscopic.ro/wp-content/uploads/plagioclase_6_poly_01.jpg', width='45%' height='18%'  alt='Plagioclásio PPL'>",
            imagem2: "<img src='http://microckscopic.ro/wp-content/uploads/plagioclase_6_poly_01-2.jpg', width='45%' height='18%' alt='Plagioclásio XPL'>",

        },

    /* 15 */

        {

            pergunta: "Esse mineral provavelmente é ... ?",
            categoria: "ANALISE O MINERAL",
            respostas: [
                "Plagioclásio",
                "Ortoclásio",
                "Microclínio",
                "Anortoclásio"],
            acerto: "resp0",
            imagem: "<img src='http://microckscopic.ro/wp-content/uploads/plagioclase_6_poly_06.jpg', width='45%' height='18%'  alt='Plagioclásio PPL'>",
            imagem2: "<img src='http://microckscopic.ro/wp-content/uploads/plagioclase_6_poly_06-1.jpg', width='45%' height='18%' alt='Plagioclásio XPL'>",

        },

    /* 16 */

        {

            pergunta: "Esse mineral provavelmente é ... ?",
            categoria: "ANALISE O MINERAL",
            respostas: [
                "Plagioclásio",
                "Ortoclásio",
                "Microclínio",
                "Anortoclásio"],
            acerto: "resp0",
            imagem: "<img src='http://microckscopic.ro/wp-content/uploads/plagioclase_13_poly_12-1.jpg', width='45%' height='18%' alt='Plagioclásio PPL'>",
            imagem2: "<img src='http://microckscopic.ro/wp-content/uploads/plagioclase_13_poly_12.jpg', width='45%' height='18%' alt='Plagioclásio XPL'>",

        },

    /* 17 */

        {

            pergunta: "Esse mineral provavelmente é ... ?",
            categoria: "ANALISE O MINERAL",
            respostas: [
                "Plagioclásio",
                "Ortoclásio",
                "Microclínio",
                "Anortoclásio"],
            acerto: "resp0",
            imagem: "<img src='http://microckscopic.ro/wp-content/uploads/plagioclase_14_poly_06.jpg', width='45%' height='18%' alt='Plagioclásio PPL'>",
            imagem2: "<img src='http://microckscopic.ro/wp-content/uploads/plagioclase_14_poly_06-1.jpg', width='45%' height='18%' alt='Plagioclásio XPL'>",

        },

    /* 18 */

        {

            pergunta: "Esse mineral provavelmente é ... ?",
            categoria: "ANALISE O MINERAL",
            respostas: [
                "Plagioclásio",
                "Ortoclásio",
                "Microclínio",
                "Anortoclásio"],
            acerto: "resp0",
            imagem: "<img src='http://microckscopic.ro/wp-content/uploads/plagioclase_14_poly_09.jpg', width='45%' height='18%'  alt='Plagioclásio PPL'>",
            imagem2: "<img src='http://microckscopic.ro/wp-content/uploads/plagioclase_14_poly_09-1.jpg', width='45%' height='18%' alt='Plagioclásio XPL'>",

        },

    /* 19 */

        {

            pergunta: "Esse mineral provavelmente é ... ?",
            categoria: "ANALISE O MINERAL",
            respostas: [
                "Plagioclásio",
                "Ortoclásio",
                "Microclínio",
                "Anortoclásio"],
            acerto: "resp0",
            imagem: "<img src='http://microckscopic.ro/wp-content/uploads/plagioclase_18_poly_07-1.jpg', width='45%' height='18%' alt='Plagioclásio PPL'>",
            imagem2: "<img src='http://microckscopic.ro/wp-content/uploads/plagioclase_18_poly_07.jpg', width='45%' height='18%' alt='Plagioclásio XPL'>",

        },

    /* 20 */

        {

            pergunta: "Esse mineral provavelmente é ... ?",
            categoria: "ANALISE O MINERAL",
            respostas: [
                "Plagioclásio",
                "Ortoclásio",
                "Microclínio",
                "Anortoclásio"],
            acerto: "resp0",
            imagem: "<img src='http://microckscopic.ro/wp-content/uploads/plagioclase_20_zonar_09-1.jpg', width='45%' height='18%' alt='Plagioclásio PPL'>",
            imagem2: "<img src='http://microckscopic.ro/wp-content/uploads/plagioclase_20_zonar_09.jpg', width='45%' height='18%' alt='Plagioclásio XPL'>",

        },

    /* -------------------- ** QUARTZO ** ----------------------- */

    /* 21 */

        {
        
            pergunta: "Esse mineral provavelmente é ... ?",
            categoria: "ANALISE O MINERAL",
            respostas: [
                "Quartzo",
                "Ortoclásio",
                "Nefelina",
                "Apatita"],
            acerto: "resp0",
            imagem: "<img src='http://microckscopic.ro/wp-content/uploads/quartz_10_03-1.jpg', width='45%' height='18%' alt='Quartzo PPL'>",
            imagem2: "<img src='http://microckscopic.ro/wp-content/uploads/quartz_10_03.jpg', width='45%' height='18%' alt='Quartzo XPL'>",

        },

    /* 22 */

        {
        
            pergunta: "Esse mineral provavelmente é ... ?",
            categoria: "ANALISE O MINERAL",
            respostas: [
                "Quartzo",
                "Ortoclásio",
                "Nefelina",
                "Apatita"],
            acerto: "resp0",
            imagem: "<img src='http://microckscopic.ro/wp-content/uploads/quartz_01.jpg', width='45%' height='18%' alt='Quartzo PPL'>",
            imagem2: "<img src='http://microckscopic.ro/wp-content/uploads/quartz_01-1.jpg', width='45%' height='18%' alt='Quartzo XPL'>",

        },

    /* 23 */

        {
        
            pergunta: "Esse mineral provavelmente é ... ?",
            categoria: "ANALISE O MINERAL",
            respostas: [
                "Quartzo",
                "Ortoclásio",
                "Nefelina",
                "Apatita"],
            acerto: "resp0",
            imagem: "<img src='http://microckscopic.ro/wp-content/uploads/quartz_8_01.jpg', width='45%' height='18%' alt='Quartzo PPL'>",
            imagem2: "<img src='http://microckscopic.ro/wp-content/uploads/quartz_8_01-1.jpg', width='45%' height='18%' alt='Quartzo XPL'>",

        },

    /* 24 */

        {
        
            pergunta: "Esse mineral provavelmente é ... ?",
            categoria: "ANALISE O MINERAL",
            respostas: [
                "Quartzo",
                "Ortoclásio",
                "Nefelina",
                "Apatita"],
            acerto: "resp0",
            imagem: "<img src='http://microckscopic.ro/wp-content/uploads/quartz_8_05.jpg', width='45%' height='18%' alt='Quartzo PPL'>",
            imagem2: "<img src='http://microckscopic.ro/wp-content/uploads/quartz_8_05-1.jpg', width='45%' height='18%' alt='Quartzo XPL'>",

        },

    /* 25 */

        {
        
            pergunta: "Esse mineral provavelmente é ... ?",
            categoria: "ANALISE O MINERAL",
            respostas: [
                "Quartzo",
                "Ortoclásio",
                "Nefelina",
                "Apatita"],
            acerto: "resp0",
            imagem: "<img src='http://microckscopic.ro/wp-content/uploads/quartz_1_06.jpg', width='45%' height='18%' alt='Quartzo PPL'>",
            imagem2: "<img src='http://microckscopic.ro/wp-content/uploads/quartz_1_06-1.jpg', width='45%' height='18%' alt='Quartzo XPL'>",

        },

    /* 26 */

        {
        
            pergunta: "Esse mineral provavelmente é ... ?",
            categoria: "ANALISE O MINERAL",
            respostas: [
                "Quartzo",
                "Ortoclásio",
                "Nefelina",
                "Apatita"],
            acerto: "resp0",
            imagem: "<img src='http://microckscopic.ro/wp-content/uploads/quartz_1_01-1.jpg', width='45%' height='18%' alt='Quartzo PPL'>",
            imagem2: "<img src='http://microckscopic.ro/wp-content/uploads/quartz_1_01.jpg', width='45%' height='18%' alt='Quartzo XPL'>",

        },

    /* -------------------- ** MICROCLINO ** ----------------------- */

    /* 27 */

        {
        
            pergunta: "Esse mineral provavelmente é ... ?",
            categoria: "ANALISE O MINERAL",
            respostas: [
                "Microclínio",
                "Ortoclásio",
                "Nefelina",
                "Plagioclásio"],
            acerto: "resp0",
            imagem: "<img src='http://microckscopic.ro/wp-content/uploads/fk_microcline_8_01.jpg', width='45%' height='18%' alt='Microclino PPL'>",
            imagem2: "<img src='http://microckscopic.ro/wp-content/uploads/fk_microcline_8_01-1.jpg', width='45%' height='18%' alt='Microclino XPL'>",

        },

    /* 28 */

        {
        
            pergunta: "Esse mineral provavelmente é ... ?",
            categoria: "ANALISE O MINERAL",
            respostas: [
                "Microclínio",
                "Ortoclásio",
                "Nefelina",
                "Plagioclásio"],
            acerto: "resp0",
            imagem: "<img src='http://microckscopic.ro/wp-content/uploads/fk_microcline_6_32.jpg', width='45%' height='18%' alt='Microclino PPL'>",
            imagem2: "<img src='http://microckscopic.ro/wp-content/uploads/fk_microcline_6_32-1.jpg', width='45%' height='18%' alt='Microclino XPL'>",

        },

    /* 29 */

        {
        
            pergunta: "Esse mineral provavelmente é ... ?",
            categoria: "ANALISE O MINERAL",
            respostas: [
                "Microclínio",
                "Ortoclásio",
                "Nefelina",
                "Plagioclásio"],
            acerto: "resp0",
            imagem: "<img src='http://microckscopic.ro/wp-content/uploads/microcline_2_02.jpg', width='45%' height='18%' alt='Microclino PPL'>",
            imagem2: "<img src='http://microckscopic.ro/wp-content/uploads/microcline_2_02-1.jpg', width='45%' height='18%' alt='Microclino XPL'>",

        },

    /* 30 */

        {
        
            pergunta: "Esse mineral provavelmente é ... ?",
            categoria: "ANALISE O MINERAL",
            respostas: [
                "Microclínio",
                "Ortoclásio",
                "Nefelina",
                "Plagioclásio"],
            acerto: "resp0",
            imagem: "<img src='http://microckscopic.ro/wp-content/uploads/fk_microcline_10_08-1.jpg', width='45%' height='18%' alt='Microclino PPL'>",
            imagem2: "<img src='http://microckscopic.ro/wp-content/uploads/fk_microcline_10_08.jpg', width='45%' height='18%' alt='Microclino XPL'>",

        },

    /* -------------------- ** NEFELINA ** ----------------------- */

    /* 31 */

        {
        
            pergunta: "Esse mineral provavelmente é ... ?",
            categoria: "ANALISE O MINERAL",
            respostas: [
                "Nefelina",
                "Ortoclásio",
                "Microclino",
                "Quartzo"],
            acerto: "resp0",
            imagem: "<img src='http://microckscopic.ro/wp-content/uploads/nepheline_3_05-1.jpg', width='45%' height='18%' alt='Nefelina PPL'>",
            imagem2: "<img src='http://microckscopic.ro/wp-content/uploads/nepheline_3_05.jpg', width='45%' height='18%' alt='Nefelina XPL'>",

        },

    /* 32 */

        {
        
            pergunta: "Esse mineral provavelmente é ... ?",
            categoria: "ANALISE O MINERAL",
            respostas: [
                "Nefelina",
                "Ortoclásio",
                "Microclino",
                "Quartzo"],
            acerto: "resp0",
            imagem: "<img src='http://microckscopic.ro/wp-content/uploads/nepheline_4_04.jpg', width='45%' height='18%' alt='Nefelina PPL'>",
            imagem2: "<img src='http://microckscopic.ro/wp-content/uploads/nepheline_4_04-1.jpg', width='45%' height='18%' alt='Nefelina XPL'>",

        },

    /* 33 */

        {
        
            pergunta: "Esse mineral provavelmente é ... ?",
            categoria: "ANALISE O MINERAL",
            respostas: [
                "Nefelina",
                "Ortoclásio",
                "Microclino",
                "Quartzo"],
            acerto: "resp0",
            imagem: "<img src='http://microckscopic.ro/wp-content/uploads/nepheline_2_05.jpg', width='45%' height='18%' alt='Nefelina PPL'>",
            imagem2: "<img src='http://microckscopic.ro/wp-content/uploads/nepheline_2_05-1.jpg', width='45%' height='18%' alt='Nefelina XPL'>",

        },

    /* 34 */

        {
        
            pergunta: "Esse mineral provavelmente é ... ?",
            categoria: "ANALISE O MINERAL",
            respostas: [
                "Nefelina",
                "Ortoclásio",
                "Microclino",
                "Quartzo"],
            acerto: "resp0",
            imagem: "<img src='http://microckscopic.ro/wp-content/uploads/nepheline_6_05.jpg', width='45%' height='18%' alt='Nefelina PPL'>",
            imagem2: "<img src='http://microckscopic.ro/wp-content/uploads/nepheline_6_05-1.jpg', width='45%' height='18%' alt='Nefelina XPL'>",

        },

    /* MINERALOGIA */

    /* -------------------- ** ORTOCLÁSIO ** ----------------------- */

    /* 35 */ 

        {
    
            pergunta: "Sobre características do mineral: o ORTOCLÁSIO pode apresentar quais CORES macroscopicamente?",
            categoria: "MINERALOGIA",
            respostas: [
                "Incolor a branco, pode apresentar tons de verde, cinza, amarelo e rosa",
                "Preta, preta-verde, marrom, marrom-verde, marrom violeta",
                "Branco, verde amarelado, marrom, branco esverdeado ou cinza, verde-oliva",
                "Verde, amarelo pálido, marrom ou branco"],
            acerto: "resp0",
            imagem: "<img src='' alt=''>",
            imagem2: "<img src='' alt=''>",
        
        },

    /* 36 */ 

        {
    
            pergunta: "Sobre características do mineral: o ORTOCLÁSIO pode apresentar quais HÁBITOS macroscopicamente?",
            categoria: "MINERALOGIA",
            respostas: [
                "Cristais prismáticos curtos, tabulares. Granular, maciço, massas cliváveis",
                "Prismático curto com seções basais quadradas ou com 8 lados. Acicular, esqueletal, tabular, dendrítica",
                "Cristais arredondados, pode ser prismático biterminado. Maciço, granular",
                "Prismático, lamelar, pode ser fibroso ou maciço."],
            acerto: "resp0",
            imagem: "<img src='' alt=''>",
            imagem2: "<img src='' alt=''>",
        
        },
    
    /* 37 */ 
    
        {
        
            pergunta: "Sobre características do mineral: o ORTOCLÁSIO pode apresentar quais MACLAS?",
            categoria: "MINERALOGIA",
            respostas: [
                "Comuns, Carlsbad, Baveno e Manebach",
                "Comuns, Polissintética e Carlsbad",
                "Não possui maclas",
                "Maclas múltiplas"],
            acerto: "resp0",
            imagem: "<img src='' alt=''>",
            imagem2: "<img src='' alt=''>",
        
        },
    
    /* 38 */ 

        {
        
            pergunta: "NICÓIS CRUZADOS: como se apresenta a extinção do ORTOCLÁSIO?",
            categoria: "MINERALOGIA",
            respostas: [
                "Paralela a oblícua (5º a 19º)",
                "Oblícua (3º a 39º)",
                "Oblícua (35º a 48º)",
                "Extinção permanente"],
            acerto: "resp0",
            imagem: "<img src='' alt=''>",
            imagem2: "<img src='' alt=''>",
        
        },

    /* 39 */ 

        {
        
            pergunta: "NICÓIS CRUZADOS: como se apresenta a birrefringência e cores de interferência do ORTOCLÁSIO?",
            categoria: "MINERALOGIA",
            respostas: [
                "0.005 a 0.007; cores de 1º ordem: cinza em vários tons a branco",
                "0.003 a 0.013; cores de 1º ordem: cinza escuro a cinza claro, branco",
                "0.008 a 0.015; cores de 1º ordem: cinza a amarelo e laranja (35º a 48º)",
                "Máxima de 0.035; cores intensas de 3º ordem"],
            acerto: "resp0",
            imagem: "<img src='' alt=''>",
            imagem2: "<img src='' alt=''>",
        
        },

    /* 40 */ 
    
        {
        
            pergunta: "LENTE COVALENTE: como se apresenta o caráter ótico do ORTOCLÁSIO?",
            categoria: "MINERALOGIA",
            respostas: [
                "B(-)",
                "B(+)",
                "U (-)",
                "U (+)"],
            acerto: "resp0",
            imagem: "<img src='' alt=''>",
            imagem2: "<img src='' alt=''>",
        
        },

    /* 41 */ 
    
        {
        
            pergunta: "NICÓIS DESCRUZADOS: como se apresenta o HÁBITO MICROSCÓPICO do ORTOCLÁSIO?",
            categoria: "MINERALOGIA",
            respostas: [
                "Grãos xenomórficos (anédricos) ou, menos frequentes, idiomórficos (euédricos) tabulares (retangulares)",
                "Tipicamente cristais tabulares longos (lamelares), às vezes muito finos, podem ser esqueletais",
                "Formas prismáticas, equidimensionais, colunares. Cristais anédricos e massas são comuns. Seções basais perfeitas possuem 4 ou 8 lados",
                "Cristais anédricos, mais raramente subédricos, sempre tendendo a arredondados."],
            acerto: "resp0",
            imagem: "<img src='' alt=''>",
            imagem2: "<img src='' alt=''>",
        
        },

    /* 42 */ 
    
        {
        
            pergunta: "NICÓIS DESCRUZADOS: como se apresenta a CLIVAGEM do ORTOCLÁSIO?",
            categoria: "MINERALOGIA",
            respostas: [
                "{001} perfeita e {010} boa que se cruzam a 90º, geralmente não são visíveis em lâmina delgada devido ao relevo muito baixo. Na porção mais central do grão a clivagem pode ser algo mais visível",
                "{001} perfeita, {010} boa, {110} má, {1-10} má. As duas clivagens principais intersectam em ângulos de 86º, mas geralmente não são visíveis em lâmina delgada",
                "{110} boa a distinta. Nas seções basais há duas clivagens que formam ângulos de 87º e 93º entre si. Nas seções prismáticas há apenas uma clivagem",
                "{210} excelente. Nas seções prismáticas há apenas uma clivagem. Nas seções basais há duas clivagens interceptando-se em ângulos de 87º e 93º"],
            acerto: "resp0",
            imagem: "<img src='' alt=''>",
            imagem2: "<img src='' alt=''>",
        
        },

    /* 43 */ 
    
        {
        
            pergunta: "NICÓIS DESCRUZADOS: como se apresenta o RELEVO do ORTOCLÁSIO?",
            categoria: "MINERALOGIA",
            respostas: [
                "Baixo",
                "Alto",
                "Médio",
                "Extremamente alto"],
            acerto: "resp0",
            imagem: "<img src='' alt=''>",
            imagem2: "<img src='' alt=''>",
        
        },

    /* 44 */ 
    
        {
        
            pergunta: "NICÓIS CRUZADOS: como se apresenta o SINAL DE ELONGAÇÃO do ORTOCLÁSIO?",
            categoria: "MINERALOGIA",
            respostas: [
                "Não se aplica",
                "SE (-)",
                "SE (+)",
                "SE(+) em relação ao alongamento, raramente observável porque os grãos quase sempre são anédricos"],
            acerto: "resp0",
            imagem: "<img src='' alt=''>",
            imagem2: "<img src='' alt=''>",
        
        },

    /* 45 */ 

        {
    
            pergunta: "Qual a cristalografia do ORTOCLÁSIO?",
            categoria: "MINERALOGIA",
            respostas: [
                "Monoclínico prismático",
                "Triclínico pinacoidal",
                "Ortorrômbico e/ou bipiramidal",
                "Trigonal trapezoédricota"],
            acerto: "resp0",
            imagem: "<img src='' alt=''>",
            imagem2: "<img src='' alt=''>",
    
        },

    /* 46 */ 

        {
    
            pergunta: "Qual a dureza em mohs do ORTOCLÁSIO?",
            categoria: "MINERALOGIA",
            respostas: [
                "6 - 6.5",
                "5.5 - 6",
                "5 - 5.5",
                "6.5 - 7"],
            acerto: "resp0",
            imagem: "<img src='' alt=''>",
            imagem2: "<img src='' alt=''>",

        },

    /* PETROLOGIA ÍGNEA */

    /* -------------------- ** ORTOCLÁSIO ** ----------------------- */

    /* 47 */ 

        {
    
            pergunta: "Quais associações minerais em rochas e minerais acessórios o ORTOCLÁSIO constitui, respectivamente?",
            categoria: "PETROGRAFIA E PETROLOGIA ÍGNEA",
            respostas: [
                "Comumente em rochas granitóides; Epidoto, Zircão, Apatita e Titanita",
                "Comumente em rochas granitóides; Granada, Turmalina, Zircão e Rutilo",
                "Comumente em gabros; Cromita, Ortopiroxênios, Clinopiroxênios e Anfibólios",
                "Comumente em rochas máficas; Magnetita, Hematita e Ilmenita"],
            acerto: "resp0",
            imagem: "<img src='' alt=''>",
            imagem2: "<img src='' alt=''>",
    
        },

    /* 48 */

        {
        
            pergunta: "Sobre a gênese do mineral, o Ortoclásio?",
            categoria: "PETROLOGIA ÍGNEA",
            respostas: [
                "No geral, é frequente em rochas ígneas silícicas como granitos em geral, granodioritos, dioritos e sienitos, particularmente de intrusões rasas e se associa aos minerais que constituem rochas granitoides. Com estabilidade em temperaturas acima de 670 ºC",
                "É produto de cristalização magmática, em que é um dos primeiros minerais a se cristalizar em rochas básicas insaturadas em sílica. As variedades ferríferas podem ocorrer em rochas magmáticas ácidas",
                "Ocorre em alguns granitos intrusivos em baixas profundidades e sienitos. Também em lamproitos e naturalmente em sanidinitos. Também ocorre em rochas de metamorfismo de contato de alta temperatura",
                "Está presente, ocasionalmente, em rochas básicas. É um mineral comum em veios hidrotermais de qualquer temperatura (epitermais a alpinos), característico de granitos e pegmatitos graníticos"],
            acerto: "resp0",
            imagem: "<img src='' alt=''>",
            imagem2: "<img src='' alt=''>",

        },

    /* PETROGRAFIA ÍGNEA */

    /* -------------------- ** ORTOCLÁSIO ** ----------------------- */

    /* 49 */ 

        {
    
            pergunta: "Quais as características diagnósticas do Ortoclásio?",
            categoria: "PETROGRAFIA ÍGNEA",
            respostas: [
                "Está quase sempre alterado por sericitização ou argilização. Ausência de estrias na superfície de melhor clivagem. Ausência    de geminação múltipla. Caráter B(-). Ângulo de 90º entre clivagens. Ângulo 2V > 60º. Frequentemente pertitas e maclas Carlsbad     ",
                "",
                "",
                ""],
            acerto: "resp0",
            imagem: "<img src='' alt=''>",
            imagem2: "<img src='' alt=''>",
    
        },

    /* QUEM EU SOU */

    /* -------------------- ** ORTOCLÁSIO ** ----------------------- */

    /* 50 */ 

        {
    
            pergunta: "Birrefringência: 0.005 a 0.007, cores de 1 º ordem (cinza a branco). Extinção: paralela a oblíqua (5 - 19º). Não me aplica sinal de elongação. Posso ter maclas Carlsbad. Geralmente estou alterado por sericitização ou argilização. Se inalterado sou incolor. Muito frequentemente apresento pertitas. Inclusões são comuns. B (-). 2V > 60º. Relevo baixo. Comumente acizentado em lâmina delgada. Clivagem {001} perfeita e {010} boa que se cruzam a 90º, geralmente não vísiveis. Grãos xenomórficos (anédricos) ou, menos frequentes, idiomórficos (euédricos) tabulares (retangulares)",
            categoria: "QUEM EU SOU?",
            respostas: [
                "Ortoclásio",
                "Nefelina",
                "Sanidina",
                "Quartzo"],
            acerto: "resp0",
            imagem: "<img src='' alt=''>",
            imagem2: "<img src='' alt=''>",
        
        },

    /* 51 */ 

        {
        
            pergunta: "Mineral tectossilicato, grupo dos feldspatos. Possuo ou sou um mineral polimorfo. Cristalizo por meio de processos magmáticos e metamórficos de alta temperatura, sendo estável apenas acima de 670 ºC, aparecendo em sienitos hipoabissais e plutônicos e granitos de alta temperatura especialmente os subvulcânicos. Também posso ocorrer em cavidades de basaltos, em rochas metamórficas de alta temperatura e como resultado de alteração hidrotermal potássica.  No geral, sou frequente em rochas ígneas silícicas como granitos em geral, granodioritos, dioritos e sienitos, particularmente de intrusões rasas. Me associo aos Quartzos, Micas, Plagioclásios, Anfibólios e piroxênios, bem como minerais acessórios como Epidoto, Zircão, Apatita e Titanita.",
            categoria: "QUEM EU SOU?",
            respostas: [
                "Ortoclásio",
                "Granada",
                "Olivina",
                "Quartzo"],
            acerto: "resp0",
            imagem: "<img src='' alt=''>",
            imagem2: "<img src='' alt=''>",
        
        },

    /* 52 */ 

        {
        
            pergunta: "KAlSi3O",
            categoria: "QUEM EU SOU?",
            respostas: [
                "Feldspato alcalino",
                "Feldspato potássico",
                "Anfibólio",
                "Piroxênio"],
            acerto: "resp0",
            imagem: "<img src='' alt=''>",
            imagem2: "<img src='' alt=''>",
        
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
        var perguntaCategoria = perguntas[aleatorio].categoria
        var perguntaImagem = perguntas[aleatorio].imagem
        var perguntaImagem2 = perguntas[aleatorio].imagem2

        console.log(`A pergunta selecionada é ......... ${perguntaSelecionada}`)
        
        console.log('-----------------------')

        // Verificar se a pergunta já foi feita

        if (!perguntasFeitas.includes(aleatorio)) { // Caso a pergunta ainda não foi feita

            // Incluir indice da pergunta dentro do array perguntasFeitas

            perguntasFeitas.push(aleatorio)

            // Escrever no HTML

            $('#textQuiz').html(perguntaSelecionada)
            $('#textCategoria').html(perguntaCategoria)
            $('#figure').html(perguntaImagem)
            $('#figure2').html(perguntaImagem2)
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

                        // Adicionando a classe 'oculto' do botão #end

                        $('#end').addClass('oculto')

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
            
                            }, 2400);
    
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

        var errosConv = Number.parseInt(erros.length)

        var razao = acertosConv / (errosConv + acertosConv)

        // Aparecendo o desempenho no final do jogo

        $('#desempenho').html(`Seu desempenho foi de ${Math.round(razao*100)}%`)

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

        // Removendo a classe 'oculto' do botão #end

        $('#end').removeClass('oculto')

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

        // Aparecendo com o botão TERMINAR JOGO no novo jogo 

        $('#end').removeClass('oculto')

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

    // Ativando a função para terminar o jogo

    $('#end').click(function() {

        fimJogo();

    });
            
})