const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
  const token = req.headers.authorization;
  //bearer hdfsdhfhdsfqshfhhlala2q34jj get back token from string
  const words = token.split(" ");
  //split bearer and string: jskdfkjs2343
  const jwtToken = words[1];
  const decodedValue = jwt.verify(jwtToken, JWT_SECRET); //(token,secret-key)
  if (decodedValue.username) {
    req.username = decodedValue.username;
    next();
  } else {
    res.status(403).json({
      msg: "You are not authenticated",
    });
  }
  //jwt save the database call
}

module.exports = userMiddleware;
