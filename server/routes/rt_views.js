const express = require('express')
const router = express.Router()
const db = require('../db/db')

router.get('/', (req, res) => {
    db.test.obtenerProductos().then((consulta) => {
        res.render('index', consulta)
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