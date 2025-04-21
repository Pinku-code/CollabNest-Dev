const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String },
     // Optional, in case user registers with password
     provider: { type: String, enum: ["local", "google"], default: "local" },
    googleId: {type: String},
    avatar: {type: String},

  // 🔥 Dashboard-specific fields
  postsCount: { type: Number, default: 0 },
  followers: { type: Number, default: 0 },
  following: { type: Number, default: 0 },
  totalcollabs: { type: Number, default: 10 },
  pending: { type: Number, default: 0 },
  earnings: { type: String, default: "₹0.00" }, // You can use Number if calculations are needed

}, { timestamps: true,minimize: false });

module.exports = mongoose.model('User', userSchema);
