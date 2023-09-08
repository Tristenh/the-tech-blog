const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comment");
User.hasMany(Post, {
  onDelete: "CASCADE",
});
Post.belongsTo(User, {
  onDelete: "CASCADE",
});
Post.hasMany(Comment, {
});
Comment.belongsTo(Post, {
});
Comment.belongsTo(User, {
});
User.hasMany(Comment, {
});
module.exports = { User, Post, Comment };
