const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const users = require("../models/userModel");

exports.loginAuth = async (req, res) => {
  const { email, password } = req.body;
  const userexists = await users.findOne({ email });
  if (userexists) {
    return res.status(400).json({ message: "User already exists" });
  }
  const newUser = new users({ email, password });
  await newUser.save();

  res.status(200).json({ message: "User created!" });
};

exports.signAuth = async (req, res) => {
  const { email, password } = req.body;
  const user = await users.findOne({ email });
  if (!user) {
    return res.status(400).json({ message: "No user found" });
  }

  const isMatch = await bcrypt.compare(password, uses.password);
  if (!isMatch) {
    res.status(400).json({ message: "Invalid Credentials" });
  }

  //generate token
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "3h",
  });
  res.send({ token });
};
