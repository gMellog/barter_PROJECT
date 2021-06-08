const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const participantSchema = new Schema({
    userID: { type: Schema.Types.ObjectId, required: true, autopopulate: true, ref: 'User'},
    productID: { type: Schema.Types.ObjectId, required: true, autopopulate: true, ref: 'Products' },
    ready: { type: Boolean, default: false }
});

const schema = new Schema({
    participants: [participantSchema]
})

schema.plugin(require('mongoose-autopopulate'));

schema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
    }
  });

const Deal = model('Deal', schema);

module.exports = Deal;

