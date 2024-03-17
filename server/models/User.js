const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username is required!"],
        minLength: [4, "Username should be at least 4 characters!"],
    },
    email: {
        type: String,
        required: [true, "Email is required!"],
        minLength: [10, "Email should be at least 10 characters!"],
    },
    password: {
        type: String,
        required: [true, "Password is required!"],
        minLength: [3, "Password should be at least 3 characters!"],
    },
    wishedBooks: [{
        type: mongoose.Types.ObjectId,
        ref: "Book"  
    }],
});

userSchema.pre("save", async function(){
    this.password = await bcrypt.hash(this.password, 12);
});

const User = mongoose.model("User", userSchema);

module.exports = User;