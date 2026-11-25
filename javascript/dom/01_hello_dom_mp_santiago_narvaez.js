console.log(document);

const titulo = document.getElementById('titulo');
console.log(titulo);
titulo.textContent = 'Atención veterinaria para toda la familia';

const estado = document.getElementById('estado');
const botonConsultorio = document.getElementById('botonConsultorio');
botonConsultorio.addEventListener('click', () => {
    estado.textContent = 'Consultorio abierto';
    console.log('El estado del consultorio cambió.');
});

const botonMensaje = document.getElementById('botonMensaje');
const mensaje = document.getElementById('mensaje');
botonMensaje.addEventListener('click', () => {
    mensaje.textContent = '¡Qué gusto recibirte con tu mascota!';
});

let pacientesAtendidos = 0;
const cuenta = document.getElementById('cuenta');
const botonContador = document.getElementById('botonContador');
botonContador.addEventListener('click', () => {
    pacientesAtendidos++;
    cuenta.textContent = pacientesAtendidos;
});
