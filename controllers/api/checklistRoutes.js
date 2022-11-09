const router = require("express").Router();
const { Checklist } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
  try {
    const newChecklist = await Checklist.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    res.status(200).json(newChecklist);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete("/:id", withAuth, async (req, res) => {
  try {
    const checklistData = await Checklist.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });
    if (!checklistData) {
      res.status(404).json({ message: "No checklist found with this id!" });
      return;
    }
    res.status(200).json(checklistData);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.put("/:id", withAuth, async (req, res) => {
  try {
    const checklistData = await Checklist.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!checklistData[0]) {
      res.status(404).json({ message: `No checklist found with that id.` });
      return;
    }
    res.status(200).json(checklistData);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
