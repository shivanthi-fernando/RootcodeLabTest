const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    comment: {type: String, required: true},
    posts: [{type: mongoose.Schema.Types.ObjectId, required: false, ref: 'posts'}]
});

const Comments = mongoose.model('comments', commentSchema);
module.exports = Comments;