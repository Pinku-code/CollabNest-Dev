// controllers/collabController.js
const Collab = require("../models/Collab");

exports.getCollabs = async (req, res) => {
    // console.log("get collab API hit...");
  const collabs = await Collab.find({ creatorId: req.user._id });
  res.json(collabs);
};

exports.createCollab = async (req, res) => {
  const newCollab = new Collab({ ...req.body, creatorId: req.user._id });
  const saved = await newCollab.save();
  res.status(201).json(saved);
};

exports.updateCollab = async (req, res) => {
  const updated = await Collab.findOneAndUpdate(
    { _id: req.params.id, creatorId: req.user._id },
    req.body,
    { new: true }
  );
  res.json(updated);
};

exports.deleteCollab = async (req, res) => {
  await Collab.findOneAndDelete({ _id: req.params.id, creatorId: req.user._id });
  res.status(204).send();
};
