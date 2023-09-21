const router = require("express").Router();
const Users = require("../database/Users.js");
const bcrypt = require("bcrypt");


//user register
router.post("/register", async(req,res)=>{
    
    try{
        
        const salt = await bcrypt.genSalt(10);
        const hashpassword  = await bcrypt.hash(req.body.password, salt);
        
        const newUser = await new Users({
            fname:req.body.fname,
            lname:req.body.lname,
            email:req.body.email,
            password:hashpassword,
        })
        const user = await newUser.save();
        res.status(200).json(newUser);

    }catch(err){
        res.status(500).json(err);
    }
})
//user login

router.post("/login", async (req,res)=>{
    try{
        //email validation
        const user = await Users.findOne({email:req.body.email});
        
        if(!user){
            res.status(404).json("User Not Found");
        }else{
            //password validation
            const validatePwd = await bcrypt.compare(req.body.password,user.password)
            if(!validatePwd){
                res.status(400).json("Password is Wrong");
            }else{
                res.status(200).json(user);
            }
        }

    }catch(err){
        res.status(500).json(err);
    }
})


module.exports = router;