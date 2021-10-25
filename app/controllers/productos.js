let { httpError } = require('../helpers/handlerError')
let ProductosModel = require('../models/productos')

let listarProductos = async (req,res) => {
    try {
        const listarTodos = await ProductosModel.find({})
        if(listarTodos.length === 0){
            return res.status(404).json({Tracker: "Esta vacio el almacen"})
        }
        res.status(200).json({TotalProductos: listarTodos.length, Productos: listarTodos})
    } catch (e) {
        httpError(res,e)
    }
}

let listarProducto = async (req,res) => {
 try {
	const id = req.params.id
    const listarPorId = await ProductosModel.findOne({"_id":id})
       res.status(200).json({ProductoSolicitado: listarPorId})
    } catch (e) {
        httpError(res,e)
    }
}

let crearProducto = async (req,res)  => {
    try {
        const { 
            procesador,
            placaMadre, 
            memoriaRam, 
            discoDuro,
            tarjetaVideo,
            caracteristicas,
            marca,
            precio
        } = req.body

        const agregarProducto = await ProductosModel.create({
            procesador,
            placaMadre, 
            memoriaRam, 
            discoDuro,
            tarjetaVideo,
            caracteristicas,
            marca,
            precio
        })
        res.status(200).json({ ProductoCreado: agregarProducto})
    } catch (e) {
        httpError(res,e)
    }
}

let actualizarProducto = async (req,res) => {
    try {
        const id = req.params.id    
        const updateId = await ProductosModel.updateOne({"_id":id},
        req.body)
        res.status(200).json({ProductoActualizado: updateId })
    } catch (e) {
        httpError(res,e)
    }
}

let borrarProducto = async (req,res) => {
    try {
        const id = req.params.id
        const deleteItem = await ProductosModel.deleteOne({"_id": id})
        res.status(200).json({ProductoEliminado: deleteItem})
    } catch (e) {
        httpError(res,e)

    }
}

module.exports = {
    listarProducto, 
    listarProductos, 
    crearProducto,
    actualizarProducto, 
    borrarProducto}