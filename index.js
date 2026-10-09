const express=require("express");
const app=express();
const path=require("path");   

const port=8080;

//using ejs
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

app.get("/",(req,res)=>{
    res.render("home.ejs");
});

//the code if logic is writtejn in the rolldice.ejs
// app.get("/rolldice",(req,res)=>{
    // res.render("rolldice.ejs");
// });

//direct implementation of the logic of rolldice
app.get("/rolldice",(req,res)=>{
    let diceVal= Math.floor(Math.random()*6)+1;
    res.render("rolldice.ejs",{diceVal});
});

//basic insta template
// app.get("/ig/:username",(req,res)=>{
    // let {username}=req.params;
    // res.render("insta.ejs",{username});
// });
// 
// loops in ejs
app.get("/ig/:username",(req,res)=>{
    const followers = ["dhiraj","dhananjay","nilesh","snehal","bhakti","chaitali"];
    let {username} = req.params;
    res.render("insta.ejs",{username,followers});
});

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
});
 