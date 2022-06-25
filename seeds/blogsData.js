const { Blog } = require('../models/blog.js');

const blogData = [
    {
        title: "MVC initials",
        contents: "It stands for Model View Controller",
        user_name: "Smithyxx"
    },
    {
        title: "Favoutite DB package",
        contents: "I always use MySQL",
        user_name: "SqlFiend"
    },
    {
        title: "Confused",
        contents: "What is peoples first step for setting up Express?",
        user_name: "Roger"
    },
];

const seedBlogs = () => Blog.bulkCreate(blogData)

module.exports = seedBlogs;