const router = require("express").Router();
const { Goals, Checklist } = require("../../models");
const withAuth = require("../../utils/auth");

//GET edit goal form
router.get("/edit/:id", async (req, res) => {
  try {
    const goalsData = await Goals.findByPk(req.params.id);

    const edit = goalsData.get({ plain: true });

    res.render("editGoals", {
      ...edit,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//Updating chosen goal
router.put("/:id", withAuth, async (req, res) => {
  console.log(req.body);
  try {
    const goalsData = await Goals.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    console.log(goalsData);
    if (!goalsData[0]) {
      res.status(404).json({ message: `No goals found with that id.` });
      return;
    }
    res.status(200).json(goalsData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Deleting chosen goal
router.delete("/:id", async (req, res) => {
  // delete on tag by its `id` value
  try {
    const goalsData = await Goals.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!goalsData) {
      res.status(400).json({ message: "No Goal found with that ID" });
      return;
    }
    res.status(200).json(goalsData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Updating steps for the goal
// router.put("/:id", withAuth, async (req, res) => {
//   try {
//     const checklistData = await Checklist.update(req.body, {
//       where: {
//         id: req.params.id,
//       },
//     });
//     if (!checklistData[0]) {
//       res.status(404).json({ message: `No checklist found with that id.` });
//       return;
//     }
//     res.status(200).json(checklistData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// //Deleting steps for chosen goal
// router.delete("/:id", withAuth, async (req, res) => {
//   try {
//     const checklistData = await Checklist.destroy({
//       where: {
//         id: req.params.id,
//         user_id: req.session.user_id,
//       },
//     });
//     if (!checklistData) {
//       res.status(404).json({ message: "No checklist found with this id!" });
//       return;
//     }
//     res.status(200).json(checklistData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;
