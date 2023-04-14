const express = require('express')
const router = express.Router()
const Admin = require('../../models/Admin')
const auth = require('../../middleware/auth');
const jwt = require('jsonwebtoken')
const config = require('config')

// @route   GET api/auth
// @desc    Admin Authentication
// @access  Public
router.get('/', auth, (req, res) => {
   res.send({"msg":"success"})
});

// @route   POST api/auth
// @desc    Admin Login
// @access  Public
router.post('/', async(req, res) => {
    const {username, password} = req.body;
    console.log(username)
    console.log(password)

    try {
        const admin = await Admin.find({username: username})
        if(admin.length==0) {
            return res.status(400).send({msg:"Authorization Failed"})
        }    
        const isAdmin = admin[0].password === password;
        
        if (!isAdmin){
            return res.status(400).send({"msg":"Authorization Failed"})
        }

        const payload = {
            admin: {
                id:admin.id
            }
        }

        jwt.sign(
            payload,
            config.get('jwtSecret'),
            {expiresIn: 1500},
            (err, token) =>{
                if(err) throw err;
                res.json({token})
            }
        )
    } catch (err) {
        console.error(err.message)
        res.send("error")
    }
 });

module.exports = router;
