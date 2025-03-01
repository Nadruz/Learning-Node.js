// Importar o Express
var express = require('express');

// Criando App para ter acesso as funcionalidades do Express
var app = express();

// Especificar o local do CSS e da imagem 
app.use(express.static(__dirname + '/publico'));

// Rotas
app.get('/', function(req, res){
    res.sendFile(__dirname + '/pagina.html');
});

// Servidor
app.listen(8060);
