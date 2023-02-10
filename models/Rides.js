const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RidesSchema = new Schema({
  rideId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  type: { type: String },
  waitTime: { type: Number, required: true },
  isOpen: { type: Boolean, required: true },
  land: { type: String, ref: 'Lands' },
  park: { type: String, ref: 'Parks' },
});

const Ride = mongoose.model('Ride', RidesSchema);

module.exports = Ride;
