const router = require('express').Router();
const { User, Goals, Checklist } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try {
      const goalsData = await Goals.findAll({
        attributes: ['id', 'title', 'description', 'created_at', 'user_id'],
        include: [
          {
            model: Checklist,
            attributes: ['id', 'description', 'created_at', 'goals_id'],
          },
        ],
      });
  
      const goals = goalsData.map((goals) => goals.get({ plain: true })); 
  
      res.render('profile', {
        goals,
        // logged_in: req.session.logged_in,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  
  // GET login form
  router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
    res.render('login');
  });
  
  // GET signup form
  router.get('/signup', (req, res) => {
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
    res.render('signup');
  });
  
  module.exports = router;
  