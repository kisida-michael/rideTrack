const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const parkSchema = new Schema({
  name: { type: String, required: true },
  lands: [{ type: Schema.Types.ObjectId, ref: 'Lands' }],
  rides: [{ type: Schema.Types.ObjectId, ref: 'Rides' }],
  id: { type: Number, required: true },
});

const Parks = mongoose.model('Parks', parkSchema);
module.exports = Parks;
