const express = require('express')
const router = express.Router()
const db = require('../db/db')

const capitalizar = (palabra) => {
    palabra = palabra.toLowerCase()
    return palabra.charAt(0).toUpperCase() + palabra.slice(1);
}

router.get('/', (req, res) => {
    db.test.obtenerProductos().then((consulta) => {
        //const param = []
        const param = {}
        param.values = consulta.recordset.map(datos => {
            return {
                id: datos.ID,
                nombre: capitalizar(datos.NOMBRE),
                marca: capitalizar(datos.MARCA),
                precio: datos.PRECIO,
                unidad: datos.UNIDAD,
                existencia: datos.EXISTENCIA,
                estatus: datos.ESTATUS
            }
        })
        res.render('index', param)
        //console.log(consulta)
    }).catch((err) => {
        console.log(err)
    });
})

router.get('/obtenerDatos', (req, res) => {
    db.test.obtenerProductos().then((productos) => {
        res.json(productos.recordset)
    })
})

/*router.put('/', (req, res) => {
    let valores = req.query
    console.log(valores)
})*/

module.exports = router