const mongoose = require("mongoose");
require("dotenv").config();
const { MONGO_CONNECTION_URI } = process.env;

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(MONGO_CONNECTION_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    console.log(error);
    process.exit();
  }
};

module.exports = connectDb;
