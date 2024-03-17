const bcrypt = require("bcrypt");

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

exports.login = async ({email, password}) => {
    const user = await User.findOne({email});

    if (!user) {
        throw new Error("Wrong email or password!");
    };

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
        throw new Error("Wrong email or password!");
    };

    const token = await generateToken(user);

    return {
        userId: user._id,
        email: user.email,
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