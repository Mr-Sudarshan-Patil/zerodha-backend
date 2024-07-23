const mongoose = require("mongoose");
const {Schema} = require("mongoose");
// const bcrypt = require("bcryptjs");

const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, "Your username is required"],
  },
  email: {
    type: String,
    required: [true, "Your email address is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Your password is required"],
  },
});


const UserModel = mongoose.model('users', UserSchema);
module.exports=UserModel;