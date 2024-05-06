const jwt = require("jsonwebtoken");
const contents ={
    "name": "chandana",
    "password": "123123",
    "iat": 1703755567
};

const newToken = jwt.sign(contents,"djshdha");

console.log(newToken);
