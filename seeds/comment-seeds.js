const { Comment } = require("../models"); // Ensure that the Comment model is correctly imported

const commentData = [
  {
    commentdesc:
      "Great tutorial! I'm excited to get started with CMS blogging.",
    post_id: 1,
    user_id: 1,
    date_created: new Date(),
  },
  {
    commentdesc:
      "I've been using Handlebars.js for my projects, and it's amazing!",
    post_id: 2,
    user_id: 2,
    date_created: new Date(),
  },
  {
    commentdesc:
      "User authentication is crucial for security. Thanks for the insights!",
    post_id: 3,
    user_id: 3,
    date_created: new Date(),
  },
  {
    commentdesc:
      "SEO optimization is essential for online visibility. Great tips!",
    post_id: 4,
    user_id: 4,
    date_created: new Date(),
  },
];

// Bulk create the comments
const seedComments = () =>
  Comment.bulkCreate(commentData, { individualHooks: true });
// Export the seedComments function
module.exports = seedComments;
