const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname+"/date.js");

const app=express();

app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));

const items = [];
const buyItems = [];
const orderItems=[];
const importantItems=[];

app.get("/",function(req,res){
    
    const day = date.getDate();
    res.render("list",{listTitle:"To Do", newListItems:items,listDate:day});

});

app.post("/",function(req,res){
    //console.log(req.body); --> To (from To Buy i.e.,listTitle )
    const item = req.body.newItem;
    if(req.body.list === "Buy"){
        buyItems.push(item);
        res.redirect("/buy");
    }
    else if (req.body.list === "Order"){
        orderItems.push(item);
        res.redirect("/order");
    }
    else if (req.body.list === "Important"){
        importantItems.push(item);
        res.redirect("/important");
    }
    else{
        items.push(item);
        res.redirect("/");
    }
});


app.get("/buy",function(req,res){
    res.render("list",{listTitle: "Buy List", newListItems:buyItems,listDate:date.getDate()});
});

app.post("/buy",function(req,res){
    const item=req.body.newItem;
    buyItems.push(item);
    res.redirect("/buy");
});


app.get("/order",function(req,res){
    res.render("list",{listTitle: "Order List", newListItems:orderItems,listDate:date.getDate()});
});

app.post("/order",function(req,res){
    const item=req.body.newItem;
    buyItems.push(item);
    res.redirect("/order");
});

app.get("/about",function(req,res){
    res.render("about");
});

app.get("/important",function(req,res){
    res.render("list",{listTitle: "Important", newListItems:importantItems,listDate:date.getDate()});
});

app.post("/important",function(req,res){
    const item=req.body.newItem;
    buyItems.push(item);
    res.redirect("/important");
});


app.listen(3000,function(){
    console.log("Server running on port 3000");
});