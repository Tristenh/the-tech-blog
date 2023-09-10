const router = require("express").Router();
const userRoutes = require("./userRoutes");
const commentRoutes = require("./commentRoute");
const createpost = require("./createpost");

router.use("/users", userRoutes);
router.use("/comments", commentRoutes);
router.use("/createpost", createpost);

module.exports = router;
