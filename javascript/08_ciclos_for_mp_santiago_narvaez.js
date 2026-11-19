console.log('Ciclos for en la Clínica Veterinaria Huellitas');
for (let i = 1; i <= 5; i++) {
    console.log('Turno número:', i);
}

console.log('\nCuenta regresiva para iniciar la jornada');
for (let segundos = 5; segundos >= 0; segundos--) {
    console.log('Faltan', segundos, 'segundos');
}

console.log('\nCuenta regresiva con mensaje final');
for (let segundos = 5; segundos >= 0; segundos--) {
    if (segundos === 0) {
        console.log('La clínica está lista para atender.');
    } else {
        console.log('Faltan', segundos, 'segundos para abrir.');
    }
}

console.log('\nRegistrar niveles de energía');
const energia = 60;
for (let nivel = 0; nivel <= 100; nivel += 10) {
    if (energia >= nivel) {
        console.log('Nivel registrado:', nivel + '%');
    }
}

console.log('\nAcumular el costo de las consultas');
const costoPorConsulta = 25;
let totalConsultas = 0;
for (let consulta = 1; consulta <= 5; consulta++) {
    totalConsultas += costoPorConsulta;
    console.log('Consulta:', consulta, '| Total acumulado:', totalConsultas);
}
console.log('Total de las consultas:', totalConsultas);

console.log('\nPromedio de pacientes atendidos por día');
let totalPacientes = 0;
const dias = 5;
for (let dia = 1; dia <= dias; dia++) {
    let pacientes = dia * 2 + 3;
    totalPacientes += pacientes;
    console.log('Día:', dia, '| Pacientes atendidos:', pacientes);
}
console.log('Total de pacientes:', totalPacientes);
console.log('Promedio diario:', (totalPacientes / dias).toFixed(2));

console.log('\nClasificar números de turnos pares e impares');
let turnosPares = 0;
let turnosImpares = 0;
for (let turno = 1; turno <= 10; turno++) {
    if (turno % 2 === 0) {
        console.log('Turno', turno, 'es par.');
        turnosPares++;
    } else {
        console.log('Turno', turno, 'es impar.');
        turnosImpares++;
    }
}
console.log('Turnos pares:', turnosPares);
console.log('Turnos impares:', turnosImpares);

console.log('\nRecorrer vacunas aplicadas con for tradicional');
let vacunas = ['Rabia', 'Triple felina', 'Parvovirus', 'Bordetella'];
let vacunasAplicadas = 0;
for (let i = 0; i < vacunas.length; i++) {
    console.log('Vacuna:', vacunas[i]);
    if (vacunas[i] === 'Parvovirus' || vacunas[i] === 'Rabia') {
        vacunasAplicadas++;
    }
}
console.log('Vacunas prioritarias del ejemplo:', vacunasAplicadas);

console.log('\nRecorrer pacientes con for...of');
const pacientes = ['Luna', 'Max', 'Michi', 'Toby', 'Nube'];
for (const paciente of pacientes) {
    console.log('Paciente:', paciente);
}

const clinica = {
    nombre: 'Clínica Huellitas',
    consultorio: 'Consulta general',
    capacidadDiaria: 20,
    equipo: ['Dra. Valeria', 'Dr. Mateo', 'Dra. Camila']
};
console.log('\nRecorrer propiedades de la clínica con for...in');
for (const propiedad in clinica) {
    console.log(propiedad + ':', clinica[propiedad]);
    if (propiedad === 'equipo') {
        console.log('Integrantes del equipo:');
        for (const integrante of clinica[propiedad]) {
            console.log('-', integrante);
        }
    }
}

console.log('\nRevisar el cumplimiento de citas');
const citas = [
    { nombre: 'Control de Luna', realizadas: 2, planificadas: 2, paciente: 'Luna' },
    { nombre: 'Vacunas de Max', realizadas: 1, planificadas: 2, paciente: 'Max' },
    { nombre: 'Control de Michi', realizadas: 3, planificadas: 3, paciente: 'Michi' },
    { nombre: 'Revisión de Toby', realizadas: 1, planificadas: 3, paciente: 'Toby' }
];
let citasCompletas = 0;
for (const cita of citas) {
    let porcentaje = (cita.realizadas / cita.planificadas) * 100;
    console.log(cita.nombre, '| Paciente:', cita.paciente, '| Cumplimiento:', porcentaje.toFixed(2) + '%');
    if (porcentaje >= 100) {
        citasCompletas++;
    } else {
        console.log('Faltan', cita.planificadas - cita.realizadas, 'controles.');
    }
}
console.log('Citas completadas:', citasCompletas);

console.log('\nUso de break y continue');
for (let turno = 1; turno <= 10; turno++) {
    if (turno === 5) {
        console.log('Se alcanzó el turno 5; se detiene el ciclo.');
        break;
    }
    console.log('Turno:', turno);
}

for (let turno = 1; turno <= 10; turno++) {
    if (turno % 2 === 0) {
        console.log('El turno', turno, 'es par y se omite.');
        continue;
    }
    console.log('Turno impar atendido:', turno);
}
