const mongoose = require("mongoose");

require("../schemas/product");
require("../schemas/category");
require("../schemas/user");

mongoose.connect(process.env.DATABASE_URL, () =>
  console.log("database connected")
);
