const express = require('express');
const { createPost, listPosts, editPost, deletePost } = require('../controllers/postController');

const router = express.Router();

router.post('/createPost', createPost);
router.get('/listPost', listPosts);
router.put('/editPost/:id', editPost);
router.delete('/deletePost/:id', deletePost);

module.exports = router;
