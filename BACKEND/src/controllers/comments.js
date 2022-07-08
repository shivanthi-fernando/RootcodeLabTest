const Comments = require('../models/comment');

//Create Comment
const creteComment = async (req, res) => {

    if (req.body) {
        const comment = new Comments(req.body);
        comment.save()
        .then(data => {
            res.status(200).send({ data: data});
        })
        .catch(error => {
            res.status(500).send({ error: error.message });
        });
    }
}

// Get all comments
const getAllComments = async (req, res) => {

    await Comments.find({})
    .then(data => {
        res.status(200).send({ data: data});
    })
    .catch(error => {
        res.status(500).send({ error: error.message });
    });
}

module.exports = {
    creteComment,
    getAllComments
};
