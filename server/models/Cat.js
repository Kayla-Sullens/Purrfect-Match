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
    catSpecies: {
        type: String,
        required: true,
    },
    catBio: {
        type: String,
        required: true,
        minlength: 10,
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
});


const Cat = model("Cat", catSchema);

module.exports = Cat;