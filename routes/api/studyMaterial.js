const express = require('express')
const StudyMaterial = require('../../models/StudyMaterial')
const router = express.Router();
const auth = require('../../middleware/auth');

// @route   GET api/studyMaterial
// @desc   get all Study Material
// @access  Public
router.get('/', async(req, res) => {
     try {
        const studyMaterial = await StudyMaterial.find({});
        res.send(studyMaterial);
     } catch (error) {
        console.log(error.toString())
        res.send({"err":error.toString()})
     }
});

// @route   DELETE api/studyMaterial
// @desc    delete all Study Material
// @access  Private
router.delete('/',auth, async(req, res) => {
    try {
        await StudyMaterial.deleteMany({});
         res.send("success");
    } catch (error) {
        console.log(error.toString())
        res.send({"err":error.toString()})
    }
});


// @route   POST api/studyMaterial
// @desc    add new Study Material
// @access  Private
router.post('/',auth, async(req, res) => {
    let { className, sem, subject, topic, viewLink, downloadLink} =
    req.body;

    let material;
    try {
        const materialFields = {
            className: className,
                sem: sem,
                subject:subject,
                topic:topic,
                viewLink: viewLink,
                downloadLink: downloadLink
            };
    
        material = new StudyMaterial(materialFields);
        await material.save();
        res.send({msg: 'success'});
    } catch (error) {
        res.send({"err":error.toString()})
        console.log(error.toString())
    }
});

module.exports = router;