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
        console.log(`Rutas Dimamicas, usar ==> ${archivoSinExtension} en la Url del localhost:3000/almacen` )
    }
})

router.get('*', (req,res) => {
    res.status(404).res.json({ErrorRutas: 'No se consigue la ruta especificada'})
})

module.exports = router