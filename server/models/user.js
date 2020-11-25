const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 6 },
  image: { type: String, required: true },
  places: [{ type: mongoose.Types.ObjectId, required: true, ref: "Place" }],
  journals: [{ type: mongoose.Types.ObjectId, required: true, ref: "Journal" }],
  blogs: [{ type: mongoose.Types.ObjectId, required: true, ref: "Blog" }],
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("User", userSchema);
