const router = require("express").Router();
const userRoutes = require("./userRoutes");
const commentRoutes = require("./commentroute");
const postRoute = require("./postRoute");

router.use("/users", userRoutes);
router.use("/comments", commentRoutes);
router.use("/posts", postRoute);

module.exports = router;
