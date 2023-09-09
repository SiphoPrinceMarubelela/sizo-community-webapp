// initialize the express backend app
const express = require("express");
const app = express();

//test homepage api
app.get("/homepage", (req, res)=>{
    res.send("Welcome to the home page")
})


app.listen(8080, ()=>{
    console.log("App is running")
})