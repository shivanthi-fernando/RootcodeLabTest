const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    postTitle: {type: String, required: true},
    postDescription: {type: String, required: true},
    comments: [{type: mongoose.Schema.Types.ObjectId, required: false, ref:'comments'}]
});

const Posts = mongoose.model('posts', postSchema);
module.exports = Posts;