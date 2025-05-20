const jwt = require('jsonwebtoken');
const userModel = require('../models/user.model');
const bcrypt = require('bcrypt');
const blackListTokenModel = require('../models/blacklistToken.model');
const captainModel = require('../models/captain.model');

module.exports.authUser = async (req, res, next) => {
    const token = req.cookies.token || (req.headers.authorization && req.headers.authorization.split(' ')[1]);

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized: No token provided' });
    }

    // ✅ Check blacklist
    const isBlackListed = await blackListTokenModel.findOne({ token });
    if (isBlackListed) {
        return res.status(401).json({ message: 'Unauthorized: Token blacklisted' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModel.findById(decoded._id);
        if (!user) {
            return res.status(401).json({ message: 'Unauthorized: User not found' });
        }
        req.user = user;
        next();
    } catch (err) {
        return res.status(401).json({ message: 'Unauthorized: Invalid token' });
    }
};
module.exports.authCaptain = async (req, res, next) => {
    const token = req.cookies.token || (req.headers.authorization && req.headers.authorization.split(' ')[1]);

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    const isBlacklisted = await blackListTokenModel.findOne({ token: token });
   if (isBlacklisted) {
    return res.status(401).json({ message: 'Unauthorized: Token blacklisted' });
}

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const captain = await captainModel.findById(decoded._id);
        req.captain = captain;
        return next()
    } catch (err) {
        res.status(401).json({ message: 'Unauthorized' });
    }
    
}