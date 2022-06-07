const model = require('../models/clients')


/**
 * Obtener DATA de USUARIOS
 */

exports.getData = (req, res) => {
    model.find({}, (err, docs) => {
        res.send(
            docs
         )
    })
}

/**
 * Obtener DATA de USUARIOS
 */

exports.getSingle = (req, res) => {
    model.findOne({ telephone:req.params.telephone},
        (err, docs) => {
            res.send(
               docs
            )
        })
}

/**
 * Obtener DATA de USUARIOS
 */

exports.updateSingle = (req, res) => {
    const { id } = req.params
    const body = req.body
    model.updateOne(
        { telephone: id },
        body,
        (err, docs) => {
            res.send({
                docs
            })
        })
}


/**
 * Insertar DATA de USUARIOS
 */
exports.insertData = (req, res) => {
    const data = req.body
    console.log(data)

    model.create(data, (err, docs) => {
        if (err) {
            res.status(422.).send({ error: 'Error' })
        } else {
            res.send(docs)
        }

    })
}

/**
 * Obtener DATA de USUARIOS
 */

exports.deleteSingle = (req, res) => {
    const { id } = req.params
    model.deleteOne(
        { telephone: id },
        (err, docs) => {
            if (err){
                res.status(422.).send({error:"No se logro crear el cliente solicitado. Reintente nuevamente"})
            }
            res.send({
                result:"Se creo el cliente correctamente"
            })
        })
}