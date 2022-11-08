const router = require('express').Router();
const userRoutes = require('./userRoutes');
const goalsRoutes = require('./goalsRoutes');
const checklistRoutes = require('./checklistRoutes');

router.use('/users', userRoutes);
router.use('/goals', goalsRoutes);
router.use('/checklist', checklistRoutes);

module.exports = router;