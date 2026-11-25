const morty = document.getElementById("morty")
const cambiar = document.getElementById("cambiar")
const verDimension = document.getElementById("verDimension")
const dimension = document.getElementById("dimension")
cambiar.addEventListener("click", () => {
    if(morty.getAttribute("title") == "morty") {
        morty.setAttribute("src", "Rick.png")
        morty.setAttribute("title", "Rick")
        morty.dataset.dimension="C-137"
    } else {
        morty.setAttribute("src", "Morty.webp")
        morty.setAttribute("title", "morty")
        morty.dataset.dimension="C-131"
    }
    
})
verDimension.addEventListener("click", () => {
    dimension.textContent=morty.dataset.dimension
})

const portal = document.getElementById("portal")
const activarPortal = document.getElementById("activarPortal")

activarPortal.addEventListener("click", () => {
    portal.style.backgroundColor = "green"
    portal.style.color = "white"
    portal.textContent = "Portal Activado"
})