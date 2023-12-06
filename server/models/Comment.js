const { Schema, model } = require("mongoose");

const commentSchema = new Schema({
    comInfo: {
        type: String,
        required: true,
        minlength: 1,
    },
});


const Comment = model("Comment", commentSchema);

module.exports = Comment;