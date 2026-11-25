let pacientes = [
    { id: 1, nombre: 'Luna', especie: 'Gato', estado: 'En espera' },
    { id: 2, nombre: 'Max', especie: 'Perro', estado: 'En atención' },
    { id: 3, nombre: 'Nube', especie: 'Conejo', estado: 'Alta' }
];

let siguienteId = 4;
let pacienteEnEdicion = null;

const formulario = document.getElementById('formulario');
const tituloFormulario = document.getElementById('tituloFormulario');
const nombre = document.getElementById('nombre');
const especie = document.getElementById('especie');
const estado = document.getElementById('estado');
const guardar = document.getElementById('guardar');
const cancelar = document.getElementById('cancelar');
const cantidad = document.getElementById('cantidad');
const contenedor = document.getElementById('contenedor');

function renderizarPacientes() {
    const fragmento = document.createDocumentFragment();

    pacientes.forEach(paciente => {
        const tarjeta = document.createElement('article');
        const titulo = document.createElement('h3');
        const datoEspecie = document.createElement('p');
        const datoEstado = document.createElement('p');
        const acciones = document.createElement('div');
        const botonEditar = document.createElement('button');
        const botonEliminar = document.createElement('button');

        tarjeta.classList.add('tarjeta');
        tarjeta.dataset.id = paciente.id;
        titulo.textContent = paciente.nombre;
        datoEspecie.textContent = `Especie: ${paciente.especie}`;
        datoEstado.textContent = `Estado: ${paciente.estado}`;
        acciones.classList.add('acciones-tarjeta');

        botonEditar.type = 'button';
        botonEditar.textContent = 'Editar';
        botonEditar.dataset.accion = 'editar';

        botonEliminar.type = 'button';
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.classList.add('boton-eliminar');
        botonEliminar.dataset.accion = 'eliminar';

        acciones.append(botonEditar, botonEliminar);
        tarjeta.append(titulo, datoEspecie, datoEstado, acciones);
        fragmento.appendChild(tarjeta);
    });

    contenedor.replaceChildren(fragmento);
    cantidad.textContent = `Cantidad de pacientes: ${pacientes.length}`;
}

function limpiarFormulario() {
    formulario.reset();
    pacienteEnEdicion = null;
    tituloFormulario.textContent = 'Registrar paciente';
    guardar.textContent = 'Agregar paciente';
    cancelar.hidden = true;
}

formulario.addEventListener('submit', evento => {
    evento.preventDefault();

    const datosPaciente = {
        nombre: nombre.value.trim(),
        especie: especie.value,
        estado: estado.value
    };

    if (!datosPaciente.nombre) {
        nombre.focus();
        return;
    }

    if (pacienteEnEdicion === null) {
        pacientes.push({ id: siguienteId++, ...datosPaciente });
    } else {
        const paciente = pacientes.find(item => item.id === pacienteEnEdicion);
        Object.assign(paciente, datosPaciente);
    }

    limpiarFormulario();
    renderizarPacientes();
});

contenedor.addEventListener('click', evento => {
    const boton = evento.target.closest('button[data-accion]');
    if (!boton) return;

    const tarjeta = boton.closest('.tarjeta');
    const id = Number(tarjeta.dataset.id);

    if (boton.dataset.accion === 'editar') {
        const paciente = pacientes.find(item => item.id === id);
        nombre.value = paciente.nombre;
        especie.value = paciente.especie;
        estado.value = paciente.estado;
        pacienteEnEdicion = id;
        tituloFormulario.textContent = 'Editar paciente';
        guardar.textContent = 'Guardar cambios';
        cancelar.hidden = false;
        nombre.focus();
    } else if (boton.dataset.accion === 'eliminar') {
        pacientes = pacientes.filter(item => item.id !== id);
        if (pacienteEnEdicion === id) limpiarFormulario();
        renderizarPacientes();
    }
});

cancelar.addEventListener('click', limpiarFormulario);

renderizarPacientes();
