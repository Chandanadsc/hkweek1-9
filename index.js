const express = require('express');
const port = 3000;
const app = express();

// Use express.json() instead of bodyParser
app.use(express.json());

app.post('/', function(req, res) {
   console.log(req.body);
   res.send("Hello World");
});

app.listen(port, () => {
   console.log(`Server is running on port ${port}`);
});
