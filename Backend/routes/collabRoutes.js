// routes/collabRoutes.js
const express = require("express");
const router = express.Router();
const collabCtrl = require("../controllers/collabController");
const auth = require("../middleware/authMiddleware");

router.use(auth); // protect all routes below

router.get("/", collabCtrl.getCollabs);
router.post("/", collabCtrl.createCollab);
router.put("/:id", collabCtrl.updateCollab);
router.delete("/:id", collabCtrl.deleteCollab);

module.exports = router;
