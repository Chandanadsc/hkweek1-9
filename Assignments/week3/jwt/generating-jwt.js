const jwt = require("jsonwebtoken");

const value = {
    name:"chandana",
    password:"123123"
};

// const token = jwt.sign(value,"secret");

// console.log(token);

// const token = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiY2hhbmRhbmEiLCJwYXNzd29yZCI6IjEyMzEyMyIsImlhdCI6MTcwMzc1NTU2N30.Ofi2zhfWGiX1J8fHP1jt0XdpwQ2zfp1vGoeUWN-R1Xc","secret");


const token = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiY2hhbmRhbmEiLCJwYXNzd29yZCI6IjEyMzEyMyIsImlhdCI6MTcwMzc1NzA3Mn0.ZUKAdwpOcvdxcmQq510A4HRhNrbK_X6fuyYGf_kkjWM","secret");
console.log(token);