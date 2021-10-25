const express = require('express')
const { checkAdmin } = require('../middlewares/admin')
const router = express.Router()
const {
    listarProducto,
    listarProductos,
    crearProducto,
    actualizarProducto,
    borrarProducto} = require('../controllers/productos')

router.get('/', checkAdmin, listarProductos)

router.post('/', checkAdmin, crearProducto)

router.get('/:id', checkAdmin, listarProducto)

router.put('/:id', checkAdmin, actualizarProducto)

router.delete('/:id', checkAdmin, borrarProducto)

module.exports = router