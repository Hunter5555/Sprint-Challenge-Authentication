const jwt = require('jsonwebtoken');
const mySecret = require('./secrets');

function getToken(users) {
  const payload = {
    userid: users.id,
    username: users.username
  };
  

  const options = {
    expiresIn: '1d'
  };

  const token = jwt.sign(payload, mySecret.jwtSecret, options);
  return token;
}

module.exports = getToken;