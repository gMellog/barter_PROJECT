const { Schema, model } = require('mongoose');

const schema = new Schema({
  roomID: {type: String, required: true, unique: true, min: 24},
  messages: [{type: Schema.Types.ObjectId, autopopulate: true, ref: 'Message'}]
})

schema.plugin(require('mongoose-autopopulate'));

const Room = model('Room', schema);

const seed = async () => {
    const room = new Room({ roomID: '60bc7db632db176cd88bbe5f60bc93ce6821c5867bc09875'})
    await room.save();
};

module.exports = {Room, seed}

