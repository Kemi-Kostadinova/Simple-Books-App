const User = require("../models/User");
const jwt = require("../lib/jwt");

exports.register = async (userData) => {
    if (userData.password !== userData.rePassword) {
        throw new Error("Password mismatch!")
    }

    const user = await User.findOne({email: userData.email});
    if (user) {
        throw new Error("Email already exists!");
    };

    const createdUser = await User.create(userData);
    const token = generateToken(createdUser);
    
    return {
        userId: createdUser._id,
        email: createdUser.email,
        token
    }
};

function generateToken(user) {
    const payload = {
        _id: user._id,
        email: user.email
    };
    
    return jwt.sign(payload, "MYSECRET", { expiresIn: "2h" });
}