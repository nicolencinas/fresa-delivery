const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2');


const UserScheme = new mongoose.Schema(
    {
        cod:{
            type:String
        },
        description:{
            type:String
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
)

UserScheme.plugin(mongoosePaginate)

module.exports = mongoose.model('flavours', UserScheme)