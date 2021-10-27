const $editarNombre = document.querySelector('.editNombre')
        const $editarMarca = document.querySelector('.editMarca')
        const $editarPrecio = document.querySelector('.editPrecio')
        const $editarUnidad = document.querySelector('.editUnidad')
        const $editarExistencia = document.querySelector('.editExistencia')

        let dato = 1
        const $boton = document.querySelectorAll('.btnEditar')
        const $idFila = document.querySelector('.idFila')
        for (let i = 0; i < $boton.length; i++) {
            $boton[i].addEventListener('click', () => {
                $idFila.value = $boton[i].value
                console.log($idFila.value)
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
                    document.getElementById('container').innerHTML = data.html
                })
                .catch(function (error) {
                    console.log('Hubo un error ' + error.message)
                })
        }