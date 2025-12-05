const bcrypt = require('bcrypt');

const ROUNDS = Number(process.env.BCRYPT_ROUNDS || 10);

// Hash a plain-text password using bcrypt.
async function hash(password) {
  const salt = await bcrypt.genSalt(ROUNDS);
  return bcrypt.hash(password, salt);
}

// Compare a plain-text password against a stored bcrypt hash.
function compare(password, passwordHash) {
  return bcrypt.compare(password, passwordHash);
}

module.exports = {
  hash,
  compare,
};





