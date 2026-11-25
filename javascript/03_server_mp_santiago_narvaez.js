// Servidor HTTP básico para la Clínica Veterinaria Huellitas.
// Para ejecutarlo: node 03_server_mp_santiago_narvaez.js

const http = require('http');

const servidor = http.createServer((solicitud, respuesta) => {
    respuesta.setHeader('Content-Type', 'text/html; charset=utf-8');

    if (solicitud.url === '/') {
        respuesta.statusCode = 200;
        respuesta.end(`
            <!DOCTYPE html>
            <html lang="es">
            <head>
                <meta charset="UTF-8">
                <title>Clínica Veterinaria Huellitas</title>
            </head>
            <body>
                <h1>Clínica Veterinaria Huellitas</h1>
                <p>Bienvenidos. Cuidamos la salud de tu mascota.</p>
                <a href="/servicios">Ver servicios</a>
            </body>
            </html>
        `);
    } else if (solicitud.url === '/servicios') {
        respuesta.statusCode = 200;
        respuesta.end(`
            <!DOCTYPE html>
            <html lang="es">
            <head>
                <meta charset="UTF-8">
                <title>Servicios veterinarios</title>
            </head>
            <body>
                <h1>Servicios veterinarios</h1>
                <ul>
                    <li>Consulta general</li>
                    <li>Vacunación</li>
                    <li>Desparasitación</li>
                </ul>
                <a href="/">Volver al inicio</a>
            </body>
            </html>
        `);
    } else {
        respuesta.statusCode = 404;
        respuesta.end('<h1>Página no encontrada</h1>');
    }
});

const puerto = 3000;
servidor.listen(puerto, () => {
    console.log(`Servidor de Huellitas disponible en http://localhost:${puerto}`);
});
