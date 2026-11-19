console.log('Operadores en la Clínica Veterinaria Huellitas');

console.log('\nOperadores aritméticos: cálculo de una factura');
let consulta = 25;
let vacuna = 18;
console.log('Total de consulta y vacuna:', consulta + vacuna);
console.log('Diferencia entre los precios:', consulta - vacuna);
console.log('Costo de 2 consultas:', consulta * 2);
console.log('Repartir una factura entre 2 personas:', (consulta + vacuna) / 2);
console.log('Saldo luego de aplicar un descuento de 10:', (consulta + vacuna) % 10);

console.log('\nOperadores de asignación: actualizar el total');
let total = 40;
total += 15;
console.log('Después de sumar un servicio:', total);
total -= 5;
console.log('Después de restar un descuento:', total);
total *= 2;
console.log('Después de duplicar la cantidad:', total);
total /= 2;
console.log('Después de dividir el total:', total);
total %= 20;
console.log('Residuo del total dividido para 20:', total);

console.log('\nOperadores de comparación: revisar una factura');
let montoFactura = 43;
let montoPagado = 40;
console.log('¿Factura y pago son iguales?', montoFactura == montoPagado);
console.log('¿Factura y pago son distintos?', montoFactura != montoPagado);
console.log('¿La factura es mayor que el pago?', montoFactura > montoPagado);
console.log('¿La factura es menor que el pago?', montoFactura < montoPagado);
console.log('¿Factura mayor o igual al pago?', montoFactura >= montoPagado);
console.log('¿Factura menor o igual al pago?', montoFactura <= montoPagado);

console.log('\nOperadores lógicos: confirmar condiciones de una cita');
let pacienteRegistrado = true;
let citaDisponible = false;
console.log('¿Registrado y con cita disponible?', pacienteRegistrado && citaDisponible);
console.log('¿Registrado o con cita disponible?', pacienteRegistrado || citaDisponible);
console.log('¿No está registrado?', !pacienteRegistrado);

console.log('\nOperadores de incremento y decremento: turnos pendientes');
let turnosPendientes = 5;
console.log('Incremento prefijo:', ++turnosPendientes);
console.log('Decremento prefijo:', --turnosPendientes);
console.log('Incremento postfijo:', turnosPendientes++);
console.log('Decremento postfijo:', turnosPendientes--);
console.log('Turnos pendientes al final:', turnosPendientes);

console.log('\nOperador de concatenación');
let mascota = 'Luna';
let servicio = 'consulta general';
console.log('La paciente ' + mascota + ' tiene una cita de ' + servicio + '.');

console.log('\nOperadores de comparación estricta');
let edad = 5;
let edadComoTexto = '5';
console.log('¿Edad y texto son estrictamente iguales?', edad === edadComoTexto);
console.log('¿Edad y texto son estrictamente distintos?', edad !== edadComoTexto);

console.log('\nOperador ternario: estado de pago');
let pagoCompleto = montoPagado >= montoFactura;
let estadoPago = pagoCompleto ? 'Factura pagada' : 'Pago pendiente';
console.log(estadoPago);

console.log('\nTabla de multiplicación del costo de consulta');
console.log(`${consulta} x 1 = ${consulta * 1}`);
console.log(`${consulta} x 2 = ${consulta * 2}`);
console.log(`${consulta} x 3 = ${consulta * 3}`);
console.log(`${consulta} x 4 = ${consulta * 4}`);
console.log(`${consulta} x 5 = ${consulta * 5}`);
console.log(`${consulta} x 6 = ${consulta * 6}`);
console.log(`${consulta} x 7 = ${consulta * 7}`);
console.log(`${consulta} x 8 = ${consulta * 8}`);
console.log(`${consulta} x 9 = ${consulta * 9}`);
console.log(`${consulta} x 10 = ${consulta * 10}`);

console.log('\nDividir el costo de varias consultas entre 5 familias');
console.log(`5 ÷ 5 = ${5 / 5}`);
console.log(`10 ÷ 5 = ${10 / 5}`);
console.log(`15 ÷ 5 = ${15 / 5}`);
console.log(`20 ÷ 5 = ${20 / 5}`);
console.log(`25 ÷ 5 = ${25 / 5}`);
console.log(`30 ÷ 5 = ${30 / 5}`);
console.log(`35 ÷ 5 = ${35 / 5}`);
console.log(`40 ÷ 5 = ${40 / 5}`);
console.log(`45 ÷ 5 = ${45 / 5}`);
console.log(`50 ÷ 5 = ${50 / 5}`);
