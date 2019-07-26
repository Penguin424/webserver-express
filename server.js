const express = require('express');
const app = express();
const hbs = require('hbs');
require('./helpers/helpers');

const port = process.env.PORT || 3000;


//Express hbs
app.use(express.static(__dirname + '/public'));
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');



app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Pablo Rizo',
        anio: new Date().getFullYear()
    });


});

app.get('/about', (req, res) => {
    res.render('about', {
        nombre: 'Pablo Rizo',
        anio: new Date().getFullYear()
    });


});


app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${ port }`);

});