console.log('Recorrer y actualizar un arreglo con for tradicional');
let consultasPorDia = [30, 50, 70, 40];
let posicion = 2;
let nuevoValor = 100;

for (let i = 0; i < consultasPorDia.length; i++) {
    console.log('Posición:', i);
    console.log('Consultas:', consultasPorDia[i]);
    if (posicion >= 0 && posicion < consultasPorDia.length) {
        consultasPorDia[posicion] = nuevoValor;
    } else {
        console.log('Posición fuera de rango.');
    }
}
console.log('Consultas actualizadas:', consultasPorDia);

console.log('\nRecorrer objetos de pacientes con for...of');
const pacientes = [
    { id: 1, nombre: 'Luna', visitas: 3, edad: 4 },
    { id: 2, nombre: 'Max', visitas: 2, edad: 6 },
    { id: 3, nombre: 'Michi', visitas: 5, edad: 2 }
];

for (const paciente of pacientes) {
    console.log('Paciente:', paciente.nombre);
    console.log('Visitas:', paciente['visitas']);
    console.log('Edad:', paciente['edad']);
}

console.log('\nSumar los costos de servicios por paciente');
const cuentas = [
    { paciente: 'Luna', servicios: [25, 18, 12] },
    { paciente: 'Max', servicios: [25, 30, 15] },
    { paciente: 'Michi', servicios: [18, 18, 25] }
];

for (const cuenta of cuentas) {
    let totalCuenta = 0;
    console.log('Paciente:', cuenta.paciente);
    for (const costo of cuenta.servicios) {
        console.log('Costo de servicio:', costo);
        totalCuenta += costo;
    }
    console.log('Total de servicios para', cuenta.paciente + ':', totalCuenta);
}

console.log('\nUsar map para calcular el doble de los costos');
const costosOriginales = [30, 50, 70, 40];
const costosDobles = costosOriginales.map(costo => costo * 2);
console.log('Costos originales:', costosOriginales);
console.log('Costos dobles:', costosDobles);

console.log('\nUsar filter para encontrar costos de 50 o más');
const costosAltos = costosOriginales.filter(costo => costo >= 50);
console.log('Costos de 50 o más:', costosAltos);

console.log('\nUsar reduce para sumar los costos');
const totalCostos = costosOriginales.reduce((acumulado, costo) => acumulado + costo, 0);
console.log('Total de costos:', totalCostos);
