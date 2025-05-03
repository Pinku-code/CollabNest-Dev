// controllers/videoController.js
const Video = require("../models/Video");

exports.getVideos = async (req, res) => {
    // console.log("get video API hit...");
  const videos = await Video.find({ creatorId: req.user._id });
  res.json(videos);
};

exports.createVideo = async (req, res) => {
  const video = new Video({ ...req.body, creatorId: req.user._id });
  const saved = await video.save();
  res.status(201).json(saved);
};

exports.updateVideo = async (req, res) => {
  const updated = await Video.findOneAndUpdate(
    { _id: req.params.id, creatorId: req.user._id },
    req.body,
    { new: true }
  );
  res.json(updated);
};

exports.deleteVideo = async (req, res) => {
  await Video.findOneAndDelete({ _id: req.params.id, creatorId: req.user._id });
  res.status(204).send();
};
