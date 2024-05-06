const express = require('express');

const app  = express();

app.get('/',(req,res)=>{
  res.send("Hello, HTTP!") 
})
app.listen(3000);

// console.log("Hello, Node.js!");