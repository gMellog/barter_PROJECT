const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const schema = new Schema({
  name: { type: String, unique: true, required: true },
})

schema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
      delete ret._id;
  }
});
module.exports = model('Tag', schema);
