const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const UserScheme = new mongoose.Schema(
  {
    num_cant: {
      type: Number
    },
    date: {
      type: Date
    },
    total: {
      type: Number
    },
    pay: {
      type: Number
    },
    turned: {
      type: Number
    },
    telephone: {
      type: String,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

UserScheme.plugin(mongoosePaginate);

module.exports = mongoose.model("history", UserScheme);
