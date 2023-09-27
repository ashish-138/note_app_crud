const router = require("express").Router();
const Notes = require("../database/Notes.js");


//post data

router.post("/home",async(req,res)=>{
    try{
        const newData = await new Notes({
        title:req.body.title,
        note:req.body.note,
        userId:req.body.userId
    
    })

    const data =await newData.save();

    res.status(200).json("Note saved successfully!");
    
    }catch(err){
        res.status(500).json("err")
    }
})


//get data

router.get("/home",async(req,res)=>{
    const userId =   req.query.userId;
    const noteId = req.query.noteId;
    try{
        const data = userId? await Notes.find({userId:userId}): await Notes.findById({_id:noteId});
        res.status(200).json(data)
    }catch(err){
        res.status(500).json(err);
    }
})



//update a data

router.put("/home/:id",async(req,res)=>{
    try{

        await Notes.findByIdAndUpdate({_id:req.params.id},{$set:req.body});
        res.status(200).json("Data updates succefully!")

    }catch(err){
        res.status(500).json(err)
    }
})

//delete a data

router.delete("/home/:id",async(req,res)=>{
    try{
        await Notes.findByIdAndDelete({_id:req.params.id})
        res.status(200).json("Data deleted succesfully!")
    }catch(err){
        res.status(500).json(err);
    }
})

module.exports = router;