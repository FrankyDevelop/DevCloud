const path = require('path');
const express = require('express');
const app = express();
require("dotenv").config();

//modulo exportado desde task.js
const Task = require('./models/Task');

//ajustes
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


//MIDDELWARES

//Permitir que express entienda los datos de un formulario y permita enviarlos
app.use(express.urlencoded({ extended: false }));
//Entender datos en json (esto puede ayudarnos a que aplicaicon con react o vue entiendan estos datos)
app.use(express.json());


//CRUD

//Listar
app.get('/', async(req, res) => {
    const taks= await Task.find();
    res.render('index',{taks});//mandamos los datos al index
})

//create
app.post('/create', async (req, res) => {
    const nuevaTarea = new Task({
        task: req.body.task,
        description: req.body.description
    })
    await nuevaTarea.save();
    res.send('Recibido');
})

//ejeuctar archivo incial
app.use(express.static(path.join(__dirname + '/public')));

module.exports = app;