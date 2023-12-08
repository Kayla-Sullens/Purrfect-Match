const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb+srv://grigg005:GcHAI3zWq46VANCP@cluster0.f9gkys4.mongodb.net/"
);

module.exports = mongoose.connection;
