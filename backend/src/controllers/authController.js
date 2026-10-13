const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { OAuth2Client } = require("google-auth-library");
const User = require("../models/User");

const googleClient = new OAuth2Client();

const generateToken = (userId) =>
  jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: "7d" });

const publicUser = (user) => {
  const doc = typeof user.toObject === "function" ? user.toObject() : user;
  const {
    _id,
    __v,
    password,
    googleId,
    authProvider,
    ...profile
  } = doc;

  return { id: _id, ...profile };
};

const registerUser = async (req, res) => {
  const { name, email, password } = req.body || {};

  if (
    typeof name !== "string" ||
    !name.trim() ||
    typeof email !== "string" ||
    !email.trim() ||
    typeof password !== "string" ||
    !password
  ) {
    return res.status(400).json({ message: "Name, email, and password are required" });
  }

  try {
    const normalizedEmail = email.trim().toLowerCase();
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      name: name.trim(),
      email: normalizedEmail,
      password: hashedPassword,
      authProvider: "local",
    });

    return res.status(201).json({
      token: generateToken(user._id),
      user: publicUser(user),
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json({ message: "An account with this email already exists" });
    }

    return res.status(500).json({ message: "Server error" });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body || {};

  if (typeof email !== "string" || !email.trim() || typeof password !== "string" || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  try {
    const user = await User.findOne({ email: email.trim().toLowerCase() });
    if (!user || !user.password || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    return res.status(200).json({
      token: generateToken(user._id),
      user: publicUser(user),
    });
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
};

const verifyGoogleToken = async (idToken) => {
  if (typeof idToken !== "string" || !idToken.trim()) {
    return { error: { status: 400, message: "Google ID token is required" } };
  }

  const clientId = process.env.GOOGLE_CLIENT_ID;
  if (!clientId) {
    return { error: { status: 500, message: "Google authentication is not configured" } };
  }

  try {
    const ticket = await googleClient.verifyIdToken({
      idToken: idToken.trim(),
      audience: clientId,
    });
    const googleUser = ticket.getPayload();

    if (
      typeof googleUser?.sub !== "string" ||
      !googleUser.sub ||
      typeof googleUser.email !== "string" ||
      !googleUser.email.trim() ||
      googleUser.email_verified !== true
    ) {
      return { error: { status: 401, message: "Invalid Google account" } };
    }

    return { googleUser };
  } catch {
    return { error: { status: 401, message: "Invalid Google ID token" } };
  }
};

const googleSignup = async (req, res) => {
  const verification = await verifyGoogleToken(req.body?.idToken);
  if (verification.error) {
    return res.status(verification.error.status).json({ message: verification.error.message });
  }

  try {
    const { googleUser } = verification;
    const email = googleUser.email.trim().toLowerCase();
    const existingUser = await User.findOne({
      $or: [{ googleId: googleUser.sub }, { email }],
    });
    if (existingUser) {
      return res.status(409).json({ message: "An account with this Google account or email already exists" });
    }

    const user = await User.create({
      name: googleUser.name,
      email,
      googleId: googleUser.sub,
      authProvider: "google",
    });

    return res.status(201).json({
      token: generateToken(user._id),
      user: publicUser(user),
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json({ message: "An account with this Google account or email already exists" });
    }

    return res.status(500).json({ message: "Server error" });
  }
};

const googleLogin = async (req, res) => {
  const verification = await verifyGoogleToken(req.body?.idToken);
  if (verification.error) {
    return res.status(verification.error.status).json({ message: verification.error.message });
  }

  try {
    const user = await User.findOne({ googleId: verification.googleUser.sub });
    if (!user) {
      return res.status(404).json({ message: "Google account not found. Sign up first." });
    }

    return res.status(200).json({
      token: generateToken(user._id),
      user: publicUser(user),
    });
  } catch {
    return res.status(500).json({ message: "Server error" });
  }
};

module.exports = { registerUser, loginUser, googleSignup, googleLogin };
