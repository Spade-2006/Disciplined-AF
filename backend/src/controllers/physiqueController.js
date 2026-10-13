const User = require("../models/User");
const { buildPhysiqueProfile } = require("../services/physiqueProfileService");

const getPhysiqueProfile = async (req, res) => {
  try {
    const user = await User.findById(req.userId)
      .select("age gender units height weight targetWeight bodyFatPercentage chest waist arms thighs modelType skinTone hairStyle hairColor")
      .lean();

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json(buildPhysiqueProfile(user));
  } catch {
    return res.status(500).json({ message: "Server error" });
  }
};

module.exports = { getPhysiqueProfile };