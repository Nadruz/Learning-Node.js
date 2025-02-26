// Importar o módulo de http
var http = require('http');

// Criando o servidor
http.createServer(function(req, res){
    res.write('Utilizando o Nodemon');
    res.end();
}).listen(8060);



