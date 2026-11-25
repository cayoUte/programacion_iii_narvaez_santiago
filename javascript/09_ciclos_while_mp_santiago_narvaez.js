console.log('Preparar los consultorios');
let consultorio = 1;
while (true) {
    console.log('Revisando consultorio', consultorio);
    consultorio++;
    if (consultorio > 5) {
        console.log('Todos los consultorios están listos.');
        break;
    }
}

console.log('\nCuenta regresiva para abrir la clínica');
let contador = 5;
while (contador >= 0) {
    console.log('Faltan', contador, 'segundos para abrir.');
    contador--;
}
console.log('La clínica está abierta.');

console.log('\nReponer suministros veterinarios');
let suministros = 50;
let reposicion = 10;
let totalReposiciones = 0;
while (suministros < 100) {
    suministros += reposicion;
    totalReposiciones++;
    console.log('Suministros disponibles:', suministros + '%');
}
console.log('Reposiciones realizadas:', totalReposiciones);

console.log('\nConsumo de guantes durante las consultas');
let guantes = 100;
let consumoPorConsulta = 30;
let consultasAtendidas = 0;
while (guantes >= consumoPorConsulta) {
    guantes -= consumoPorConsulta;
    consultasAtendidas++;
    console.log('Consulta:', consultasAtendidas);
    console.log('Guantes disponibles:', guantes);
    if (guantes < 50) {
        console.log('Advertencia: quedan pocos guantes, prepara una reposición.');
    }
}
console.log('Consultas atendidas antes de reponer:', consultasAtendidas);
console.log('No hay suficientes guantes para otra consulta.');

console.log('\nAplicar controles con do...while');
let controlesPendientes = 3;
do {
    console.log('Se realiza un control de seguimiento.');
    controlesPendientes--;
} while (controlesPendientes > 0);
console.log('Seguimiento completado.');

console.log('\nAhorrar para comprar equipo veterinario');
let ahorro = 80;
let meta = 500;
let ahorroSemanal = 70;
let semanas = 0;
do {
    ahorro += ahorroSemanal;
    semanas++;
    console.log('Semana:', semanas, '| Ahorro actual:', ahorro, 'dólares');
} while (ahorro < meta);
console.log('Meta alcanzada en', semanas, 'semanas; ya se puede comprar el equipo.');
