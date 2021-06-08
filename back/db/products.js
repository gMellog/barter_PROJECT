const { Schema, model } = require('mongoose');

const productsSchema = new Schema({
  name: String,
  photoUrl: Array,
  address: String,
  infoOwner: { type: Schema.Types.ObjectId, ref: 'User' },
  exchange: String, // There should be special type which consists of objectids
  description: String,  
  actual: Boolean,
  createdAt: {type: Date, default: Date.now},
  categories: { type: Schema.Types.ObjectId, ref: 'Categories' }
})

module.exports = model('Products', productsSchema);
