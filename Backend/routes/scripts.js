const express = require('express');
const router = express.Router();
const Script = require('../models/Script');
const protect = require('../middleware/authMiddleware');

// 🔐 Get scripts of logged-in user
router.get('/', protect, async (req, res) => {
  const scripts = await Script.find({ user: req.user.userId }).sort({ createdAt: -1 });
  res.json(scripts);
});

// 🔐 Create a script for the logged-in user
router.post('/', protect, async (req, res) => {
    console.log('POST /api/scripts hit');
  const { title, content, category } = req.body;

  const script = new Script({
    title,
    content,
    category,
    user: req.user.userId,
  });

  await script.save();
  console.log('Script saved:', script);
  res.status(201).json(script);
});

// 🔐 Update a script (only if owned by the user)
router.put('/:id', protect, async (req, res) => {
  const script = await Script.findById(req.params.id);

  if (!script) return res.status(404).json({ message: 'Script not found' });
  if (script.user.toString() !== req.user.userId) {
    return res.status(403).json({ message: 'Not authorized' });
  }

  const { title, content, category } = req.body;
  script.title = title;
  script.content = content;
  script.category = category;
  await script.save();

  res.json(script);
});

// 🔐 Delete a script (only if owned by the user)
router.delete('/:id', protect, async (req, res) => {
  const script = await Script.findById(req.params.id);

  if (!script) return res.status(404).json({ message: 'Script not found' });
  if (script.user.toString() !== req.user.userId) {
    return res.status(403).json({ message: 'Not authorized' });
  }

  await script.deleteOne();
  res.json({ message: 'Deleted successfully' });
});

module.exports = router;
