const { Cat } = require("../models");

const catData = [
  {
    catName: "Bean",
    catGender: "Male",
    catAge: "1 year",
    catSpecies: "Bengal",
    catBio:
      "Bean is the best coach potatoe we have ever seen! He loves to watch TV while laying in bed, but also enjoys some playtime during the day.",
  },
  {
    catName: "Muffin",
    catGender: "Female",
    catAge: "1 year",
    catSpecies: "Bengal",
    catBio:
      "If you are looking for a cuddle buddy, then I am your gal! I love to be in your lap for pets and snuggles. I am quiet and calm, and will listen to anything you say.",
  },
  {
    catName: "Oliver",
    catGender: "Male",
    catAge: "4 months",
    catSpecies: "American Shorthair",
    catBio:
      "While I am a bit shy, I am also very curious. Playtime is how I learn about the world around me, and chase is one of my favorite games.",
  },
  {
    catName: "Luna",
    catGender: "Female",
    catAge: "5 months",
    catSpecies: "Norwegian Forest Cat",
    catBio:
      "I will be your best friend if you give my cute self a chance! I am loyal to a fault, and just want to make you happy. I also really love kids, because they like to play a lot too.",
  },
  {
    catName: "Charlie",
    catGender: "Male",
    catAge: "2 years",
    catSpecies: "Tabby Cat",
    catBio:
      "I enjoy exploring outside during the day, and I am always up for a car ride somewhere fun. But please, no kids and dogs since they both scare me a lot!",
  },
  {
    catName: "Jasper",
    catGender: "Male",
    catAge: "5 months",
    catSpecies: "American Wirehair",
    catBio:
      "People tell me I am the best kitty ever, since I am so gentle and kind. I am looking for a family who will love me as much as I love them, and have a more relaxed lifestyle.",
  },
  {
    catName: "Milo",
    catGender: "Male",
    catAge: "2 years",
    catSpecies: "Siberian",
    catBio:
      "You can take me on all of your adventures, since I love traveling and mind my manners always. I am also okay with kids since they like to play dress up and I enjoy that as well.",
  },
  {
    catName: "Zoe",
    catGender: "Female",
    catAge: "8 months",
    catSpecies: "Abyssinian",
    catBio:
      "Are you looking for an independent cat that you will not have to worry about much? Then pick me! I would love to be a part of a family, but I also like to have some time to myself.",
  },
  {
    catName: "Bella",
    catGender: "Female",
    catAge: "3 years",
    catSpecies: "Siamese",
    catBio:
      "If you want a companion to just relax, then we might be the purrfect match! Playing is not my favorite thing, and I do not like kids or dogs. I would prefer to be with a couple who is settled in life, since I do not like change.",
  },
];

const seedCats = async () => {
  try {
    await Cat.deleteMany(); // Remove existing cats

    const createdCats = await Cat.create(catData);

    console.log("Cats seeded:", createdCats);
  } catch (err) {
    console.error("Error seeding cats:", err);
  }
};

module.exports = seedCats;
