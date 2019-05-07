const express = require('express')
const path = require('path')
const app = express()
const puerto = 8888

app.get('/', (_, res) => res.sendFile(path.join(__dirname, '../../dist/index.html')))
app.get('/horario', (_, res) => res.sendFile(path.join(__dirname, '../../dist/horario.html')))

app.get('/v1/buscar', (req, res) => {
  if (req.query.nombre.startsWith('O'))
    res.send([{ id: 1, nombre: 'Omar Cortés Ortega' }])
  else
    res.send([])
})

const tokens = []
const validarUsuario = (usuario, clave) => {
  return usuario.startsWith('Om') && clave.length > 0
}

app.get('/v1/autenticar', (req, res) => {
  if (req.query.usuario && req.query.clave) {
    if (validarUsuario(req.query.usuario, req.query.clave)) {
      const token = Math.floor(Math.random() * 10000)
      tokens.push({ usuario: req.query.usuario, token })
  
      res.send({ valido: true, token })      
    } else {
      res.send({ valido: false, error: 'Nombre de usuario o contraseña incorrectos' })
    }
  } else {
    res.send({ valido: false, error: 'No se proporcionaron todos los datos' })
  }
})

app.use(express.static('dist'))
app.use(express.static('static'))


app.listen(puerto, () => console.log('Servidor iniciado.'))