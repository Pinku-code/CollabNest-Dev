const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String },
  provider: { type: String, enum: ["local", "google"], default: "local" },
  googleId: { type: String },
  avatar: { type: String },

  // 🔥 Dashboard stats
  postsCount: { type: Number, default: 0 },
  followers: { type: Number, default: 0 },
  following: { type: Number, default: 0 },
  totalcollabs: { type: Number, default: 10 },
  pending: { type: Number, default: 0 },
  earnings: { type: String, default: "₹0.00" },

  // 🧠 Profile info
  handle: { type: String, unique: true, sparse: true,default:"YouTube" },
  bio: { type: String, default: "" },
  engagementRate: { type: Number, default: 0 }, // % (calculated via analytics later)
  niches: {
    type: [String],
    default: ["Vlogs", "Tech", "Fitness"]
  },  
  mediaKitUrl: { type: String, default: "" }, // URL to PDF or hosted page
}, 
{ timestamps: true, minimize: false });

module.exports = mongoose.model('User', userSchema);
