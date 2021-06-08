const { Schema, model } = require('mongoose');

const schema = new Schema({
  rooms: [{type: Schema.Types.ObjectId, autopopulate:true, ref: 'Room'}]
})

schema.plugin(require('mongoose-autopopulate'));

module.exports = model('ChatHistory', schema);

