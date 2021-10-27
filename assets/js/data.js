let dato = 1

//Editar 
const $editarNombre = document.querySelector('.editNombre')
const $editarMarca = document.querySelector('.editMarca')
const $editarPrecio = document.querySelector('.editPrecio')
const $editarUnidad = document.querySelector('.editUnidad')
const $editarExistencia = document.querySelector('.editExistencia')

//Agregar
const $addNombre = document.querySelector('.addNombre')
const $addMarca = document.querySelector('.addMarca')
const $addPrecio = document.querySelector('.addPrecio')
const $addUnidad = document.querySelector('.addUnidad')
const $addExistencia = document.querySelector('.addExistencia')

//Proceso para editar
const $botonEditar = document.querySelectorAll('.btnEditar')
const $idFila = document.querySelector('.idFila')
for (let i = 0; i < $botonEditar.length; i++) {
    $botonEditar[i].addEventListener('click', () => {
        //$idFila.value = $botonEditar[i].value
        console.log($botonEditar[i].value)
    })
}

//Funciones
function addDato() {
    fetch('/rt_articulos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nombre: $addNombre.value,
            marca: $addMarca.value,
            precio: $addPrecio.value,
            unidad: $addUnidad.value,
            existencia: $addExistencia.value
        })
    })
        .then(response => response.json())
        .then(data => {
            document.getElementById('contenedor').innerHTML = data.html
        })
        .catch(function (error) {
            console.log('Hubo un error ' + error.message)
        })
}

function editarDatos(event) {
    fetch('/rt_articulos', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: $idFila.value,
            nombre: $editarNombre.value,
            marca: $editarMarca.value,
            precio: $editarPrecio.value,
            unidad: $editarUnidad.value,
            existencia: $editarExistencia.value
        })
    })
        .then(response => response.json())
        .then(data => {
            document.getElementById('contenedor').innerHTML = data.html
        })
        .catch(function (error) {
            console.log('Hubo un error ' + error.message)
        })
}

function eliminarDato(dato) {
    fetch('/rt_articulos', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: dato
        })
    })
        .then(response => response.json())
        .then(data => {
            document.getElementById('contenedor').innerHTML = data.html
        })
        .catch(function (error) {
            console.log('Hubo un error ' + error.message)
        })
}