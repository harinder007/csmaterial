const express = require('express')
const Program = require('../../models/Program')
const router = express.Router();
const auth = require('../../middleware/auth');

// @route   GET api/programs
// @desc   get all programs
// @access  Public
router.get('/', async(req, res) => {
     try {
        const programs = await Program.find({});
        res.send(programs);
     } catch (error) {
        console.log(error.toString())
        res.send({"err":error.toString()})
     }
});

// @route   DELETE api/programs
// @desc    delete all programs
// @access  Private
router.delete('/',auth, async(req, res) => {
    try {
        await Program.deleteMany({});
         res.send("success");
    } catch (error) {
        console.log(error.toString())
        res.send({"err":error.toString()})
    }
});


// @route   POST api/programs
// @desc    add new Program
// @access  Private
router.post('/',auth, async(req, res) => {
    let { className, sem, topic, viewLink, downloadLink} =
    req.body;

    let program;
    try {
        const programFields = {
            className: className,
                sem: sem,
                topic:topic,
                viewLink: viewLink,
                downloadLink: downloadLink
            };
    
        program = new Program(programFields);
        await program.save();
        res.send({msg: 'success'});
    } catch (error) {
        res.send({"err":error.toString()})
        console.log(error.toString())
    }
});

module.exports = router;
