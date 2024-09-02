const Post = require('../models/PostModel');

// Get all posts
const getPosts = async (req, res) => {
    try {
        const posts = await Post.find().sort({ createdAt: -1 }); // Sort by newest first
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch posts' });
    }
};

// Create a new post
const createPost = async (req, res) => {
    const { content } = req.body;

    try {
        const newPost = new Post({ content });
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(500).json({ message: 'Failed to create post' });
    }
};

module.exports = {
    getPosts,
    createPost,
};
