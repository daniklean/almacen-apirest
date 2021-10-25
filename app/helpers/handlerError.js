let httpError = (res,err) => {
    res.status(400).json({Tracker:'Peticion no procesada'})
}
module.exports = { httpError }