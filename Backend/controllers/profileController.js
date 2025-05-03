// controllers/profile.controller.js
const User = require('../models/User');

// GET /api/profile/me
const getProfile = async (req, res) => {
  try {
    // console.log("getProfile API hit...");
    // console.log(req.user.userId);
    const user = await User.findById(req.user.userId).select('-password');
    // console.log(user);
    if (!user){
        // console.log("User Not found");
        return res.status(404).json({ message: 'User not found' });
        
    } 

    

    res.json(user);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// PUT /api/profile/me
const updateProfile = async (req, res) => {
  try {
    const updateFields = {
      fullName: req.body.fullName,
      bio: req.body.bio,
      handle: req.body.handle,
      niches: req.body.niches,
      mediaKitUrl: req.body.mediaKitUrl,
      avatar: req.body.avatar,
    };

    const updatedUser = await User.findByIdAndUpdate(
      req.user.id,
      { $set: updateFields },
      { new: true, runValidators: true }
    ).select('-password');

    res.json(updatedUser);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { getProfile, updateProfile };
