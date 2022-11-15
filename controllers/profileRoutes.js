const router = require("express").Router();
const { User, Goals, Checklist } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", withAuth, async (req, res) => {
  try {
    const goalsData = await Goals.findAll({
      where: {
        user_id: req.session.user_id,
      },
      attributes: ["id", "title", "description", "created_at", "user_id"],
      include: [
        {
          model: Checklist,
          attributes: ["id", "description", "created_at", "goals_id"],
        },
      ],
    });

    const goals = goalsData.map((goals) => goals.get({ plain: true }));

    res.render("profile", {
      goals,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET edit goal form
// router.get('/edit/:id', async (req, res) => {
//   try {
//     const goalsData = await Goals.findByPk(req.params.id, {
//       include: [
//         {
//           model: Goals,
//           attributes: ['title','description'],
//         },
//       ],
//     });

//     const edit = goalsData.get({ plain: true });

//     res.render('editGoals', {
//       ...edit,
//       logged_in: req.session.logged_in
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

//   //GET create goals form
//   router.get('/create', (req,res) => {
//     if (!req.session.logged_in) {
//       res.sendStatus(404)
//       return;
//     }
//     res.render('createGoals');
//   });

module.exports = router;
