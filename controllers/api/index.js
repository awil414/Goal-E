const router = require('express').Router();
const userRoutes = require('./userRoutes');
const createGoalsRoutes = require('./createGoalsRoutes');
const editGoalsRoutes = require('./editGoalsRoutes');

router.use('/users', userRoutes);
router.use('/create', createGoalsRoutes);
router.use('/edit', editGoalsRoutes);


module.exports = router;