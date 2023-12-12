const catSeeds = require("../schemas/cat-seeds");
const db = require("./connection");
const { User } = require("../models");
const cleanDB = require("./cleanDB");

db.once("open", async () => {
  await cleanDB("User", "users");
  await cleanDB("Cat", "cats");

  await User.create({
    firstName: "Pamela",
    lastName: "Washington",
    email: "pamela@testmail.com",
    password: "password12345",
  });

  await User.create({
    firstName: "Elijah",
    lastName: "Holt",
    email: "eholt@testmail.com",
    password: "password12345",
  });

  console.log("users seeded");
  // Seed cat data using cat-seeds.js
  await catSeeds();

  console.log("Cats seeded");

  process.exit();
});
