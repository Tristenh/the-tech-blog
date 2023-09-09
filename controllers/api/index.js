const router = require('express').Router();
const userRoutes = require('./userRoutes');
const commentRoutes = require('./commentRoute');

router.use('/users', userRoutes);
router.use('/comments', commentRoutes);

module.exports = router;
