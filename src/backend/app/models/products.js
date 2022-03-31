const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const UserScheme = new mongoose.Schema(
  {
    cod: {
      type: String,
    },
    detail:{
        type: String,
      },
    price: {
        type: Number
      },
    status:{
        type: Boolean,
      },
      customizable:{
        type:Boolean
      }
    
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

UserScheme.plugin(mongoosePaginate);

module.exports = mongoose.model("products", UserScheme);
