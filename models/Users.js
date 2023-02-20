const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String, required: true },
  id: { type: String, required: true },
  notifications: [
    {
      parkId: { type: Number, ref: 'Parks' },
      notification: { type: Boolean },
    },
  ],
  pinnedRides: [
    {
      ride: { type: Number, ref: 'Rides' },
    },
  ],
  phoneNum: { type: String, required: true },
  phoneProvider: { type: String, required: true },
});

module.exports = mongoose.model('Users', UserSchema);
