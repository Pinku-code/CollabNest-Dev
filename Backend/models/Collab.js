// models/Collab.js
const mongoose = require("mongoose");

const collabSchema = new mongoose.Schema({
  creatorId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  brandName: { type: String, required: true },
  offerAmount: { type: Number, required: true },
  status: { type: String, enum: ["pending", "accepted", "rejected"], default: "pending" },
  dateOffered: { type: Date, required: true },
  deadline: { type: Date },
  notes: { type: String },
}, { timestamps: true });

module.exports = mongoose.model("Collab", collabSchema);
