const { Schema, model } = require('mongoose');

const productsSchema = new Schema({
  name: String,
  typename: { type: Schema.Types.ObjectId, ref: 'Typename'},
  photoUrl: String,
  address: String,
  infoOwner: { type: Schema.Types.ObjectId, ref: 'User' },
  exchange: String, // There should be special type which consists of objectids
  description: String,  
  actual: Boolean,
})

module.exports = model('Products', productsSchema);
