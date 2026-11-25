const prompt = require('prompt-sync')({ sigint: true });

console.log('Condicional if: evaluación inicial del paciente');
let energia = Number(prompt('¿Qué nivel de energía tiene la mascota (0 a 100)? '));
if (energia > 0) {
    console.log('La mascota muestra actividad.');
}

console.log('\nCondicional if-else: pago de la consulta');
let pagoRealizado = prompt('¿Se realizó el pago de la consulta? (si/no) ').toLowerCase();
if (pagoRealizado === 'si') {
    console.log('La consulta está registrada como pagada.');
} else {
    console.log('La consulta queda pendiente de pago.');
}

console.log('\nCondicional if-else if-else: tipo de servicio');
let servicio = prompt('Elige un servicio (consulta, vacuna, peluqueria): ').toLowerCase();
if (servicio === 'consulta') {
    console.log('Se registró una consulta general.');
} else if (servicio === 'vacuna') {
    console.log('Se registró una cita de vacunación.');
} else if (servicio === 'peluqueria') {
    console.log('Se registró un servicio de peluquería.');
} else {
    console.log('No reconocemos ese servicio.');
}

console.log('\nCondicional if anidado: disponibilidad de atención');
let veterinarioDisponible = true;
let consultorioDisponible = false;
if (veterinarioDisponible) {
    if (consultorioDisponible) {
        console.log('El paciente puede pasar al consultorio.');
    } else {
        console.log('Hay veterinario disponible, pero el consultorio está ocupado.');
    }
} else {
    console.log('No hay veterinario disponible en este momento.');
}

console.log('\nCondicionales con operadores lógicos');
let pacienteRegistrado = true;
let citaConfirmada = false;
if (pacienteRegistrado && citaConfirmada) {
    console.log('El paciente está registrado y tiene una cita confirmada.');
} else if (pacienteRegistrado || citaConfirmada) {
    console.log('Se cumple una de las condiciones; revisa los datos de la cita.');
} else {
    console.log('El paciente no está registrado ni tiene cita confirmada.');
}

console.log('\nEvaluación de requisitos para una visita a domicilio');
let distanciaKm = Number(prompt('¿A cuántos kilómetros está el domicilio? '));
let veterinarioDeTurno = 'si';
let transporteDisponible = 'si';
let transporteAveriado = 'no';

if (distanciaKm <= 10 &&
    (veterinarioDeTurno === 'si' || transporteDisponible === 'si') &&
    transporteAveriado !== 'si') {
    console.log('La visita a domicilio puede programarse.');
} else {
    if (distanciaKm > 10) {
        console.log('El domicilio está fuera del radio de atención.');
    }
    if (veterinarioDeTurno === 'no') {
        console.log('No hay veterinario de turno disponible.');
    }
    if (transporteDisponible === 'no') {
        console.log('No hay transporte disponible.');
    }
    if (transporteAveriado === 'si') {
        console.log('El transporte está averiado.');
    }
}

console.log('\nSeguimiento de tratamiento');
let controlesPlanificados = 10;
let controlesRealizados = 8;
let costoInicial = 120;
let costoPagado = 100;
let mascotaEstable = 'si';
let tratamientoCompleto = 'no';
let descuento = 0;
let porcentajeCumplimiento = (controlesRealizados / controlesPlanificados) * 100;
let saldoPendiente = costoInicial - costoPagado;

if (porcentajeCumplimiento >= 90) {
    console.log('Seguimiento completo: se realizaron casi todos los controles.');
} else if (porcentajeCumplimiento >= 70 && porcentajeCumplimiento < 90) {
    console.log('Seguimiento avanzado: conviene completar los controles pendientes.');
} else if (porcentajeCumplimiento >= 50 && porcentajeCumplimiento < 70) {
    console.log('Seguimiento parcial: hay varios controles pendientes.');
} else {
    console.log('Seguimiento inicial: programa los próximos controles.');
}

console.log('\nEvaluación de descuento');
if (porcentajeCumplimiento >= 90 && saldoPendiente === 0) {
    descuento = 10;
    console.log('Se aplica un descuento de:', descuento);
} else {
    console.log('No aplica descuento en esta visita.');
}

console.log('\nEstado del paciente y tratamiento');
if (mascotaEstable === 'si' && tratamientoCompleto === 'si') {
    console.log('Paciente estable y tratamiento completo.');
} else if (mascotaEstable === 'no' && tratamientoCompleto === 'si') {
    console.log('Tratamiento completo; se recomienda una nueva valoración.');
} else if (mascotaEstable === 'si' && tratamientoCompleto === 'no') {
    console.log('Paciente estable; debe continuar con los controles indicados.');
} else {
    console.log('Se necesita seguimiento veterinario y completar el tratamiento.');
}

console.log('\nResumen del seguimiento');
console.log('Controles planificados:', controlesPlanificados);
console.log('Controles realizados:', controlesRealizados);
console.log('Porcentaje de cumplimiento:', porcentajeCumplimiento.toFixed(2) + '%');
console.log('Costo inicial:', costoInicial);
console.log('Monto pagado:', costoPagado);
console.log('Saldo pendiente:', saldoPendiente);
console.log('Descuento:', descuento);
console.log('Paciente estable:', mascotaEstable);
console.log('Tratamiento completo:', tratamientoCompleto);
