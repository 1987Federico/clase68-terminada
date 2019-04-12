const express = require('express');
const app = express();

//Me permite mostrar todo el HTML que esta en la carpeta publica
//No se debe colocar con peticiones app.get ya que va depender del
//motor que la interprete para mostrar.
app.use(express.static(__dirname + '/public'))

//Configura una solicitud get cuando el path sea /
//app.get('/', (req, resp) => {
//    let salida = {
//        nombre: 'federico',
//        edad: 32,
//        url: req.url
//    };
//    resp.send(salida);


//});
//se Configura por cada peticion get dependiendo como empiza
//la anterior es con / y la actual /data
//app.get('/data', (req, resp) => {
//    resp.send('Hola Data');
//});


app.listen(3000, () => {
    console.log('Escuchando en el puerto 3000');
});