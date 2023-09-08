const sequelize = require("../config/connection");
const postSeeds = require("./post-seeds");
const userSeeds = require("./user-seeds");
const commentSeeds = require("./comment-seeds");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");
  await userSeeds();
  console.log("\n----- USER SEEDED -----\n");
  await postSeeds();
  console.log("\n----- POSTS SEEDED -----\n");
  await commentSeeds();
  console.log("\n----- comments SEEDED -----\n");

  process.exit(0);
};

seedAll();
