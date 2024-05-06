// const express = require("express");
// const app = express();


   

// const rooms = [[
//     { name: "Aarav", roomno: 1, age: 25 },
//     { name: "Aanya", roomno: 1, age: 30 },
//     { name: "Advait", roomno: 1, age: 22 }
//   ],
//   [
//     { name: "Anaya", roomno: 2, age: 28 },
//     { name: "Arjun", roomno: 2, age: 26 },
//     { name: "Avani", roomno: 2, age: 24 }
//   ],
//   [
//     { name: "Aryan", roomno: 3, age: 32 },
//     { name: "Dia", roomno: 3, age: 27 },
//     { name: "Divya", roomno: 3, age: 29 }
//   ],
//   [
//     { name: "Eshaan", roomno: 4, age: 23 },
//     { name: "Isha", roomno: 4, age: 31 },
//     { name: "Kabir", roomno: 4, age: 28 }
//   ],
//   [
//     { name: "Kavya", roomno: 5, age: 26 },
//     { name: "Manan", roomno: 5, age: 29 },
//     { name: "Mira", roomno: 5, age: 25 }
//   ]];


// app.use(express.json());

// app.get('/', function(req,res){
//      res.send("data of students in each room is printed below")

// const studentData = [];
//  for(let i=0;i<rooms.length;i++)
//  {
//     for(let j=0;j<rooms[i].length;j++)
//     {
//         studentData.push({
//             name: rooms[i][j].name,
//             age: rooms[i][j].age
//           });  
//     }
//  }  

//  res.json(studentData);
// })

// app.listen(3000);


const express = require("express");
const app = express();

const rooms = [
  [
    { name: "Aarav", roomno: 1, age: 25 },
    { name: "Aanya", roomno: 1, age: 30 },
    { name: "Advait", roomno: 1, age: 22 }
  ],
  [
    { name: "Anaya", roomno: 2, age: 28 },
    { name: "Arjun", roomno: 2, age: 26 },
    { name: "Avani", roomno: 2, age: 24 }
  ],
  [
    { name: "Aryan", roomno: 3, age: 32 },
    { name: "Dia", roomno: 3, age: 27 },
    { name: "Divya", roomno: 3, age: 29 }
  ],
  [
    { name: "Eshaan", roomno: 4, age: 23 },
    { name: "Isha", roomno: 4, age: 31 },
    { name: "Kabir", roomno: 4, age: 28 }
  ],
  [
    { name: "Kavya", roomno: 5, age: 26 },
    { name: "Manan", roomno: 5, age: 29 },
    { name: "Mira", roomno: 5, age: 25 }
  ]
];

app.use(express.json());

app.get('/', function(req, res) {
  res.send(`
    <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
          }
          h2 {
            color: #333;
          }
          ul {
            list-style-type: none;
            padding: 0;
          }
          li {
            margin-bottom: 10px;
          }
        </style>
      </head>
      <body>
        <h2>Data of students in each room:</h2>
        ${formatStudentData(rooms)}
      </body>
    </html>
  `);
});

function formatStudentData(rooms) {
  let result = '<ul>';

  for (let i = 0; i < rooms.length; i++) {
    for (let j = 0; j < rooms[i].length; j++) {
      result += `<li>Name: ${rooms[i][j].name}, Age: ${rooms[i][j].age}, Room: ${rooms[i][j].roomno}</li>`;
    }
  }

  result += '</ul>';
  return result;
}

app.listen(3000);
