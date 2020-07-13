const express = require("express");

const router = express.Router();

const Developer = require("../../model/Developers");

// @route   GET api/developers
// @desc    GET all developers
// @access  Public
router.get("/", (req, res) => {
  //MongoDB syntax get all stuffs
  Developer.find()
    .sort({
      name: -1,
    })
    .then((data) => {
      res.json(data);
    });
});

// @route POST api/developers
// @desc Create new developer
// @access public

router.post("/", (req, res) => {
  const newDev = new Developer({
    name: req.body.name,
    Q1: req.body.Q1,
    Q2: req.body.Q2,
    Q3: req.body.Q3,
  });

  newDev
    .save()
    .then((dev) => res.json({ success: "Successfully Created Entry", dev }));
});

module.exports = router;
