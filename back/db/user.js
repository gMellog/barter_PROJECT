const { Schema, model } = require('mongoose');

//TODO ROLE!

const schema = new Schema({
  name: {type: String, min: 2},
  avatar: {type: String, default: null},
  description: {type: String, default: null},
  phone: {type: String, unique: true, min: 10, required: true},
  hash: {type: String, min: 6},
  verifyID: {type: String, default: null},
  socketID: {type: String, default: null},
  roomID: {type:String, default: null},
  chatHistory: {type: Schema.Types.ObjectId, autopopulate: true, ref: 'ChatHistory'},
  createdDate: {type: Date, default: Date.now()}
});

schema.plugin(require('mongoose-autopopulate'));

schema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
      delete ret._id;
      delete ret.hash;
  }
});

module.exports = model('User', schema);

