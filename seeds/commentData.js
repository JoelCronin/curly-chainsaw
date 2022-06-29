const Comment = require('../models/comment')

const commentData = [
    {
       comment: "Couldnt agree more",
       user_id: 1,
       blog_id: 1,
    },
    {
        comment: "Yea Ive been there",
        user_id: 2,
        blog_id: 1,
     },
     {
        comment: "Well done",
        user_id: 2,
        blog_id: 2,
     },
];

const seedComments = () => Comment.bulkCreate(commentData)

module.exports = seedComments;