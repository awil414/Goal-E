const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
const profileRoutes = require("./profileRoutes");

const apiRoutes = require('./api');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/profile', profileRoutes);

module.exports = router;