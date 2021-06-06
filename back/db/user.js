const { Schema, model } = require('mongoose');

//TODO ROLE!

const schema = new Schema({
  name: {type: String, min: 2},
  phone: {type: String, unique: true, min: 10, required: true},
  hash: {type: String, min: 6},
  verifyID: {type: String, default: null},
  createdDate: {type: Date, default: Date.now()}
});

schema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
      delete ret._id;
      delete ret.hash;
  }
});

module.exports = model('User', schema);

