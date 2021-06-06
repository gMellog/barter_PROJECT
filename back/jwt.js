const expressJwt = require('express-jwt');
const config = require('./config.json');
const User = require('./db/user');

module.exports = jwt;

function jwt() {
    const secret = config.secret;
    return expressJwt({ secret, algorithms: ['HS256'], isRevoked }).unless({
        path: [
            // public routes that don't require authentication
            '/user/code',
            '/user/reg',
            '/user/login'
        ]
    });
}

async function isRevoked(req, payload, done) {
    console.log('hello');
    const user = await User.findById(payload.id);

    if (!user) {
        return done(null, true);
    }

    done();
};
