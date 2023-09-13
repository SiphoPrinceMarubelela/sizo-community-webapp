// initialize the express backend app
const express = require("express");
const app = express();

//test homepage api
app.get("/sizo",(req, res)=>{
    res.json({"testuser": "sizoMember"})
})


app.listen(8080, ()=>{
    console.log("App is running")
})