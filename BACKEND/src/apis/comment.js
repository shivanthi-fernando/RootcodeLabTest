const express = require('express');
const router = express.Router();
const commentController = require('../controllers/comments');

module.exports = function () {

    router.post('/create', commentController.creteComment);
    router.get('/', commentController.getAllComments);
    return router;
}