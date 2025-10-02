
const express = require("express");
const app = express();
const porta = 8000;

app.get("/", (req, res, next)=>{ 
	res.status(200).send("oi");
});


app.listen(porta);


