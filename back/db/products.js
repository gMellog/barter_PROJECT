const { Schema, model } = require('mongoose');

const productsSchema = new Schema({
  name: String,
  photoUrl: String,
  address: String,
  infoOwner: String,
  exchange: String,
  description: String,
  actual: Boolean,
})

const Products = model('Products', productsSchema);
module.exports = Products
