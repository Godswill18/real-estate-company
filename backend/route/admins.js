const router = require("express").Router();
const Admin = require("../models/Admin");


//delete
router.delete("/:id", async (req, res) => {
    if (req.body.userId === req.params.id || req.body.isAdmin) {
        try{
            await Admin.findByIdAndDelete(req.params.id);
            res.status(200).json('Account has been deleted');
        } catch (err) {

            return res.status(500).json(err);
        }
    }else {
        return res.status(403).json("You can only delete your account!!");
    }
})
//get a user
router.get("/:id", async (req, res) => {
    try{
        const admin = await Admin.findById(req.params.id);
        const {password, updatedAt, ...other} = admin._doc;
        res.status(200).json(other);
    } catch (err) {
        res.status(500).json(err);
    }
});
//get all user

module.exports = router;