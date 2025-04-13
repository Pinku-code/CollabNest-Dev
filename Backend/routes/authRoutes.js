const express = require('express');
const router = express.Router();
const { register, login, logout } = require('../controllers/authController');
const protect = require('../middleware/authMiddleware');

router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);

// Protected dashboard route
router.get('/cr_dash', protect, (req, res) => {
  res.status(200).json({
    message: `Welcome, user ${req.user.userId}!`,
    data: {
      dashboardStats: {
        posts: 5,
        followers: 120,
        following: 42,
        earnings: "$253.45"
      }
    }
  });
});

module.exports = router;
