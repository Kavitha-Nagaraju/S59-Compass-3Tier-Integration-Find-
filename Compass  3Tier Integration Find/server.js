const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");

let app = express();
app.use(cors());

app.get("/employee",async(req,res)=>{
    let employeeArr = await Employee.find().limit(50).skip(100);
    res.json(employeeArr);
});


let employeeSchema = new mongoose.Schema({
    Id:String,
    firstName:String,
    lastName:String,
    email:String,
    gender:String,
    age:Number,
    department:String,
    profilePic:String,
    salary:Number,
    country:String,
});

let Employee = new mongoose.model("employee",employeeSchema,"employees");

let connectToMDB =async()=>{


   try {
    mongoose.connect("mongodb+srv://nagarajukavibhavi:nagarajukavibhavi@cluster0.okjzs.mongodb.net/tata?retryWrites=true&w=majority&appName=Cluster0");
    console.log("Connect to MDB");
   
   } catch (error) {
     console.log("Unable to connect MDB");
     console.log(error);
   }

};
app.listen(4867,()=>{
    console.log("Listen to the port number 4567");
  });
  
connectToMDB();

