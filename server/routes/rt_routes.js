const express = require('express')
const router = express.Router()
const db = require('../db/db')

router.post('/rt_nuevo_articulo', (req, res) => {
    console.log('Entro', req.body)
    res.json(req.body.nombre)
})

router.post('/rt_articulos', async (req, res) => {
    let valores = req.body
    try {
        console.log(valores)
        await db.test.addProducto(valores)
        let params = await db.test.obtenerProductos()
        res.render('partials/articulos', { layout: '', ...params }, (error, html) => {
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
        throw error
    }
})

router.delete('/rt_articulos', async (req, res) => {
    try {
        let id = req.body.id
        await db.test.eliminarProducto(id)
        let params = await db.test.obtenerProductos()
        res.render('partials/articulos', { layout: '', ...params }, (error, html) => {
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
            estado: 0
        })
    }
})

router.put('/rt_articulos', async (req, res) => {
    try {
        let datos = req.body
        await db.test.editarProducto(datos)
        let params = await db.test.obtenerProductos()
        res.render('partials/articulos', { layout: '', ...params }, (error, html) => {
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
