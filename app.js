const express = require('express');
const app = express();

app.get("/",(req,res)=>
{
    res.send("WELCOME TO THE JUNGLE");
})
const port =process.env.port || 3000;

app.listen(port,()=>{
    console.log("wazaaappp");
    console.log("WOKRING")
});

