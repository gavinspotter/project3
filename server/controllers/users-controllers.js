const { validationResult } = require("express-validator");

const HttpError = require("../models/http-error");
const User = require("../models/user");

const getUsers = async (req, res, next) => {
  let users;

  try {
    users = await User.find({}, "-password");
  } catch (err) {
    const error = new HttpError(
      "fetching users failed, please try again later",
      500
    );
    return next(error);
  }
  res.json({ users: users.map((user) => user.toObject({ getters: true })) });
};

const signup = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return next(new HttpError("invalid inputs passed", 422));
  }

  const { name, email, password } = req.body;

  let existingUser;
  try {
    existingUser = User.findOne({ email: email });
  } catch (err) {
    const error = new HttpError(
      "signing up failed please try again later",
      500
    );
    return next(error);
  }

  const createdUser = new User({
    name,
    email,
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d6/Ra_Barque.jpg",
    password,
    places: [],
    journals: [],
    blogs: [],
  });

  try {
    await createdUser.save();
  } catch (err) {
    const error = new HttpError("signing up failed please try again.", 500);
    return next(error);
  }

  res.status(201).json({ user: createdUser.toObject({ getters: true }) });
};

const login = async (req, res, next) => {
  const { email, password } = req.body;

  let existingUser;
  try {
    existingUser = await User.findOne({ email: email });
  } catch (err) {
    const error = new HttpError("login in failed please try again later", 500);
    return next(error);
  }

  if (!existingUser || existingUser.password !== password) {
    const error = new HttpError(
      "Invalid credentials, could not log you in.",
      401
    );
    return next(error);
  }

  res.json({
    message: "logged in",
    user: existingUser.toObject({ getters: true }),
  });
};

exports.getUsers = getUsers;
exports.signup = signup;
exports.login = login;
