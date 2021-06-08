const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const deepPopulate = require('mongoose-deep-populate')(mongoose);

const schema = new Schema({
  name: { type: String, required: true },
  nodes: [{type: Schema.Types.ObjectId, default: null, ref: 'Category'}]
})

schema.plugin(deepPopulate);

module.exports = model('Category', schema);

