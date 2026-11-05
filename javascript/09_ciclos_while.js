console.log("Abriendo portal de la nave...")
let portal = 1;
while (true) {
    console.log("Abriendot Portal "+ portal);
    portal++;
    if(portal > 5) {
        console.log("Todos los portales abiertos");
        break;
    }
}

console.log("Cuenta regresiva despeugue de la nave de Morty")
let contador = 10;
while (contador >= 0) {
    console.log("Faltan "+ contador + "segundos para despegar");
    contador--;
}
console.log("Despegue de la nave de Morty");

console.log("Recargar la pistola de portales de Rick")
let energia = 50
let recarga = 10
let totalRecargas = 0
while (energia < 100) {
    energia += recarga;
    totalRecargas++;
    console.log("Recargando la pistola de portales de Rick, nivel de energia: " + energia + "%");
}
console.log("Total de recargas realizadas: " + totalRecargas);

console.log("consumo de combustible de la nave de Rick")
let combustible = 100;
let consumo = 45
let viajes = 0;
while (combustible >= consumo) {
    combustible -= consumo;
    viajes++;
    console.log("Viaje: " + viajes);
    console.log("Combustible restante: " + combustible + " unidades");
    if(combustible < 50) {
        console.log("Advertencia: Combustible bajo, considere recargar antes del próximo viaje");
    }
}
console.log("Total de viajes realizados: " + viajes);
console.log("No hay suficiente combustible para otro viaje")

console.log("Activar portales de dimwnsiones peligrosas con Do ... while")
let energiaPortal = 50;
do{
    console.log("Activando portal de dimensión peligrosa, nivel de energia: " + energiaPortal + "%");
    energiaPortal -= 15;
} while (energiaPortal > 0);

console.log("Comprar una pistola de portales para rick")
let ahorro = 80
let meta = 500
let ahorroSemanal = 70
let semanas = 0;
do{
    ahorro += ahorroSemanal;
    semanas++;
    console.log("Semana: " + semanas + ", Ahorro actual: " + ahorro + " dólares");
} while (ahorro < meta);
console.log("Meta alcanzada en " + semanas + " semanas, ahora puedes comprar la pistola de portales para Rick");