const expressJwt = require('express-jwt');
const config = require('./config.json');
const User = require('./db/user');



function jwt() {
  const secret = config.secret;
  return expressJwt({ secret, algorithms: ['HS256'], isRevoked }).unless({
    path: [
      // public routes that don't require authentication
      '/user/code',
      '/user/reg',
      '/user/login',
      /\/product\/[A-Za-z\d]+/,
      /\/avatar\/[A-Za-z\d]+/,
      '/deal',
      /\/product\/category\/[A-Za-z\d]+/,
      "/searchcategory",
      "/search"
    ]
  });
}

async function isRevoked(req, payload, done) {
  const user = await User.findById(payload.id);

  if (!user) {
    return done(null, true);
  }

  done();
};

module.exports = jwt;
