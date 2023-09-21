const express = require("express");
const DBconnection = require("./database/dbconnection");
const auth = require("./apis/auth.js");
const data = require ("./apis/data.js");
const helmet = require("helmet");



const app = express();



//db connect
DBconnection();

//middleware
app.use(express.json())
app.use(helmet());


app.use("/api",auth);
app.use("/api",data);




app.listen(8000,()=>{
    console.log("backend is running")
    })
