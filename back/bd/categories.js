const { Schema, model } = require('mongoose');

const categoriesSchema = new Schema({
  name: String,
  photoUrl: String,
  address: String,
  infoOwner: String,
  exchange: String,
  description: String,
  actual: Boolean,
  createdAt: {type: Date, default: Date.now},
  categories: { type: Schema.Types.ObjectId, ref: 'Categories' }
})

const Categories = model('Categories', categoriesSchema);
module.exports = Categories
