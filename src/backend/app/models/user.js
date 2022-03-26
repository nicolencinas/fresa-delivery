const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const UserScheme = new mongoose.Schema(
  {
    telephone: {
      type: String,
    },
    name: {
      type: String,
    },
    adress: {
      type: String,
    },
    street1: {
      type: String,
    },
    street2: {
      type: String,
    },
    backStreet: {
      type: String,
    },
    cp: {
      type: String,
    },
    locality: {
      type: String,
    },
    delivery: {
        type:Boolean
    },
    buyCant: {
      type: String,
    },
    buyimport: {
      type: String,
    },
    observation: {
      type: String,
    },
    fault: {
      type: String,
    },
    modifyDate: {
      type: String,
    },
    expirationDate: {
      type: String,
    },
    user: {
      type: String,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

UserScheme.plugin(mongoosePaginate);

module.exports = mongoose.model("clients", UserScheme);
