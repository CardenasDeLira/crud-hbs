let dato = 1
const $boton = document.querySelectorAll('.btnEliminar')
const $idFila = document.querySelector('.idFila')
for (let i = 0; i < $boton.length; i++) {
    $boton[i].addEventListener('click', () => {
        $idFila.value = $boton[i].value
        console.log($idFila.value)
    })
}