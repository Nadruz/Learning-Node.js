// Importando o Express e o Express-handlebars
var express = require('express');
var {engine} = require('express-handlebars');

// App
var app = express();

// Template
app.engine ('handlebars', engine({defaultLayout : 'principal'}));
app.set('view engine', 'handlebars');

// Rotas
app.get ('/', function(req, res){

    let pessoas = [
        {"nome":"Juliana", "idade":20},
        {"nome":"Julia", "idade":23},
        {"nome":"Julianne", "idade":40}
    ]

    res.render('inicio', {gostandoDeNode:true, dados:pessoas});
});

app.get ('/sobre', function(req, res){
    res.render('sobre');
});

// Servidor
app.listen(8060);
