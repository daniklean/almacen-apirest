let express = require('express')
let router = express.Router()
let fs = require('fs')

const pathRouter = `${__dirname}`

const removerExtension = (filename) => {
    return filename.split('.').shift()
}

fs.readdirSync(pathRouter).filter((file) => {
    const archivoSinExtension = removerExtension(file)
    const saltar = ['index'].includes(archivoSinExtension )
    if(!saltar){
        router.use(`/${archivoSinExtension }`, require(`./${archivoSinExtension }`))
        console.log(`Rutas dimamicas usar directamente, ==> http://127.0.0.1:3000/almacen/${archivoSinExtension}`)
    }
})

router.get('*', (req,res) => {
    res.status(404).res.json({ErrorRutas: 'No se consigue la ruta especificada'})
})

module.exports = router