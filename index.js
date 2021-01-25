const express = require("express");
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.post('/hola', function (req, res) {
    console.log('xd');
    res.send('Hola');
});

app.get('/hola', function (req, res) {
    res.send('[GET]Saludos desde express');
});

app.listen(3000, () => {
    console.log("El servidor está inicializado en el puerto 3000");
});

