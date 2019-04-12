//crea el web server
const http = require('http');

http.createServer((req, resp) => {
        resp.writeHead(200, { 'content-Type': 'application/json' });


        let salida = {
            nombre: 'federico',
            edad: 30,
            url: req.url
        }
        resp.write(JSON.stringify(salida));
        resp.end();
    })
    .listen(8080)
console.log('Escuchando el puerto 8080');