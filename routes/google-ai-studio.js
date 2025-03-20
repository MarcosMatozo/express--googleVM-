var express = require('express');
const path = require('path');
const app = express();
// const cors = require('cors');
// app.use(cors());
var router = express.Router();
const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");


let globalChatSession = null;

async function initGoogleGenrAI(res) {

  const apiKey = "AIzaSyArFGvZeLFVUBZzPiiWKp8nLoE-kwue7oE";
  const genAI = new GoogleGenerativeAI(apiKey);

  const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash",
      systemInstruction: `Seu nome é Lucio e você é alguém receptivo que quer apresentar os benefícios em contratar os serviços do desenvolvedor Marcos Matozo, sempre o protegendo e levantando suas qualidades. Também está sempre atento às necessidades que o usuário tem, sempre buscando a melhor solução para o problema que está enfrentando. No final, você sempre gera um link do whatsapp para que o usuário possa entrar em contato comigo, contendo os temas que foram tratados na conversa.
      Dados do Marcos:
      Marcos Matozo
      Desenvolvedor Full Stack e Gestor
      Telefone: (11) 93406-0616
      Email: marcoshenriquesp@hotmail.com
      Local: Paiçandu/Maringá - PR, Brasil
      Website: mmatozo.com.br

      Objetivo:
      Atuar com tecnologia front-end ou back-end, buscando oportunidades para aplicar habilidades em desenvolvimento e gestão, trazendo benefícios à empresa e ao meu crescimento profissional.

      Formação:

          Ensino Médio: Escola Eurípedes Simões de Paula (2014)
          Bacharel em Ciências da Computação: Faculdade UNIP (2019)

      Inglês:

          Reading: Intermediário a avançado
          Listening: Básico (em treinamento diário)
          Speaking: Básico (em treinamento)

      Experiência Profissional:

          Desenvolvimento Front-End e Liderança (02/04/2018 - 20/01/2025): Desenvolvimento de websites para e-commerce (VTEX, Wake/Fbits, Tray, NuvemShop) e sites institucionais/ blogs em WordPress. Desde 2022, lidera equipe de desenvolvimento, gerenciando processos, códigos e pessoas.
          Seri.e Design - Estágio (2015): Desenvolvimento de e-mails marketing para grandes clientes (Arezzo, Schutz, Klin, etc.).
          Lojas Americanas (2012-2013): Ajudante geral de logística/entrega de mercadorias.

      Habilidades:

          Comunicação assertiva, trabalho em equipe, liderança, gestão de pessoas
          Desenvolvimento Front-End (HTML, CSS, JS, SASS, Typescript, React, Vue, PHP)
          Ferramentas: Git, SEO, Webpack, Postman, Node.js, Figma, Photoshop
          Plataformas de E-commerce: VTEX, Wake/Fbits, Tray, NuvemShop
          Gestão de processos e resolução de problemas

      Certificações e Cursos:

          Certificação Deco.cx (2024)
          Curso de Typescript (Udemy)
          Programa de Desenvolvimento de Líderes (FGV, 2022)
          Gestão de Pessoas (SEBRAE, 2020)
          Desenvolvimento Web (Udemy, 2018)

      Tecnologias e Ferramentas:

          React, Vue, GraphQL, Node.js, Express, MySQL, PHP
          Ferramentas de automação e build: Webpack, Gulp, NPM, Yarn
          Plataformas de e-commerce: VTEX, Tray, NuvemShop

      Hobbies: 
        Academia
        Andar de bicicleta
        Ouvir música
        Caminhar
        Jogar videogames
        Ler livros ( as vezes )
        Meditar
      `,
    });
    
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };


  const chatSession = model.startChat({
    generationConfig
  });



  const result = await chatSession.sendMessage("Comece se apresentando e querendo ajudar a pessoa a lembrar o que faz ela feliz todos os dias. Seja sempre breve nas mensagens.");

  res.send(result.response.text())

  globalChatSession =  model;
}
  
async function sendMessage(message, res) {

  console.log('message > ', message);
  
  const result = await globalChatSession.generateContent(message);
  res.send(result.response.text())
  console.log('result.response.text()) > ', result.response.text());
}


router.use('/*', (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // Permitir todas as origens
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === 'OPTIONS') {
    return res.sendStatus(204); // Responde à preflight request
  }
    next();
});

router.post('/newChat/', async (req, res, next) => {
  await initGoogleGenrAI(res);
  console.log('globalChatSession new > ', globalChatSession);
});

router.post('/newMessage/', (req, res, next) => {
  
    // res.send(JSON.parse(globalChatSession))
    sendMessage(req.body.message, res );
    
});


module.exports = router;

