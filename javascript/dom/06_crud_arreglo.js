let personajes = [
    {
        id:1,
        nombre: "Rick Sanckez",
        dimension: "C-137",
        estado: "Vivo"
    },
    {
        id:2,
        nombre: "Rick Sanckez",
        dimension: "C-137",
        estado: "Muerto",
    },
    {
        id:3,
        nombre: "Rick Sanckez",
        dimension: "C-137",
        estado: "Desconocido"
        
    }
]

const formulario = document.getElementById("formulario")
const nombre = document.getElementById("nombre")
const dimension = document.getElementById("dimension")
const estado = document.getElementById("estado")
const guardar = document.getElementById("guardar")
const cancelar = document.getElementById("cancelar")

const cantidad = document.getElementById("cantidad")
const contenedor = document.getElementById("contenedor")

const buildTree = personajes => personajes
    .map(p => [
        document.createElement("div"),
        document.createElement("h3"),
        document.createElement("p"),
        document.createElement("p")
        
])

const addProperties = tree => {
    // tree es un array de arrays: [[div, h3, p, p], [div, h3, p, p], ...]
    const fragment = document.createDocumentFragment();

    tree.forEach(([div, h3, pDimension, pEstado], index) => {
        const personaje = personajes[index];

        // Asignar clases
        div.classList.add("card", "personaje");
        h3.classList.add("nombre");
        pDimension.classList.add("dimension");
        pEstado.classList.add("estado");

        // Modificar contenido
        h3.textContent = personaje.nombre;
        pDimension.textContent = `Dimensión: ${personaje.dimension}`;
        pEstado.textContent = `Estado: ${personaje.estado}`;

        // También puedes usar className (sobrescribe)
        // div.className = "card personaje";

        // Armar el árbol
        div.appendChild(h3);
        div.appendChild(pDimension);
        div.appendChild(pEstado);

        fragment.appendChild(div);
    });

    return fragment;
};
const tree = buildTree(personajes);
const fragment = addProperties(tree);
contenedor.appendChild(fragment);