const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const participantSchema = new Schema({
    userID: { type: Schema.Types.ObjectId, required: true },
    productID: { type: Schema.Types.ObjectId, required: true, autopopulate: true, ref: 'Products' },
    ready: { type: Boolean, default: false }
});

const schema = new Schema({
    participants: [participantSchema]
})

schema.plugin(require('mongoose-autopopulate'));

const Deal = model('Deal', schema);

module.exports = Deal;

