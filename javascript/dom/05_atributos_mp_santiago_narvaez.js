const mascota = document.getElementById('mascota');
const cambiar = document.getElementById('cambiar');
const verFicha = document.getElementById('verFicha');
const ficha = document.getElementById('ficha');

cambiar.addEventListener('click', () => {
    if (mascota.getAttribute('title') === 'gato') {
        mascota.setAttribute('src', '../../html/images/animales/perro.jpg');
        mascota.setAttribute('title', 'perro');
        mascota.setAttribute('alt', 'Paciente canino de la clínica');
        mascota.dataset.especie = 'Perro';
        mascota.dataset.paciente = 'Max';
    } else {
        mascota.setAttribute('src', '../../html/images/animales/gato.jpg');
        mascota.setAttribute('title', 'gato');
        mascota.setAttribute('alt', 'Paciente felino de la clínica');
        mascota.dataset.especie = 'Gato';
        mascota.dataset.paciente = 'Luna';
    }
});

verFicha.addEventListener('click', () => {
    ficha.textContent = `Paciente: ${mascota.dataset.paciente} · Especie: ${mascota.dataset.especie}`;
});

const estado = document.getElementById('estado');
const iniciarAtencion = document.getElementById('iniciarAtencion');

iniciarAtencion.addEventListener('click', () => {
    estado.style.backgroundColor = '#2e8b57';
    estado.style.color = '#ffffff';
    estado.style.padding = '12px';
    estado.textContent = 'Atención en curso';
});
