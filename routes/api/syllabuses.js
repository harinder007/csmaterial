const express = require('express')
const Syllabus = require('../../models/Syllabus')
const router = express.Router();
const auth = require('../../middleware/auth');

// @route   GET api/syllabuses
// @desc   get all syllabuses
// @access  Public
router.get('/', async(req, res) => {
     try {
        const syllabuses = await Syllabus.find({});
        res.send(syllabuses);
     } catch (error) {
        console.log(error.toString())
        res.send({"err":error.toString()})
     }
});

// @route   DELETE api/syllabuses
// @desc    delete all syllabuses
// @access  Private
router.delete('/',auth, async(req, res) => {
    try {
        await Syllabus.deleteMany({});
         res.send("success");
    } catch (error) {
        console.log(error.toString())
        res.send({"err":error.toString()})
    }
});


// @route   POST api/syllabuses
// @desc    add new Syllabus
// @access  Private
router.post('/',auth, async(req, res) => {
    let { className, sem, subject, viewLink, downloadLink} =
    req.body;

    let syllabus;
    try {
        const syllabusFields = {
            className: className,
                sem: sem,
                subject:subject,
                viewLink: viewLink,
                downloadLink: downloadLink
            };
    
        syllabus = new Syllabus(syllabusFields);
        await syllabus.save();
        res.send({msg: 'success'});
    } catch (error) {
        res.send({"err":error.toString()})
        console.log(error.toString())
    }
});

module.exports = router;