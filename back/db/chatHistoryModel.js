const { Schema, model } = require('mongoose');

const schema = new Schema({
  rooms: [{type: Schema.Types.ObjectId, ref: 'Room'}]
})

module.exports = model('ChatHistory', schema);

