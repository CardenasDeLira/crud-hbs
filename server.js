const path = require('path')
const hbs = require('express-hbs')
const express = require('express')
const app = express()

const PORT = process.env.PORT || 3000

app.engine('hbs', hbs.express4({
    partialsDir: [`${__dirname}/server/views_hbs/partials`],
    defaultLayout: __dirname + '/server/views_hbs/layouts/index',
    layoutsDir: __dirname + '/server/views_hbs/layouts'
}))


app.set('view engine', 'hbs')
app.set('views', __dirname + '/server/views_hbs')
require('./server/views_hbs/helpers/index')

app.use(express.static(path.join(__dirname, './assets')))

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use(require('./server/routes/index'))

app.listen(PORT, () => {
    console.log('Inicio del servidor')
})