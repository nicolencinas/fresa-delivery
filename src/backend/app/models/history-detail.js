const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2');


const UserScheme = new mongoose.Schema(
    {
       id:{type:Number},
       telephone:{type:String},
       date:{type:Date},
       order:{type:Number},
       cod:{type:String},
       item:{type:String},
       import:{type:Number}


    },
    {
        versionKey: false,
        timestamps: true
    }
)

UserScheme.plugin(mongoosePaginate)

module.exports = mongoose.model("history-details", UserScheme);