// Inclui uma biblioteca
const http = require('http');
const url = require('url');
const queryString = require('query-string');

// Definicao de endereco  / URL
const hostname = '127.0.0.1';
const port = 3000;

// Implementacao da minha regra de negocio
const server = http.createServer((req, res) => {

    // Pegar a pergunta na url
    let resposta;
    const params = queryString.parse(url.parse(req.url, true).search);
    
    // verificar a pergunta e escolher uma resposta
    if(Object.values(params)[0] == 'melhor')
        resposta = 'Nao vejo filmes';
    else 
        resposta = 'Nao entendi a pergunta';
    
    // Retornar a resposta
    res.status = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(resposta);
});

// Executa o servidor
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});