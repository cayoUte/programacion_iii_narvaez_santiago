console.log("Ciclos For");
for(let i= 1; i<= 5; i++) {
    console.log("Iteracion Número: " + i);
}

console.log("Cuenta regresiva despeugue de la nave de Morty")
for(let i= 10; i>= 0; i--) {
    console.log("Faltan"+ i + "segundos para despegar");
}
console.log("Cuenta regresiva despeugue de la nave de Morty con mensaje final")
for(let i= 10; i>= 0; i--) {
    if(i===0) {
        console.log("Despegue de la nave de Morty");
    } else {
        console.log("Faltan"+ i + "segundos para despegar");
    }
}

console.log("nivel de energia de Rick")
const energia = 50
for(let i = 0; i<= 100; i+=10) {
    if(energia >= i){
        console.log("Nivel de energia: " + i + "%");    
    }
}

const consumoPorViaje = 10
let totalConsumido = 0;
for (let viaje =1; viaje <= 5; viaje++) {
    totalConsumido += consumoPorViaje;
    console.log("Viaje: " + viaje );
    console.log("Total consumido hasta ahora: " + totalConsumido + "unidades de combustible");
}
console.log("Total consumido: " + totalConsumido + "unidades de combustible");  
console.log("Promedio de los Creistales")
let totalCristales = 0;
let dias = 7;
for (let dia = 1; dia <= dias; dia++) {
    let cristales = dia*5+5
    totalCristales += cristales;
    console.log("Dia: " + dia + " Cristales recolectados: " + cristales);
}
console.log("total de cristales recolectados: " + totalCristales);
console.log("Promedio de cristales recolectados: " + (totalCristales/dias).toFixed(2));

console.log("dimensiones peligrosas")
let seguras = 0;
let pleligrosas = 0;
for(let dimension = 1; dimension <= 10; dimension++) {
    if(dimension%2 === 0) {
        console.log("Dimension" +diemension + " es peligrosa");
        pleligrosas++;
    } else {
        console.log("Dimension" +diemension + " es segura");
        seguras++;
    }
}
console.log("Total de dimensiones seguras: " + seguras);
console.log("Total de dimensiones peligrosas: " + pleligrosas);

console.log("Recoleccion de Cristales de Morty")
let cristales = [35,60,45,80,70,90,55]
let total = 0
let viajesExitosos = 0
for(leti=0; i<cristales.length; i++) {
    total += cristales[i];
    if(cristales[i] >= 50) {
        viajesExitosos++;
    }else {
        console.log("Viaje " + (i+1) + " no fue exitoso, cristales recolectados: " + cristales[i]);
    }
}
console.log("Total de cristales recolectados: " + total);
console.log("Viajes exitosos: " + viajesExitosos);

console.log("Recorrer personajes con for ... of")
personajes = ["Rick", "Morty", "Summer", "Beth", "Jerry"]
for (let personajes of personajes) {
    console.log("Personaje: " + personajes);
}

const nave = {
    nombre: "Nave de Rick",
    modelo: "Space Cruiser",
    velocidadMaxima: 5000,
    tripulacion: ["Rick", "Morty", "Summer"]
};
console.log("Recorrer propiedades de un objeto con for ... in")
for (let propiedad in nave) {
    console.log(propiedad + ": " + nave[propiedad]);
    if(propiedad === "tripulacion") {
        console.log("Tripulación: " + nave[propiedad].join(", "));
        for (let miembro of nave[propiedad]) {
            console.log("Miembro de la tripulación: " + miembro);
        }
    }
}

let misiones =[
    {nombre: "Mision 1", cristales: 90, meta: 100, personaje: "Rick"},
    {nombre: "Mision 2", cristales: 40, meta: 50, personaje: "Morty"},
    {nombre: "Mision 3", cristales: 70, meta: 80, personaje: "Summer"},
    {nombre: "Mision 4", cristales: 30, meta: 60, personaje: "Beth"},
    {nombre: "Mision 5", cristales: 100, meta: 100, personaje: "Jerry"}
]
let exitosas = 0;
for(let mision of misiones) {
    let porcentaje = (mision.cristales / mision.meta) * 100;
    console.log(mision.nombre + "completada por" +mision.personaje + " con un porcentaje de: " + porcentaje.toFixed(2) + "%");
    if(porcentaje >= 100) {
        exitosas++;
    } else {
        console.log(mision.nombre + " no fue exitosa, faltaron " + (mision.meta - mision.cristales) + " cristales para completar la meta.");
    }
}
console.log("Numero de misiones exitosas:"+ exitosas);

console.log("Uso de break y continue en ciclos for")
for(let i=1; i<=10; i++) {
    if(i === 5) {
        console.log("Se encontró el número 5, se detiene el ciclo.");
        break;
    }
    console.log("Número: " + i);
}

for(let i=1; i<=10; i++) {
    if(i % 2 === 0) {
        console.log("Se encontró un número par: " + i + ", se omite este número.");
        continue;
    }
    console.log("Número impar: " + i);
}