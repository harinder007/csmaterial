const express = require('express')
const Assignment = require('../../models/Assignment')
const router = express.Router();
const auth = require('../../middleware/auth');

// @route   GET api/assignments
// @desc   get all assignments
// @access  Public
router.get('/', async(req, res) => {
     try {
        const assignments = await Assignment.find({});
        res.send(assignments);
     } catch (error) {
        console.log(error.toString())
        res.send({"err":error.toString()})
     }
});

// @route   DELETE api/assignments
// @desc    delete all assignments
// @access  Private
router.delete('/',auth, async(req, res) => {
    try {
        await Assignment.deleteMany({});
         res.send("success");
    } catch (error) {
        console.log(error.toString())
        res.send({"err":error.toString()})
    }
});


// @route   POST api/assignments
// @desc    add new Assignment
// @access  Private
router.post('/',auth, async(req, res) => {
    let { className, sem, year, subject, topic, viewLink, downloadLink} =
    req.body;

    let assignment;
    try {
        const assignmentFields = {
            className: className,
                sem: sem,
                year: year,
                subject:subject,
                topic:topic,
                viewLink: viewLink,
                downloadLink: downloadLink
            };
    
        assignment = new Assignment(assignmentFields);
        await assignment.save();
        res.send({msg: 'success'});
    } catch (error) {
        res.send({"err":error.toString()})
        console.log(error.toString())
    }
});

module.exports = router;
