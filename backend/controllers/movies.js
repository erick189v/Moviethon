const mongoose = require("mongoose");

const { DATABASE_URI } = process.env;

mongoose.connect(DATABASE_URI);

mongoose.connect
  .on("open", () => console.log("connected to mongo db"))
  .on("close", () => console.log("disconnected from mongo db"))
  .on("error", (error) => console.log(error));
