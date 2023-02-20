const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RidesSchema = new Schema({
  rideId: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  type: { type: String },
  waitTime: { type: Number, required: true },
  lastUpdated: { type: Date, required: true },
  isOpen: { type: Boolean, required: true },
  park: { type: Number, required: true },
});

const Ride = mongoose.model('Ride', RidesSchema);

module.exports = Ride;
