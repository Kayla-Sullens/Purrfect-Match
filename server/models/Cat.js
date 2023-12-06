const { Schema, model } = require("mongoose");

const catSchema = new Schema({
    catName: {
        type: String,
        required: true,
        trim: true,
    },
    catGender: {
        type: String,
        required: true,
    },
    catAge: {
        type: Number,
        required: true,
    },
    catBreed: {
        type: String,
        required: true,
    },
    catBio: {
        type: String,
        required: true,
        minlength: 10,
    },
});


const Cat = model("Cat", catSchema);

module.exports = Cat;