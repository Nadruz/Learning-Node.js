// Importar o express
var express = require('express');

// Criando variável para ter acesso as funcionalidades do express
var app = express();

// Criando uma rota
app.get('/', function(req, res){
    res.write('Utilizando o Express! ');
    res.end();
})

// Servidor
app.listen(8060);