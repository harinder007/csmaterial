const express = require('express')
const Paper = require('../../models/Paper')
const router = express.Router();

// @route   GET api/papers
// @desc    IP address verification of papers
// @access  Public
router.get('/', async(req, res) => {
    console.log('hi')
     const papers = await Paper.find({});
     res.send(papers);
});

// @route   GET api/papers
// @desc    IP address verification of papers
// @access  Public
router.get('/deleteAll', async(req, res) => {
    await Paper.deleteMany({});
     res.send("success");
});


// @route   POST api/papers
// @desc    IP address verification of papers
// @access  Public
router.post('/', async(req, res) => {
    let { className, sem, year, viewLink, downloadLink} =
        req.body;
    console.log("sem", sem)
    let paper;
    const paperFields = {
        className: className,
            sem: sem,
            year: year,
            viewLink: viewLink,
            downloadLink: downloadLink
        };

    paper = new Paper(paperFields);
    await paper.save();
    res.send('success');
});

module.exports = router;
