const express = require('express');
const app = express();

app.get("/",(req,res)=>
{
    res.send("WELCOME TO THE JUNGLE");
})
app.listen(3000,()=>{
    console.log("wazaaappp");
});

