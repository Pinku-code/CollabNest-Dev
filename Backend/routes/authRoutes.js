const express = require('express');
const router = express.Router();
const { register, login, logout } = require('../controllers/authController');
const { submitContactForm } = require('../controllers/contactController');
const protect = require('../middleware/authMiddleware');
const User = require('../models/User');
require('dotenv').config();

// Public routes
router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);
router.post('/contact', submitContactForm);

// 🔐 Protected Creator Dashboard Route
// inside /routes/authRoutes.js
router.get('/cr_dash', protect, async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).select('-password');
    if (!user) return res.status(404).json({ message: "User not found" });

    
    res.status(200).json({
      message: `Welcome ${user.fullName}!`,
      creatorInfo: {
        name: user.fullName,
        email: user.email,
        niche: user.niche || "Tech & Reviews"
      },
      dashboardStats: {
        posts: user.postsCount || 0,
        followers: user.followers || 0,
        following: user.following || 0,
        earnings: user.earnings || "₹0",
        totalcollabs: user.totalcollabs || 0,
        pending: user.pending || 0
      },
      recentActivity: [
        "Uploaded sponsored video for XYZ Brand",
        "Collaborated with Neha Tech",
        "Script draft saved for ‘Smartwatch Review’"
      ],
      topItems: [
        { title: "How I Earned 50K in 3 Days", views: 38000, sponsors: "Nike" },
        { title: "Best Mic under ₹5000", views: 25000, sponsors: "Blue Yeti" },
      ]
    });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});


module.exports = router;
