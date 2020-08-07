const { Schema, model } = require("mongoose");

const AccountSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  emailConfirmed: Boolean,
  password: String,
});

module.exports = model("account", AccountSchema); 