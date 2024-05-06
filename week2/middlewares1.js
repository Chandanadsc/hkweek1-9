const express = require('express');
const app = express();

const users = [
  { username: 'user1', password: 'password1' },
  { username: 'user2', password: 'password2' }
];

app.use(express.urlencoded({ extended: true })); // Middleware for parsing form data

// Authentication middleware
const authenticate = (req, res, next) => {
  const { username, password } = req.body;

  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    req.user = user; // Attach the user object to the request
    next();
  } else {
    res.status(401).send('Invalid credentials');
  }
};

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Apply the authentication middleware to the login route
app.post('/login', authenticate, (req, res) => {
  res.send(`Welcome, ${req.user.username}!`);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
