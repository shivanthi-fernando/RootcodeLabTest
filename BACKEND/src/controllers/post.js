const {response} = require('express');
const Post = require('../models/post');

// Create New Post
const createPost = async (req, res) => {

    if (req.body) {
        const post = new Post(req.body);
        await post.save()
        .then(data => {
            res.status(200).send({ data: data});
        })
        .catch(error => {
            res.status(500).send({ error: error.message });
        });
    }
}

// Get all posts
const getAllPosts = async (req, res) => {

    await Post.find({}).populate('comments', '_id comment')
    .then(data => {
        res.status(200).send({ data: data});
    })
    .catch(error => {
        res.status(500).send({ error: error.message });
    });
}

// Get comments for posts
const getCommentsForPosts = async (req, res) => {

    if (req.params && req.params.id) {
        await Post.findById(req.params.id)
        .populate ('comments', '_id comment')
        .then(data => {
           res.status(200).send({ comments: data.comments});
        })
        .catch(error => {
            res.status(500).send({ error: error.message });
        });
        
    }
}

module.exports = {
    createPost,
    getAllPosts,
    getCommentsForPosts
};

