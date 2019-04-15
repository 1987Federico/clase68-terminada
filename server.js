const express = require('express');
const app = express();

hbs = require('hbs');
require('./hbs/helpers/helpers');

const port = process.env.Port || 3000;
//Me permite mostrar todo el HTML que esta en la carpeta publica
//No se debe colocar con peticiones app.get ya que va depender del
//motor que la interprete para mostrar.
app.use(express.static(__dirname + '/public'))

hbs.registerPartials(__dirname + '/views/parciales');
//Express HBS
app.set('view engine', 'hbs');
//Configura una solicitud get cuando el path sea /



app.get('/', (req, resp) => {

    resp.render('home', {
        nombre: 'fede',
        anio: new Date().getFullYear()
    });
});
app.get('/about', (req, resp) => {

    resp.render('about', {
        anio: new Date().getFullYear()
    });
});
//se Configura por cada peticion get dependiendo como empiza
//la anterior es con / y la actual /data
//app.get('/data', (req, resp) => {
//    resp.send('Hola Data');
//});


app.listen(port, () => {
    console.log(`Escuchando en el puerto ${{port}}`);
});