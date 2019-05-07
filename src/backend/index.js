const express = require('express')
const path = require('path')
const app = express()
const puerto = 8888

app.get('/', (_, res) => res.sendFile(path.join(__dirname, '../../dist/index.html')))
app.get('/horario', (_, res) => res.sendFile(path.join(__dirname, '../../dist/horario.html')))
app.get('/editar', (_, res) => res.sendFile(path.join(__dirname, '../../dist/editar.html')))

const buscarUsuario = nombre => {
  if (nombre.startsWith('O'))
    return [{ id: 1, nombre: 'Omar Cortés Ortega' }]
  else
    return []
}

app.get('/v1/buscar', (req, res) => {
  if (req.query.nombre)
    res.send(buscarUsuario(req.query.nombre))
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

const obtenerProfesorConId = id => {
  return { 
    id: 3, 
    nombre: 'Omar Cortés Ortega',
    correo: 'omcort@outlook.com',
    telefono: '222 834 2321',
    horario: [
      { dia: 1, inicio: 8, fin: 9, nombre: 'Estructuras de datos' },
      { dia: 2, inicio: 9, fin: 11, nombre: 'Estructuras de datos' },
      { dia: 4, inicio: 9, fin: 11, nombre: 'Estructuras de datos' },
      { dia: 1, inicio: 7, fin: 8, nombre: 'Calculo' },
      { dia: 3, inicio: 7, fin: 9, nombre: 'Calculo' },
      { dia: 5, inicio: 7, fin: 9, nombre: 'Calculo' },
      { dia: 1, inicio: 11, fin: 13, nombre: 'Ecuaciones diferenciales' },
      { dia: 2, inicio: 11, fin: 12, nombre: 'Fundamentos de los lenguajes' },
    ]
  }
}

app.get('/v1/profesor', (req, res) => {
  if (req.query.id) {
    const profesor = obtenerProfesorConId(req.query.id)

    if (profesor) {
      res.send(profesor)
    } else {
      res.send('Profesor no encontrado.')
    }
  } else {
    res.send('No se proporcionó un identificador de búsqueda.')
  }
})

app.use(express.static('dist'))
app.use(express.static('static'))


app.listen(puerto, () => console.log('Servidor iniciado.'))