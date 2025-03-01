// Importando o Express
var express = require ('express');

//Importando o BodyParser
var bodyParser = require ('body-parser');

// Configurando o APP
var app = express();

// Configurando o BodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// Criando rotas
app.get('/', function(req, res){
    res.sendFile(__dirname + '/formulario.html');
});

app.post('/receber', function(req, res){
    res.write(req.body.nome);
    res.end();
});

// Configurando o servidor
app.listen(8060);