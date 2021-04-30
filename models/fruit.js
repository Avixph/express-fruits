const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Fruit = new Schema(
  {
    name: { type: String, required: true },
    imgUrl: { type: String, required: true },
  },
  { timestamps: true }
);
module.exports = mongoose.model("fruits", Fruit);
