// // const request = require('supertest');
// // const assert = require('assert');
// const express = require('express');

// const app = express();
// let requestCount = 0;

// function middleware(req,res,next){
//     requestCount++;
//     res.send(requestCount);
//     next();
// }
// app.use(middleware);
// // You have been given an express server which has a few endpoints.
// // Your task is to create a global middleware (app.use) which will
// // maintain a count of the number of requests made to the server in the global
// // requestCount variable

// app.get('/user', function(req, res) {
//   res.status(200).json({ name: 'john' });
// });

// app.post('/user', function(req, res) {
//   res.status(200).json({ msg: 'created dummy user' });
// });

// app.get('/requestCount', function(req, res) {
//   res.status(200).json({ requestCount });
// });
// app.listen(3000);
// // module.exports = app;


const express = require('express');
const app = express();
let requestCount = 0;

function middleware(req, res, next) {
  requestCount++;
  next(); // Move the `next` call here
}

app.use(middleware);

app.get('/user', function (req, res) {
  res.status(200).json({ name: 'john' });
});

app.post('/user', function (req, res) {
  res.status(200).json({ msg: 'created dummy user' });
});

app.get('/requestCount', function (req, res) {
  res.status(200).json({ requestCount });
});

app.listen(3000);
