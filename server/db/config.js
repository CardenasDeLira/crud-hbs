const sql = require('mssql')
const sql_config = {
    user: 'sa',
    password: 'fahxFE3nLf',
    database: 'CRUD',
    server: 'localhost',
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    },
    options: {
        encrypt: true,
        trustServerCertificate: true
    }
}

let sql_conn = new sql.ConnectionPool(sql_config, (err) => {
    let date = new Date()
    if (err) {
        console.log('No se pudo conectar a la BD, reintentando...', date);
        connectSQL();
    } else {
        console.log('Conectado a la BD', date);
    }
})

let connectSQL = () => {
    sql_conn.connect()
        .then(() => {
            console.log('Conectado a la BD');
        })
        .catch((err) => {
            if (err) {
                let date = new Date()
                console.log('No se pudo conectar a la BD, reintentando...', date);
                setTimeout(() => {
                    connectSQL();
                }, 2500)
            }
        })
}

module.exports = {sql_conn}