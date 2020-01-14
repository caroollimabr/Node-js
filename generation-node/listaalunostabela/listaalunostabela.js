var ler = document.getElementById("nome");

function enviar(){
   fetch(`http://127.0.0.1:3000/alunos/notas/matematica/id/${id.value}`, {method: 'GET'})
   .then (response => response.json())
   .then (json => passJson(json));
}

function passJson(json){
   ler.innerHTML = json.Nome;
}


/*VAI NO SERVIDOR.JS

var express = require('express')
var cors = require('cors')
var app = express()


app.use(cors())

var dataJson = [{
  "id": 1,
  "Nome": "Lucas",
  "Sobrenome": "Capelotto",
  "Idade": 26,
  "Nota": 5,
  "Situacao": "Aprovado"
},
{
  "id": 2,
  "Nome": "Carol",
  "Sobrenome": "Lima",
  "Idade": 29,
  "Nota": 9,
  "Situacao": "Aprovado"
},
{
  "id": 3,
  "Nome": "Leticia",
  "Sobrenome": "Assis",
  "Idade": 27,
  "Nota": 10,
  "Situacao": "Aprovado"
},
{
  "id": 4,
  "Nome": "Aline",
  "Sobrenome": "Ximenes",
  "Idade": 29,
  "Nota": 10,
  "Situacao": "Aprovado"
},
{
  "id": 5,
  "Nome": "Gabi",
  "Sobrenome": "Ribeiro",
  "Idade": 24,
  "Nota": 9,
  "Situacao": "Aprovado"
},
{
  "id": 6,
  "Nome": "Fulano",
  "Sobrenome": "de Tal",
  "Idade": 99,
  "Nota": 3,
  "Situacao": "Reprovado"
},]

app.get('/alunos/notas/matematica', function (req, res) {
  res.json(dataJson);
});

app.get('/alunos/notas/matematica/id/:id', function (req, res) { //precisa criar uma barra nova para não entrar em conflito
  for (let i = 0; i < dataJson.length; i++) { //i é a posição de cada obj
    const element = dataJson[i]; //var com o valor da posição do dataJson
    if (element.id == req.params.id) { //element.id acessa as propriedades do obj Json. //req.params.bla - vai retornar as infos referentes a 'bla'
      res.json(element); //manda as infos de acordo com o id
    };
  };
});

app.get('/alunos/notas/matematica/Nome/:Nome', function (req, res) {
  for (let i = 0; i < dataJson.length; i++) { //i é a posição de cada obj
    const element = dataJson[i]; //var com o valor da posição do dataJson
    if (element.Nome == req.params.Nome) { //element.id acessa as propriedades do obj Json. //req.params.bla - vai retornar as infos referentes a 'bla' (aquele logo após matemática)
      res.json(element); //manda as infos de acordo com o id
    };
  };
});

//localhost é padrão e, portanto, foi omitido (mas ele existe)
app.listen(3000, function () {
  console.log('Aplicação utilizando a porta 3000');
});