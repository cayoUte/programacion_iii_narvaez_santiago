console.log('Variables en la Clínica Veterinaria Huellitas');

/*
Las variables guardan datos que podemos consultar y actualizar durante
la ejecución del programa.
*/

let nombreMascota = 'Luna';
let nivelEnergia = 100;
let especie = 'Gata';
let tieneCita = true;

console.log('Paciente:', nombreMascota);
console.log('Nivel de energía:', nivelEnergia);
console.log('Especie:', especie);
console.log('Tiene cita:', tieneCita);

// Actualizamos los datos del paciente.
nombreMascota = 'Max';
nivelEnergia = 85;
especie = 'Perro';
tieneCita = false;

console.log('Datos actualizados:');
console.log('Paciente:', nombreMascota);
console.log('Nivel de energía:', nivelEnergia);
console.log('Especie:', especie);
console.log('Tiene cita:', tieneCita);

// También se puede declarar una variable con var.
var veterinario = 'Dra. Valeria';
console.log('Veterinaria responsable:', veterinario);

veterinario = 'Dr. Mateo';
console.log('Nuevo veterinario responsable:', veterinario);
