const { Schema } = require("mongoose");

const ModelSchema = new Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  description: String,
});
