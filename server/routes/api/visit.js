const express = require('express');
const VisitCount = require('../../models/VisitCount');

const router = express.Router();

// @route   GET api/visits
// @desc    get total visits
// @access  Public
router.get('/', async (req, res) => {
  try {
    const count = await VisitCount.find({});
    res.send({ count: count[0].count });
  } catch (error) {
    res.send({ err: error.toString() });
  }
});

// @route   POST api/visits
// @desc    increament total visits
// @access  Public
router.post('/', async (req, res) => {
  try {
    const count = await VisitCount.find({});

    await VisitCount.findByIdAndUpdate(count[0].id, {
      count: count[0].count + 1,
    });
    res.send({ count: count[0].count });
  
  } catch (error) {
    res.send({ err: error.toString() });
    console.log(error.toString());
  }
});

module.exports = router;
