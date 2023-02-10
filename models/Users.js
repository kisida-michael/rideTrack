const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String, required: true },
  id: { type: String, required: true },
  notifications: [
    {
      parkName: { type: String },
      notification: { type: Boolean },
    },
  ],
  favorites: [
    {
      parkName: { type: String },
      ride: { type: Schema.Types.ObjectId, ref: 'Rides' },
    },
  ],
  phoneNum: { type: String, required: true },
  phoneProvider: { type: String, required: true },
});

module.exports = mongoose.model('Users', UserSchema);
