const energia = document.getElementById('energia');
const paciente = document.getElementById('paciente');
const cita = document.getElementById('cita');

energia.textContent = 'Nivel de energía: adecuado';
paciente.textContent = 'Paciente: Luna';
cita.textContent = 'Cita: confirmada';

// Seleccionar un elemento por el nombre de su clase.
const primeraMascota = document.querySelector('.mascota');
primeraMascota.textContent = 'Luna (paciente actual)';

const tituloServicios = document.querySelector('h2');
tituloServicios.textContent = 'Pacientes en espera';

const estadoClinica = document.querySelector('#estadoClinica');
estadoClinica.textContent = 'Clínica abierta';

const estadoFicha = document.querySelector('#ficha .estado');
estadoFicha.textContent = 'Revisión completada';

const servicios = document.querySelectorAll('.servicio');
console.log(servicios);

// Recorrer los elementos seleccionados con for.
for (let i = 0; i < servicios.length; i++) {
    console.log(servicios[i].textContent);
}

// Recorrer con forEach.
servicios.forEach(servicio => console.log(servicio.textContent));

// Recorrer con for...of.
for (const servicio of servicios) {
    console.log(servicio.textContent);
}
