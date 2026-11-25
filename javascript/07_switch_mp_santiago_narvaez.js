console.log('Ubicación de la clínica');
let area = 3;
switch (area) {
    case 1:
        console.log('Estás en recepción.');
        break;
    case 2:
        console.log('Estás en el consultorio general.');
        break;
    case 3:
        console.log('Estás en el área de vacunación.');
        break;
    case 4:
        console.log('Estás en hospitalización.');
        break;
    default:
        console.log('No se encontró esa área de la clínica.');
}

console.log('\nSaludo al paciente');
let nombreMascota = 'Luna';
switch (nombreMascota) {
    case 'Luna':
        console.log('¡Hola, Luna!');
        break;
    case 'Max':
        console.log('¡Hola, Max!');
        break;
    case 'Michi':
        console.log('¡Hola, Michi!');
        break;
    default:
        console.log('¡Bienvenida a la clínica, mascota!');
}

console.log('\nClasificación del nivel de energía');
let energia = 65;
switch (true) {
    case (energia >= 0 && energia <= 20):
        console.log('Nivel de energía bajo.');
        break;
    case (energia > 20 && energia <= 50):
        console.log('Nivel de energía moderado.');
        break;
    case (energia > 50 && energia <= 80):
        console.log('Nivel de energía bueno.');
        break;
    case (energia > 80 && energia <= 100):
        console.log('Nivel de energía alto.');
        break;
    default:
        console.log('El nivel debe estar entre 0 y 100.');
}

console.log('\nCalculadora de servicios');
let costoConsulta = 25;
let costoVacuna = 18;
let operacion = 'suma';
switch (operacion) {
    case 'suma':
        console.log('Costo total:', costoConsulta + costoVacuna);
        break;
    case 'resta':
        console.log('Diferencia de costos:', costoConsulta - costoVacuna);
        break;
    case 'multiplicacion':
        console.log('Costo de dos consultas:', costoConsulta * 2);
        break;
    case 'division':
        console.log('Mitad del costo de consulta:', costoConsulta / 2);
        break;
    default:
        console.log('Operación no válida.');
}
