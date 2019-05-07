const express = require('express')
const path = require('path')
const app = express()
const puerto = 8888

app.use(express.static('dist'))
app.use(express.static('static'))

app.get('/', (_, res) => res.sendFile(path.join(__dirname, 'dist/index.html')))

app.listen(puerto, () => console.log('Servidor iniciado.'))