const checkAdmin = (req,res,next) => {
    const adminTokenEasy = req.headers.authorization
    if(adminTokenEasy === '28096755'){
        next()
    }else{
        res.status(409).send({tracker: "No eres el administrador del almacen"})
    }
    
}

module.exports = { checkAdmin }