const User = require('./user')
const Comment = require('./comment')
const Blog = require('./blog');
// const { blob } = require('stream/consumers');

User.hasMany(Comment, {
    foreignKey: 'user_id'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

User.hasMany(Blog, {
    foreignKey: "user_id"
});

Blog.belongsTo(User, {
    foreignKey: "user_id"
});

Blog.hasMany(Comment, {
    foreignKey: 'blog_id'
});

Comment.belongsTo(Blog, {
    foreignKey: 'blog_id'
});

module.exports = { User, Blog, Comment }