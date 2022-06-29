const Blog  = require('../models/blog.js');

const blogData = [
    {
        title: "MVC initials",
        contents: "It stands for Model View Controller",
        user_id: 1
    },
    {
        title: "Favoutite DB package",
        contents: "I always use MySQL",
        user_id: 2
    },
    {
        title: "Confused",
        contents: "What is peoples first step for setting up Express?",
        user_id: 3
    },
];

const seedBlogs = () => Blog.bulkCreate(blogData)

module.exports = seedBlogs;