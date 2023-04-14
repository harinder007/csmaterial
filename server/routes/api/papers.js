const express = require('express')
const Paper = require('../../models/Paper')
const router = express.Router();
const auth = require('../../middleware/auth');

// @route   GET api/papers
// @desc   get all papers
// @access  Public
router.get('/', async(req, res) => {
     try {
        const papers = await Paper.find({});
        res.send(papers);
     } catch (error) {
        res.send({"err":error.toString()})
        console.log(error.toString())
     }
});

// @route   GET api/papers
// @desc    delete all papers
// @access  Private
router.delete('/', async(req, res) => {
    try {
        await Paper.deleteMany({});
         res.send("success");
    } catch (error) {
        res.send({"err":error.toString()})
        console.log(error.toString())
    }
});


// @route   POST api/papers
// @desc    add new paper
// @access  Private
router.post('/',auth, async(req, res) => {
    let { className, sem, year, viewLink, downloadLink} =
    req.body;
    let paper;
    try {
        const paperFields = {
            className: className,
                sem: sem,
                year: year,
                viewLink: viewLink,
                downloadLink: downloadLink
            };
    
        paper = new Paper(paperFields);
        await paper.save();
        res.send({msg: 'success'});
    } catch (error) {
        res.send({"err":error.toString()})
        console.log(error.toString())
    }
});

module.exports = router;
