console.log(document)

const titulo = document.getElementById("titulo")
console.log(titulo)
titulo.textContent = "Laboratorio intedimensional"
const estado = document.getElementById("estado")
const boton = document.getElementById("botonPortal")

boton.addEventListener("click", function(){
    console.log("Ejecutando click")
    estado.textContent = "Portal activado"    
    console.log("Texto cambiado en el elemento estado")
    alert("Proceso de activacion del portal terminado")
})
const botonMorty = document.getElementById("botonMensaje")
const mensaje = document.getElementById("mensaje")
botonMorty.addEventListener("click", () => {
    mensaje.textContent = "Morty listo para la aventura"
})
let viajes = 0
const cuenta = document.getElementById("cuenta")
const botonContador = document.getElementById("contador")
botonContador.addEventListener("click", () => {
    viajes += 1
    cuenta.textContent=viajes
})