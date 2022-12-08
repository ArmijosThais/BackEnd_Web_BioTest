const express = require('express')
const cors = require('cors')
const conectarDB = require('./config/db')

//crear el servidor
const app = express()

//conexion a la base de datos
conectarDB()
app.use(express.json())
app.use(cors())

app.get('/', (req,res) => {
    res.send('hola mundo :3')
})

app.use('/api/pacientes/', require('./routes/PatientRoute'))

//permite al servidor escuchar en un puerto especifico para levantarse
app.listen(4500, ()=>{
    console.log('El servidor se esta ejecutando')
})

//lanzar el servidor(dev esta en el package): npm run dev