// Inclui uma biblioteca
const http = require('http');
const url = require('url');
const queryString = require('query-string');
const fs = require('fs');

// Definicao de endereco  / URL
const hostname = '127.0.0.1';
const port = 3000;

// Implementacao da minha regra de negocio

const server = http.createServer((req, res) => {
    
    let resultado = 'Hello World';

    // Receber informacoes
    let uItem = url.parse(req.url);
    let uSearch = uItem.search;
    
    // Receber parametros
    let urlItems = queryString.parse(uSearch);
    // Receber pathName
    let pathName = uItem.pathname;
    // Criar um usuario / Atualizar um usuario

    // Salvar informacoes
    if (pathName == '/criar' || pathName == '/atualizar') {
        let filePath = 'users/' + urlItems.id + '.txt' ;
        fs.writeFile(filePath, JSON.stringify(urlItems), (err) => {
            if (err) throw err;
            console.log('Saved');
            retornar();
        });
    }
    
    // Selecionar um usuario
    if (pathName == '/read') {
        let filePath = 'users/' + urlItems.id + '.txt' ;
        fs.readFile(filePath, (err, data) => {
            if (err) throw err;
            console.log('openned');
            resultado = data;
            retornar();
        });
    }

    
    // Remover usuario
    if (pathName == '/delete') {
        let filePath = 'users/' + urlItems.id + '.txt' ;
        fs.unlink(filePath, (err) => {
            if (err) throw err;
            console.log('Deleted');
            retornar();
        });
    }

    // Retornar a resposta
    function retornar() {
        res.status = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end(resultado);
    }
});

// Executa o servidor
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});