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
    const token = jwt.sign({
        _id: user._id,
        email: user.email
    });
    
    return {
        userId: createdUser._id,
        email: createdUser.email,
        token
    }
};