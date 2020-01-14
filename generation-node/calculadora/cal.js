var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Minha calculadora');
});
//Number: converte a string req.params.palavras1 para NÚMERO
//res.end: resposta final
  app.get('/soma/:palavras1/:palavras2', function (req, res) {
    var oper = Number(req.params.palavras1)
    var oper2 = Number(req.params.palavras2)
    var soma = oper+oper2
    res.end('Soma de: '+ oper + "+" + oper2 + " resultado: " + soma);
  });

  app.get('/subtracao/:palavras1/:palavras2', function (req, res) {
    var oper = Number(req.params.palavras1)
    var oper2 = Number(req.params.palavras2)
    var sub = oper-oper2
    res.end('Subtracao de: '+ oper + "-" + oper2 + " resultado: " + sub);
  });

  app.get('/divisao/:palavras1/:palavras2', function (req, res) {
    var oper = Number(req.params.palavras1)
    var oper2 = Number(req.params.palavras2)
    var div = oper/oper2
    res.end('Divisao de: '+ oper + "/" + oper2 + " resultado: " + div);
  });

  app.get('/multiplicacao/:palavras1/:palavras2', function (req, res) {
    var oper = Number(req.params.palavras1)
    var oper2 = Number(req.params.palavras2)
    var mult = oper*oper2
    res.end('Multiplicacao de: '+ oper + "x" + oper2 + " resultado: " + mult);
  });

app.listen(3000, function () {
  console.log('Aplicacao ouvindo a porta 3000');
});