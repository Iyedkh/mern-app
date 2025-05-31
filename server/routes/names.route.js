const express = require('express');
const router = express.Router();
const Name = require('../models/Name');

// GET all names
router.get('/', async (req, res) => {
  try {
    const names = await Name.find();
    res.json(names);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new name
router.post('/', async (req, res) => {
  const name = new Name({ value: req.body.value });

  try {
    const newName = await name.save();
    res.status(201).json(newName);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
