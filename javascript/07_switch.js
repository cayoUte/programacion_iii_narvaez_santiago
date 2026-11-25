let dimension = 4
switch (dimension) {
    case 1:
        console.log("Estas en la dimenion C-132")
        break;
    case 2:
        console.log("Estas en la dimenion C-137")
        break;
    case 3:
        console.log("Estas en la dimenion C-500")
        break;
    case 4:
        console.log("Estas en la dimenion Santiago Narvaez")
        break;
    default:
        console.log("No estas en ninguna dimension")
}

let personaje = "Rick"
switch (personaje) {
    case "Rick":
        console.log("Hola Rick")
        break;
    case "Morty":
        console.log("Hola Morty")
        break;
    case "Summer":
        console.log("Hola Summer")
        break;
    default:
        console.log("No eres un personaje de Rick and Morty")
}

let energia = 50
switch (true) {
    case(energia >0 && energia <= 20):
        console.log("Estas en estado critico")
        break;
    case(energia >20 && energia <= 50):
        console.log("Estas en estado estable")
        break;
    case(energia >50 && energia <= 80):
        console.log("Estas en estado bueno")
        break;
    case(energia >80 && energia <= 100):
        console.log("Estas en estado excelente")
        break;
    default:
        console.log("No estas en ningun estado")
}

console.log("Calculadora")
let numero1 = 10
let numero2 = 5
let operacion = "suma"
switch (operacion) {
    case "suma":
        console.log("El resultado de la suma es: " + (numero1 + numero2))
        break;
    case "resta":
        console.log("El resultado de la resta es: " + (numero1 - numero2))
        break;
    case "multiplicacion":
        console.log("El resultado de la multiplicacion es: " + (numero1 * numero2))
        break;
    case "division":
        console.log("El resultado de la division es: " + (numero1 / numero2))
        break;
    default:
        console.log("Operacion no valida")
}