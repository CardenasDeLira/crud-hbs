const express = require('express')
const router = express.Router()
const db = require('../db/db')

router.post('/rt_nuevo_articulo', (req, res) => {
    console.log('Entro', req.body)
    res.json(req.body.nombre)
})

router.delete('/', (req, res) => {
    //const id = req.params.elim
    console.log('Hey boss')
    /*db.test.eliminarProductos(id).then(() => {
        res.redirect('/')
    }).catch((err) => {S
        console.log(err)
    })*/
})

router.post('/', (req, res) => {
    let valores = req.body
    console.log(valores)
    db.test.addProducto(valores).then(() => {
        res.redirect('/')  
    }).catch((err) => {
        console.log(err)
    })
})

router.post('/edit', (req, res) => {
    let valores = req.body
    console.log(valores)
    db.test.editarProducto(valores).then(() => {
        res.redirect('/')  
    }).catch((err) => {
        console.log(err)
    })
}) 

router.post('/eliminar', (req, res) => {
    let id = req.body.id
    db.test.eliminarProducto(id).then(() => {
        res.redirect('/') 
    }).catch((err) => {
        console.log(err)
    })
})

module.exports = router
