let pacientes = ['Luna', 'Max', 'Michi', 'Toby', 'Nube'];

console.log('Elemento 0:', pacientes[0]);
console.log('Elemento 1:', pacientes[1]);
console.log('Elemento 2:', pacientes[2]);
console.log('Elemento 3:', pacientes[3]);
console.log('Elemento 4:', pacientes[4]);
console.log('Tamaño del arreglo:', pacientes.length);

console.log('Pacientes registrados:', pacientes);

console.log('\nAgregar pacientes al arreglo');
pacientes.push('Canela'); // Agrega un elemento al final.
pacientes.unshift('Rocky'); // Agrega un elemento al inicio.
console.log('Pacientes:', pacientes);

console.log('\nModificar un elemento del arreglo');
pacientes[0] = 'Simba';
console.log('Pacientes:', pacientes);

console.log('\nEliminar elementos del arreglo');
pacientes.pop(); // Elimina el último elemento.
console.log('Después de pop:', pacientes);

pacientes.shift(); // Elimina el primer elemento.
console.log('Después de shift:', pacientes);

pacientes.splice(2, 1); // Elimina un elemento desde la posición 2.
console.log('Después de splice:', pacientes);
