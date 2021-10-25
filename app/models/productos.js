let mongoose = require('mongoose')

const ProductoSchema = new mongoose.Schema({
    procesador: {
        type: String
    },
    placaMadre: {
        type: String
    },
    memoriaRam:{
        type: String
    },
    discoDuro: {
        type: String
    },
    tarjetaVideo: {
        type: String
    },
    caracteristicas: {
        type: String
    },
    marca: {
        type: String
    },
    precio: {
        type: Number
    }
},
{ 
    timestamps: true,
    versionKey: false,
}) 
module.exports = mongoose.model('productos', ProductoSchema) 
