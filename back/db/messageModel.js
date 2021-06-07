const { Schema, model } = require('mongoose');

const schema = new Schema({
  ownerName: {type: String, required: true, min: 1},
  message: { type: String, required: true, min: 3}
})

schema.set('toJSON', {
  versionKey: false,
  transform: function (doc, ret) {
      delete ret._id;
  }
});


module.exports = model('Message', schema);

