const { Post } = require("../models");

const postData = [
  {
    title: "Getting Started with CMS Blogging",
    description: "Learn how to build a CMS-style blog site from scratch!",
    date_created: new Date(),
    user_id: 1,
  },
  {
    title: "The Power of Handlebars.js",
    description: "Discover the templating magic with Handlebars.js.",
    date_created: new Date(),
    user_id: 2,
  },
  {
    title: "User Authentication Strategies",
    description: "Securing your blog site with express-session and more.",
    date_created: new Date(),
    user_id: 3,
  },
  {
    title: "Optimizing Your Blog for SEO",
    description: "Boost your blog's search engine ranking with these tips.",
    date_created: new Date(),
    user_id: 4,
  },
];

// Export the seedPosts function
const seedPosts = () => Post.bulkCreate(postData, { individualHooks: true });
module.exports = seedPosts;
