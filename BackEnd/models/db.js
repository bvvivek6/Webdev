const mongoose = require("mongoose");
require("dotenv").config();

const DB_URL = process.env.MONGODB_URI;

mongoose
  .connect(DB_URL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });
