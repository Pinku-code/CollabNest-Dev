// models/Video.js
const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({
  creatorId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  title: { type: String, required: true },
  views: { type: Number, default: 0 },
  likes: { type: Number, default: 0 },
  comments: { type: Number, default: 0 },
  isTrending: { type: Boolean, default: false },
  collabPotential: { type: String, enum: ["low", "medium", "high"], default: "low" },
  thumbnailUrl: { type: String },
  uploadDate: { type: Date, required: true },
}, { timestamps: true });

module.exports = mongoose.model("Video", videoSchema);
