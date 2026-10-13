const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const { getPhysiqueProfile } = require("../controllers/physiqueController");

const router = express.Router();

router.get("/physique", authMiddleware, getPhysiqueProfile);

module.exports = router;