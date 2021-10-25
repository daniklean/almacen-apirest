let httpError = (res,err) => {
    res.status(500)
    res.json({ERROR:'Lo siento, no puedo resolver esto'})
    console.log(err)
}
 
module.exports = { httpError }