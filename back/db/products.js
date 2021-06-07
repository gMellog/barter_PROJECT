const { Schema, model } = require('mongoose');

const productsSchema = new Schema({
  name: String,
  photoUrl: Array,
  address: String,
  infoOwner: String,
  exchange: String,
  description: String,
  actual: Boolean,
  createdAt: {type: Date, default: Date.now},
  categories: { type: Schema.Types.ObjectId, ref: 'Categories' }
})

const Products = model('Products', productsSchema);
module.exports = Products
