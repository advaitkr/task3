const express = require('express')
const app = express();
const mongoose = require("mongoose")
const router = require("./router/router")
mongoose.set('strictQuery', false)
mongoose.connect("mongodb://localhost:27017/emailcheck",{
    useNewUrlParser:true,
    useUnifiedTopology:true
  },(err)=>{
      if(err){
         console.log(err)
      }
      else{
        console.log("db connected")
      }
})



const PORT = process.env.PORT || 6000

app.use(express.json())

app.listen(process.env.PORT,()=>{
    console.log("Server is started...")
})