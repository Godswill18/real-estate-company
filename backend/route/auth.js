const router = require("express").Router();
const Admin = require("../models/Admin");
const bcrypt = require('bcrypt');

// Register

router.post("/register", async (req, res) => {
 
    try {
        // generate new password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        //create new Admin
        const newAdmin = new Admin({
            name: req.body.name,
            username: req.body.username,
            email: req.body.email,
            phonenumber: req.body.phonenumber,
            password: hashedPassword,
        });

        //save Admin and return response
        const admin = await newAdmin.save();
        res.status(200).json(admin);

    } catch (err) {
        res.status(500).json(err);
    }

});


//Login
router.post("/login", async(req, res) => {
    try{
        const admin = await Admin.findOne({email:req.body.email});
        !admin && res.status(404).json("Admin not found")

        const validPassword = await bcrypt.compare(req.body.password, admin.password)
        !validPassword && res.status(400).json("wrong password");

        res.status(200).json(admin)
    } catch (err) {
        res.status(500).json(err);
    }
    
});

module.exports = router