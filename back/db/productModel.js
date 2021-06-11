const { Schema, model } = require("mongoose");

const schema = new Schema({
  name: String,
  photoUrl: Array,
  address: String,
  infoOwner: { type: Schema.Types.ObjectId, ref: 'User' },
  exchange: [{ type: String }], // There should be special type which consists of objectids
  description: String,  
  actual: Boolean,
  createdAt: { type: Date, default: Date.now },
});

schema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

module.exports = model("Product", schema);
