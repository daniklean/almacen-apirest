let express = require('express')
let mongoose = require('mongoose')
let dotenv = require('dotenv')
let cors = require('cors')
let { dbConnect }  = require('./config/mongoconect')
dotenv.config()

let app = express()

//Configuración del Puerto
app.set("port", process.env.PORT || 5000)

//Middlewares
app.use(express.json())
app.use(cors())

//Routes 

app.use('/almacen', require('./app/routes'))

dbConnect()
//Escuchando el servidor en el puerto + la Ruta directa + color de identificación 
app.listen(app.get("port"), () =>
  console.log(`Run server in http://127.0.0.1:${app.get("port")}`))