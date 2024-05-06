const express = require("express");
const app = express();

app.arguments(express.json());

app.post("/health-checkup",function(req,res){
    const kidneys = res.body.kidneys;
    const kidneyLength = kidneys.length;

    res.send("you have"+kidneyLength+" Kidneys");

});
app.listen(3000);