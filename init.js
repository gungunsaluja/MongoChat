const mongoose = require("mongoose");
// const Chat = require("./models/chat.js")
const Chat = require("./models/chat.js");

main().then(()=>{
    console.log("Connection successful");
}).catch((err)=>console.log(err));
async function main()
{
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp")
}
let allchats = [
    {
      from: "Dhuruv",
      to: "gaurav",
      msg: "Aaj Mausam bada Beiman hai bada",
      created_at: new Date(),
    },
    {
      from: "Rajeev",
      to: "bhairav",
      msg: "sab log bade Beiman hai bada",
      created_at: new Date(),
    },
    {
      from: "nonnu",
      to: "dhuruv",
      msg: "Koi pagal samajhta hai koi insan",
      created_at: new Date(),
    },
    {
      from: "birju",
      to: "billu",
      msg: "Aur billu bhai kaise hoooo",
      created_at: new Date(),
    },
    {
      from: "rajkumar",
      to: "deepak",
      msg: "Aaj Mausam bada Beiman hai bada",
      created_at: new Date(),
    },
    {
      from: "Gambhir",
      to: "MSDhoni",
      msg: "Aaj Mausam bada Beiman hai bada",
      created_at: new Date(),
    },
  ];
Chat.insertMany([{
    from:"neha",
    to:"priya",
    msg:"send me your sheets",
    created_at:new Date(),
}
,]);
Chat.insertMany(allchats);
// init .js ke andr kisi b database ko initialise karne ka code likh dete h