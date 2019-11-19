const express = require("express");
const faker = require('faker');
const app = express();
app.engine('html',require('ejs').renderFile);
app.use(express.static("public"));

var email = faker.internet.email();
var phone = faker.phone.phoneNumber();

// routes
app.get("/",function(req,res){
   res.render("index.html", { outEmail:email , outPhone:phone}); 
});


app.get("/cpu", function(req, res){
    res.render("cpu.html");
});

app.get("/gpu", function(req,res){
    res.render("gpu.html");
});

app.get("/memory", function(req,res){
    res.render("memory.html");
});

app.get("/powersupply",function(req,res){
    res.render("powersupply.html");
});



//server listener
app.listen(process.env.PORT,process.env.IP,function(){
    console.log("Running Express Server...");
});


