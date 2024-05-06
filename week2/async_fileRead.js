
const fs = require('fs');

fs.readFile('file1.txt','utf-8',(err,data)=>{
  console.log(data);

})
app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
