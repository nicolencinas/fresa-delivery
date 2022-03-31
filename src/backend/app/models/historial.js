const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2');


const UserScheme = new mongoose.Schema(
    {
       id:{type:Number},
       date:{type:Date},
       telephone:{type:String},
       total:{type:Number},
       pay:{type:Number},
       turned:{type:Number}


    },
    {
        versionKey: false,
        timestamps: true
    }
)

UserScheme.plugin(mongoosePaginate)

module.exports = mongoose.model('Model', UserScheme,'historial')