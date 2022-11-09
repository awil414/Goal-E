const router = require("express").Router();
const { Goals } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
  try {
    const newGoals = await Goals.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    res.status(200).json(newGoals);
  } catch (err) {
    res.status(400).json(err);
  }
});
router.delete("/:id", withAuth, async (req, res) => {
  try {
    const goalsData = await Goals.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });
    if (!goalsData) {
      res.status(404).json({ message: "No goals found with this id!" });
      return;
    }
    res.status(200).json(goalsData);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.put("/:id", withAuth, async (req, res) => {
  try {
    const goalsData = await Goals.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!goalsData[0]) {
      res.status(404).json({ message: `No goals found with that id.` });
      return;
    }
    res.status(200).json(goalsData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
