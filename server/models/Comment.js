const { Schema, model } = require("mongoose");

const commentSchema = new Schema({
    comInfo: {
        type: String,
        required: true,
        minlength: 1,
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    catId: {
        type: Schema.Types.ObjectId,
        ref: "Cat"
    }
});


const Comment = model("Comment", commentSchema);

module.exports = Comment;