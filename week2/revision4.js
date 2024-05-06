// Set up an Express.js application with a single API endpoint that responds with a JSON object containing information about your favorite book, including title and author.

const express = require("express");
const app = express();


const my_favouriteNotebook = {
    title: "readme anytime",
    author: "simsons"
}
app.use(express.json());
app.get('/',(req,res)=>{
   res.json(my_favouriteNotebook);
})
app.listen(3000,()=>{
    console.log("the server is running on port 3000");
});



