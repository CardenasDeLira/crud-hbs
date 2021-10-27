const express = require('express')
const router = express.Router()
const db = require('../db/db')

router.post('/rt_nuevo_articulo', (req, res) => {
    console.log('Entro', req.body)
    res.json(req.body.nombre)
})

/*
router.delete('/', (req, res) => {
    //const id = req.params.elim
    console.log('Hey boss')
    db.test.eliminarProductos(id).then(() => {
        res.redirect('/')
    }).catch((err) => {S
        console.log(err)
    })
})*/

router.post('/rt_articulos', (req, res) => {
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

router.post('/eliminarDatos', (req, res) => {
    let id = req.body.id
    db.test.eliminarProducto(id).then(() => {
        res.redirect('/')
    }).catch((err) => {
        console.log(err)
    })
})

router.put('/rt_articulos', async (req, res) => {
    try {
        let datos = req.body
        //console.log(datos)
        await db.test.editarProducto(datos)
        let params = await db.test.obtenerProductos()
        //console.log(params)
        /*res.json({
            estado: 1,
            datos: params
        })*/
        res.render('partials/iteradorArticulos', {layout: '', ...params}, (error, html) => {
            if (error) {
                return res.json({
                    estado: 0
                })
            }
            console.log(html)
            res.json({
                estado: 1,
                html
            })
        })
    } catch (error) {
        res.json({
            estado: 0,
        })
    }
})

module.exports = router
