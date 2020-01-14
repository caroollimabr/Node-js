const express = require('express'); //requerer o pacote do node (express) que precisa instalar. Vc instala através do prompt de comando


const app = express(); //variável criada para dar o conteúdo do express (pacote ou biblioteca de conteúdo do node)

//quando colocar no endereço '/', vai entrar dentro da função
//req é request e res é response

app.get('/', function(req,res){ //abre e me mostra o que eu posso fazer com ele
   res.end('Hello, World!');

});

app.delete('/', function(req, res){ //deleta o solicitado anteriormente
   res.end('Hello, World!');
});

    if (element.id == req.params.id) { //element.id acessa as propriedades do obj Json. req.params.id - 
//req.params.nome - se eu colocar 'Carol', vai aparecer 'Carol
app.get('/:nome', function(req,res){
   res.end('Hello, '+ req.params.nome);
});

//3000 - port , '127.0.0.1' - hostname ou local host
app.listen(3000, '127.0.0.1', function(){ //acesse essa porta e esse local host e escute o que ele tem a dizer
   console.log(`Servidor rodando em http://${'127.0.0.1'}:${3000}/`);
});
