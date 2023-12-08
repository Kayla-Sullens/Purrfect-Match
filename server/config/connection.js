const mongoose = require("mongoose");

mongoose.connect(
<<<<<<< HEAD
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/mern-project-template"
=======
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/purrfect-match"
>>>>>>> 7e1a638ef8b9449bec01b8a1700b84b45775a5ee
);

module.exports = mongoose.connection;
