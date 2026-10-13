const express = require("express");
const { registerUser, loginUser, googleSignup, googleLogin } = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");
const { updateUserProfile } = require("../controllers/profileController");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/google/signup", googleSignup);
router.post("/google/login", googleLogin);
router.put("/profile", authMiddleware, updateUserProfile);
router.get("/me", authMiddleware, (req, res) => {
	res.json({ message: "Authenticated", userId: req.userId });
});

module.exports = router;