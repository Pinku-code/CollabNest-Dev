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
    // console.log("Api HIT ipdateProfile...");
    try {
      const allowedFields = ['fullName', 'bio', 'handle', 'niches', 'mediaKitUrl', 'avatar'];
      const updateFields = {};
  
      allowedFields.forEach((field) => {
        if (req.body[field] !== undefined) {
          if (field === 'niches' && typeof req.body[field] === 'string') {
            // Convert comma-separated string to array
            updateFields[field] = req.body[field].split(',').map(n => n.trim());
          } else {
            updateFields[field] = req.body[field];
          }
        }
      });
//   console.log(User.data);
      const updatedUser = await User.findByIdAndUpdate(
        req.user.userId,
        { $set: updateFields },
        { new: true, runValidators: true }
      ).select('-password');
    //   console.log(updatedUser);
      res.json(updatedUser);
    } catch (err) {
      console.error('Update Profile Error:', err);
      res.status(500).json({ message: 'Server error' });
    }
  };
  

module.exports = { getProfile, updateProfile };
