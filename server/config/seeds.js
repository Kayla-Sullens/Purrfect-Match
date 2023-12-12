const db = require("./connection");
const { User, Cat, Comment } = require("../models");
const cleanDB = require("./cleanDB");

const userData = require('./userData.json');
const catData = require('./catData.json');
const commentData = require('./commentData.json');

db.once("open", async () => {
  await cleanDB("User", "users");
  await cleanDB("Cat", "cats");
  await cleanDB("Comment", "comments");

  // bulk create each model
await User.insertMany(userData);
await Cat.insertMany(catData);
await Comment.insertMany(commentData);

  console.log("users seeded");

  process.exit();
});
