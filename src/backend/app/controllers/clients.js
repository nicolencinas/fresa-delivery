const model = require('../models/clients')

const options = {
    page: 1,
    limit: 1000000
};

const parseId = (id) => {
    return mongoose.Types.ObjectId(id)
}
/**
 * Obtener DATA de USUARIOS
 */

exports.getData = (req, res) => {
    model.paginate({}, options, (err, docs) => {
        res.send({
            docs
        })
    })
}

/**
 * Obtener DATA de USUARIOS
 */

exports.getSingle = (req, res) => {
    model.findOne({ telephone:req.params.telephone},
        (err, docs) => {
            res.send({
               docs
            })
        })
}

/**
 * Obtener DATA de USUARIOS
 */

exports.updateSingle = (req, res) => {
    const { id } = req.params
    const body = req.body
    model.updateOne(
        { _id: parseId(id) },
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
    model.create(data, (err, docs) => {
        if (err) {
            res.status(422.).send({ error: 'Error' })
        } else {
            res.send({ data: docs })
        }

    })
}

/**
 * Obtener DATA de USUARIOS
 */

exports.deleteSingle = (req, res) => {
    const { id } = req.params
    model.deleteOne(
        { _id: parseId(id) },
        (err, docs) => {
            res.send({
                items: docs
            })
        })
}