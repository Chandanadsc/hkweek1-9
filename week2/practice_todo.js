const express = require("express");
const bodyParser = require("body-parser");
const fs = require('fs');

const app = express();
const port = 3000;

app.use(bodyParser.json());

let todos = [];
const filePath = 'todos.json';

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error("Error reading todos from file:", err.message);
  } else {
    todos = JSON.parse(data);
    console.log("Initial data loaded");
  }
});

app.get('/', (req, res) => {
  res.json(todos);
});

app.post('/addtodo',(req,res)=>{
    const newtodo = req.body;
    todos.push(newtodo);
    saveTodoToFile(); // Corrected function name
    res.json(newtodo);
  })
  
  function saveTodoToFile(){ // Corrected function name
      fs.writeFile(filePath,JSON.stringify(todos,null,2),(err)=>{
          if (err) {
              console.error('Error writing todos to file:', err.message);
            } else {
              console.log('Todos saved to file successfully.');
            }
      });
  }
app.listen(port, () => {
  console.log(`Todo app listening at http://localhost:${port}`);
});
