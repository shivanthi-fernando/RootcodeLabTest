const express = require('express');
const router = express.Router();
const postController = require('../controllers/post');

module.exports = function () {

    router.post('/create', postController.createPost);
    router.get('/', postController.getAllPosts);
    router.get('/:id', postController.getCommentsForPosts);
    return router;
}