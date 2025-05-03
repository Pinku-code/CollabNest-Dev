// routes/videoRoutes.js
const express = require("express");
const router = express.Router();
const videoCtrl = require("../controllers/videoController");
const auth = require("../middleware/authMiddleware");

router.use(auth); // protect all routes below

router.get("/", videoCtrl.getVideos);
router.post("/", videoCtrl.createVideo);
router.put("/:id", videoCtrl.updateVideo);
router.delete("/:id", videoCtrl.deleteVideo);

module.exports = router;
