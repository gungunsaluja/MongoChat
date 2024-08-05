const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");

app.set("views", path.join(__dirname, "views"));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));

async function main()
{
    
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp'); 

}

main().
then(()=>{
    console.log("connection successful")
}).catch((err)=>console.log(err))

// let chat1 = new Chat({
//     from:"neha",
//     to:"priya",
//     msg:"send me your exam sheets",
//     created_at:new Date()
// });
// chat1.save().then((res)=>{
//     console.log(res);
// });


// index route
app.get("/chats", async (req, res)=>{
    let chats = await Chat.find();
    console.log(chats);
    res.render("index.ejs",{chats});
});
// new routes
app.get("/chats/new",(req,res)=>{
    res.render("new.ejs")    
}),
// create Route
app.post("/chats",(req,res)=>{
    let {from, to ,msg} = req.body;
    let newChat = new Chat({
        from:from,
        to:to,
        msg:msg,
        created_at:new Date()
    });
    newChat.save().then((res)=>{console.log("chat was saved")}).catch((err)=>{
        console.log(err);
    })
    // console.log(newChat);
    // res.send("working");

    res.redirect("/chats")
})

// edit routes
app.get("/chats/:id/edit",async (req,res)=>{
    let {id} = req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs",{chat});
    

})
// update route
app.put("/chats:id",(req,res)=>{
    let {id} = req.paramsl
    let {newMsg} = req.body;
    let updatedChat = Chat.findByIdAndUpdate(id,{msg:newMsg},{runValidators:true,new:true});
    console.log(updatedChat);
})


app.listen(8080,()=>{
    console.log("server is listening on port number 8080"); 

})
app.get("/",(req,res)=>{
    res.send("root is working")
})