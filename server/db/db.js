const sql = require('mssql')
const { sql_conn } = require('./config')


const capitalizar = (palabra) => {
    palabra = palabra.toLowerCase()
    return palabra.charAt(0).toUpperCase() + palabra.slice(1);
}

const test = {
    obtenerProductos: async () => {
        try {
            let resultado = await sql_conn.request().query(`SELECT * FROM PRODUCTOS WHERE ESTATUS = 1 ORDER BY ID DESC`)
            const param = {}
            param.values = resultado.recordset.map(datos => {
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
            return (param)
        } catch (error) {
            throw error
        }
    },
    eliminarProducto: async (id) => {
        try {
            await sql_conn.request()
                .query(`UPDATE PRODUCTOS SET ESTATUS=0 WHERE ID=${id}`)
        } catch (error) {
            throw error
        }
    },
    addProducto: async (valores) => {
        let { nombre, marca, precio, unidad, existencia } = valores
        try {
            await sql_conn.request()
                //.query(`INSERT INTO PRODUCTOS (NOMBRE, PRECIO) VALUES ('${nombre.toUpperCase()}', ${precio})`)
                .query(`INSERT INTO PRODUCTOS (NOMBRE, MARCA, PRECIO, UNIDAD, EXISTENCIA, ESTATUS) VALUES ('${nombre.toUpperCase()}'
                , '${marca.toUpperCase()}', ${precio}, '${unidad.toUpperCase()}', ${existencia}, 1)`)
        } catch (error) {
            throw error
        }
    },
    editarProducto: async (valores) => {
        let { id, nombre, marca, precio, unidad, existencia } = valores
        try {
            await sql_conn.request()
                .query(`UPDATE PRODUCTOS SET NOMBRE = '${nombre.toUpperCase()}', 
                MARCA = '${marca.toUpperCase()}', PRECIO = ${precio}, 
                UNIDAD = '${unidad.toUpperCase()}', EXISTENCIA = ${existencia} 
                WHERE ID = ${id}`)
        } catch (error) {
            throw error
        }
    }
}

module.exports = {
    test
}