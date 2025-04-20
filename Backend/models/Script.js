const mongoose = require('mongoose');

const scriptSchema = new mongoose.Schema({
  title: String,
  content: String,
  category: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Script', scriptSchema);
