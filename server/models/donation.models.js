const mongoose = require('mongoose');

const DonationSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  location: { type: String, required: true },
  status: { type: String, enum: ['Completed', 'Pending', 'Cancelled'], required: true }
});

module.exports = mongoose.model('Donation', DonationSchema);
