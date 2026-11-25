const energia = document.getElementById("energia")
const dimension = document.getElementById("dimension")
const portal = document.getElementById("portal")

energia.textContent = "Energia: 100"
dimension.textContent = "Dimension: C-132"
portal.textContent = "Portal: activado"

//seleccion a traves del nobre de la clase
const personaje = document.querySelector(".personaje")
personaje.textContent = "Rick-C137"

const h2Ojbeto = document.querySelector("h2")
h2Ojbeto.textContent = "Preparando Nave"

const universo = document.querySelector("#universo")
universo.textContent = "Preparando Universo"

const estadoMorty = document.querySelector("#morty .estado")
estadoMorty.textContent="Preparado para viajar"
const planetas = document.querySelectorAll(".planetas")
console.log(planetas)

//recorrer con for
for (let i = 0; i < planetas.length; i++) {
    console.log(planetas[i].textContent)
    
}

// recorrer con foreach
planetas.forEach(p => console.log(p.textContent))

//con for of
for(let planeta of planetas) console.log(planeta.textContent)
